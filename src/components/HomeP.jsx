import Navbar from "./Navbar";
import GetStarted from "./GetStarted";
export default function HomeP() {
  return (
    <section className="flex-col w-full min-h-screen bg-cover bg-fixed bg-center bg-no-repeat custom-image">
      <div className="pb-4">
        <Navbar />
      </div>

      <div />

      <h1 className=" flex pb-6 text-[90px] text-dimWhite font-poppins font-extrabold leading-tight pl-6">
        Think less
        <br /> Lift more.
      </h1>

      <div className=" leading-9 w-1/2 text-[20px]">
        <h2 className="text-dimWhite font-poppins font-semibold leading-loose pl-6">
          Designed for everybody across all levels of athleticism, this program
          offers an extensive list of exercise variations, specifically tailored
          movements to target designated muscle groups, comprehensive progress
          tracking capabilities, and the option to challenge friends.{" "}
        </h2>
      </div>

      <div className="pt-12 pl-6">
        <GetStarted />
      </div>
    </section>
  );
}
