import React, { useEffect, useState } from 'react';
import GetProgramApi from "./GetProgramApi";

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
      let { options } = await getTopics(type);

      let compEx = options.filter((word) => word.compound === "true");
      let nonCompex = options.filter((uno) => !uno.compound);

      const getRandomSortValue = () => Math.random() * 2 - 1;

      compEx.sort(() => getRandomSortValue());
      nonCompex.sort(() => getRandomSortValue());

      const spliceByLevel = (arr, beginner, intermediate, expert) => {
        if (level === "Beginner") {
          arr.splice(beginner);
        } else if (level === "Intermediate") {
          arr.splice(intermediate);
        } else if (level === "Expert") {
          arr.splice(expert);
        }
      };

      spliceByLevel(compEx, 2, 3, 4);
      spliceByLevel(nonCompex, 2, 3, 4);

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
