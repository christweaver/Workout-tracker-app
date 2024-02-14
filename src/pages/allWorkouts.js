import Navbar from "../components/Navbar";
import AllWorkouts from "../components/AllWorkouts";

export default function Login() {
  return (
    <div className="flex-col w-full min-h-screen  bg-cover bg-fixed bg-top  bg-no-repeat second-image  ">
      <Navbar />
      <AllWorkouts />
    </div>
  );
}
