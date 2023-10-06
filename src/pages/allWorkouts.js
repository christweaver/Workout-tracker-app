// import { useEffect } from "react";
import Navbar from "../components/Navbar";
import AllWorkouts from "../components/AllWorkouts";
// import { useState } from "react";
// let getTopics = async () => {
//   const res = await fetch("/api/new", {
//     cache: "no-store",
//   });
//   return res.json();
// };

export default function Login() {
  // const [list, setList] = useState([]); // Use state to manage the list data

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getTopics();
  //     setList(data.list);
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="flex-col w-full min-h-screen  bg-cover bg-fixed bg-top  bg-no-repeat second-image  ">
      <Navbar />
      <AllWorkouts />
    </div>
  );
}

// let getTopics = async () => {
//   const res = await fetch("http://localhost:3000/api/new", {
//     cache: "no-store",
//   });
//   return res.json();
// };
