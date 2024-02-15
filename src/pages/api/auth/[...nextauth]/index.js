import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDb from "../../../../db/mongodb";
import User from "../../../../models/userSchema";

const authOptions = {
  baseUrl: "https://workout-tracker-hlk62yy87-christys-projects.vercel.app", // Replace this with your actual production base URL
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email } = credentials;
        try {
          await connectToDb();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "login",
  },
  httpClient: async (url, options) => {
    const timeout = 10000; // 10 seconds
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response;
  },
};

export default NextAuth(authOptions);
