import React, { useEffect, useState } from "react";
import GetProgramApi from "./GetProgramApi";

// Function to get res from api
const getTopics = async (type) => {
  const res = await fetch(`/api/programs/${type}`, {
    cache: "no-store",
  });
  return res.json();
};

export default function MuscleGroup({ type, level }) {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Pulls options from the function with the type being passed
      let { options } = await getTopics(type);

      // Filter options into compound and non-compound exercises
      let compEx = options.filter((comp) => comp.compound === "true");
      let nonCompex = options.filter((non) => !non.compound);

      const getRandomSortValue = () => Math.random() * 2 - 1;

      compEx.sort(() => getRandomSortValue());
      nonCompex.sort(() => getRandomSortValue());

      // splices arrays based on user level
      const spliceByLevel = (arr, beginner, intermediate, expert) => {
        if (level === "Beginner") {
          arr.splice(beginner);
        } else if (level === "Intermediate") {
          arr.splice(intermediate);
        } else if (level === "Expert") {
          arr.splice(expert);
        }
      };
      // Beginner gets 2 comp & 2 noncomp, intermediate gets 3, etc.
      spliceByLevel(compEx, 2, 3, 4);
      spliceByLevel(nonCompex, 2, 3, 4);
      // Sets the workout variable
      setWorkout([...compEx, ...nonCompex]);
    };

    fetchData();
  }, [type, level]);

  return (
    <div>
      <GetProgramApi workout={workout} key={workout._id} />
    </div>
  );
}
