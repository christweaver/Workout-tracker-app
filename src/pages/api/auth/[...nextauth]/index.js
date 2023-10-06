import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDb from "../../../../db/mongodb";
import User from "../../../../models/userSchema";

const authOptions = {
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
};

export default NextAuth(authOptions);