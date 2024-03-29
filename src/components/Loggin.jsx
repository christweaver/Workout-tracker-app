import { useSession } from "next-auth/react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Loggin() {
  // default email and password
  const [email, setEmail] = useState("christy@gmail.com");
  const [password, setPassword] = useState("workout!");
  const router = useRouter();

  const { data: session } = useSession();

  let handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,

      redirect: false,
    });
    if (res.error) {
      console.log(res);
      return;
    }
  };
  const getLogo = () => {
    {
      session ? router.replace("/") : router.replace("../allWorkouts");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-dimWhite">
      <div className="bg-dimWhite rounded-xl shadow-2xl p-6 w-[400px] ">
        <h1 className="text-3xl font-poppins font-semibold mb-10 pt-6">
          Log In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-6">
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <p className="text-sm text-gray-600">
            Demo account <br />
            email:christy@gmail.com <br />
            password:workout!
          </p>

          <button
            onClick={() => getLogo()}
            className="bg-red-700 text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
            type="submit"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Don&apos;t have an account?
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
