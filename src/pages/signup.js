import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  let handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to the signUp API endpoint
    const res = await fetch("/api/signUp", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // Convert state variables to JSON string and send as request body
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      //  Send user to the login page
      router.replace("/login");
    } else {
      console.log(res.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-dimWhite">
      <div className="bg-dimWhite rounded-xl shadow-2xl p-6 w-[400px] ">
        <h1 className="text-3xl font-poppins font-semibold mb-10 pt-6">
          Sign up
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

          <button
            className="bg-red-700 text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
