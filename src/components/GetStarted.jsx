import Link from "next/link";

export default function GetStarted() {
  return (
    <Link
      className=" cursor-pointer flex justify-center items-center w-[190px] h-[50px]  
        rounded-[10px] bg-gradient-to-r from-black to-red-500 "
      href={"../login"}
    >
      <p className="text-white ml-2 text-[22px] font-poppins">Join Now</p>
    </Link>
  );
}
