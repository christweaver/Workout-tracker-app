import Link from "next/link";
import { useState } from "react";

// Pulls the prop type from the ProgramMuscleGroups
export default function WorkoutPlans({ type }) {
  const [level, setLevel] = useState(null);

  function settLevel(e) {
    setLevel(e.target.innerText);
  }

  return (
    <div className="flex justify-between flex-row">
      {/* Possible level options being mapped */}
      {["Beginner", "Intermediate", "Expert"].map((level, index) => (
        // Passes both variables to the workoutProgram page
        <Link key={index} href={`/workoutProgram/${level}/${type}`}>
          <div
            className={`border-2 w-40 h-48 rounded-xl bg-white text-center text-black hover:bg-blue-200 
            ${index === 0 ? "ml-36" : "ml-10"} 
            ${index === 2 ? "mr-32" : ""}`}
          >
            <h1 className="text-[20px] font-bold pt-2">{level}</h1>
            {/* Maps through the options and displays each with the corresponding amount of workouts  */}
            <h2 className="pt-2">
              This displays{" "}
              {level === "Beginner"
                ? "four"
                : level === "Intermediate"
                ? "six"
                : "eight"}{" "}
              workouts including{" "}
              {level === "Beginner"
                ? "two"
                : level === "Intermediate"
                ? "three"
                : "four"}{" "}
              compound exercises and{" "}
              {level === "Beginner"
                ? "two"
                : level === "Intermediate"
                ? "three"
                : "four"}{" "}
              accessory movements.
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
