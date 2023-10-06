"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Add({ workout }) {
  const { data: session } = useSession();
  console.log(session?.user.email);
  let username = session?.user.email;

  return (
    <div className="grid grid-cols-2 gap-4 pl-10 pr-10 pb-4">
      {workout.map((item) => (
        <WorkoutItem key={item._id} item={item} username={username} />
      ))}
    </div>
  );
}

function WorkoutItem({ item, username }) {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  let name = item.name;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, reps, weight, sets, username }),
    });
    if (res.ok) {
      console.log("yay");
    }
  };

  let compound = item.compound ? "This is a compound exercise" : "";

  return (
    <div className=" mb-4 p-4 shadow-2xl rounded-lg pl-20">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <h1 className="text-[28px] font-semibold text-white">{name}</h1>
          <h2 className=" text-2xl  text-dimWhite">{compound}</h2>
        </div>
        <div className="flex space-x-4">
          <div className=" flex flex-col w-fit">
            <input
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border-2 rounded-md py-2 px-4"
              type="text"
              placeholder="Weight"
            />
          </div>

          <div className=" flex flex-col w-fit">
            <input
              id="reps"
              name="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="border-2 rounded-md py-2 px-4"
              type="text"
              placeholder="Reps"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex flex-col">
            <input
              id="sets"
              name="sets"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              className="border-2 rounded-md py-2 px-4"
              type="text"
              placeholder="Sets"
            />
          </div>

          <div className="flex pl-20">
            <button
              type="submit"
              className="bg-gradient-to-r from-black to-red-500 text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition duration-300 self-center"
            >
              Add to db
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
