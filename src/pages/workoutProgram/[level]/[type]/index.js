import Navbar from "../../../../components/Navbar";
import ProgramFinal from "../../../../components/ProgramFinal";
import { useRouter } from "next/router";
export default function WorkoutProgram() {
  const router = useRouter();
  const { level, type } = router.query;

  return (
    <div className="min-h-screen w-full  bg-discount-gradient">
      <Navbar />
      <ProgramFinal type={type} level={level} />
    </div>
  );
}
