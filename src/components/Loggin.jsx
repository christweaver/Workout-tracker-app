import { useSession } from "next-auth/react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Loggin() {
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

    // return router.replace('/')
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

//     <div className="flex justify-center items-center h-screen">
//     <div className="flex rounded-lg items-center bg-white h-[80%] w-[46%]" >

//     <div className="flex w-1/2  h-[90%] mt-3 rounded-md">
//      <Image src={stick} alt="" className="rounded-md flex" />
//      </div>

//       <div className="flex justify-center items-center pr-4  h-full w-1/2">

//     <form onSubmit={handleSubmit} className=" flex-col leading-loose pl-20 h-3/4">
//     <h1 className="text-[37px] font-extrabold pt-[30px] pb-6 ">Log In</h1>

//     <input type="text" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='border-b mb-6 mt-4' placeholder="Email"></input>
//     <input type="text" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} className="border-b mb-3 " placeholder="Password"></input>
// <h1 className="mb-8 mt-10">Don't have an account? Sign up</h1>
//     <button className=" cursor-pointer flex justify-center items-center w-[190px] h-[50px]
//         rounded-[10px] bg-gradient-to-r from-slate-200 to-red-700 " type="submit">Log In</button>

//       </form>
//       </div>
// </div>

//         </div>
