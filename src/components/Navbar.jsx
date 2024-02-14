import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logoo.png";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const router = usePathname();
  const { data: session } = useSession();

  // Switches the background of logo dependent on page
  const getNavbarBackgroundColor = () => {
    if (router === "/workoutProgram") {
      return "  bg-transparent text-black";
    }
    return "bg-transparent text-white";
  };

  const signout = () => {
    signOut();
    // sends user back to homepage
    return router.replace("/");
  };

  return (
    <nav
      className={`w-full flex justify-between items-center ${getNavbarBackgroundColor()}`}
    >
      <Link href={"/"}>
        <Image src={logo} alt="" className="w-[130px] h-[90px] pl-6 " />
      </Link>
      <div className="sm:flex hidden justify-end items-start flex-1 space-x-10 pr-20 font-normal font-poppins ">
        <Link className="" href={"/newWorkout"}>
          Add new workout
        </Link>
        <Link href={"/selectProgram"}>Workout programs</Link>
        <Link href={"/allWorkouts"}>Your workouts</Link>

        {session ? (
          // Switches text from log in to log out
          <button className="" onClick={() => signout()}>
            Log out
          </button>
        ) : (
          <Link href={"/login"}>Log In</Link>
        )}
      </div>
    </nav>
  );
}
