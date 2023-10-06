import Link from "next/link";
import { useSession } from "next-auth/react";
import Deleted from "./Deleted";
import { useState } from "react";
import { useEffect } from "react";

let getTopics = async () => {
  const res = await fetch("/api/new", {
    cache: "no-store",
  });
  return res.json();
};

export default function Test() {
  const { data: session } = useSession();
  const user = session?.user.email;
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTopics();
      setList(data.list);
    }

    fetchData();
  }, []);

  // Filter the data array to include only items where item.username matches user
  const filteredData = list.filter((item) => item.username === user);

  const dataByDate = {};

  filteredData.forEach((item) => {
    const itemDate = item.createdAt.split("T")[0];
    if (!dataByDate[itemDate]) {
      dataByDate[itemDate] = [];
    }
    dataByDate[itemDate].push(item);
  });

  if (filteredData.length === 0 && user !== undefined) {
    return (
      <h1 className="text-white text-[30px] text-center pt-32">
        Log your workouts to see them here!
      </h1>
    );
  } else if (filteredData.length === 0 && user === undefined) {
    return (
      <h1 className="text-white text-[30px] text-center pt-32">
        Sign in to see your workouts!
      </h1>
    );
  }

  return (
    <div className="py-7">
      {Object.keys(dataByDate).map((itemDate) => {
        const workoutItems = dataByDate[itemDate];
        return (
          <div key={itemDate} className="flex flex-col w-fit mb-4 p-4">
            <h2 className="text-xl font-bold text-white mb-2">{itemDate}</h2>
            <div className="flex flex-col md:flex-row md:gap-3  gap-3">
              {workoutItems.map((item) => (
                <div key={item._id} className="p-4 bg-gray-100 rounded-lg">
                  <h1 className="text-[20px] font-semibold text-gray-800 mb-1">
                    {" "}
                    {item.name}
                  </h1>
                  <div className=" gap-4 text-gray-600">
                    <div className="flex text-[20px] flex-col">
                      <span>Weight: {item.weight} lbs</span>
                      <span>Reps: {item.reps}</span>
                      <span>Sets: {item.sets}</span>
                    </div>
                    <Link
                      href={`/edit/${item._id}`}
                      className="text-indigo-600 hover:underline mr-4 text-[18px]"
                    >
                      Edit
                    </Link>
                    <Deleted id={item._id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

//   export default async function Login() {

//     let {list}= await getTopics()
//     return (
//       <div>
//          <Navbar />

//       {list.map((item)=>{
//        <div></div>
//    return <div className="border-2 mb-5">
// <Test />
//         <h1>Name:{item.name}</h1>
//         <h2>Weight:{item.weight}</h2>
//         <h2>Reps:{item.reps}</h2>
//         <h2>Sets:{item.sets}</h2>
//         <h2>{item.createdAt}</h2>
//         <h2>{item.username}</h2>
//         <Link href={`/edit/${item._id}`}>Edit</Link>
//         <Deleted id ={item._id} />
//         </div>

// })}
//      {/* <button onClick={()=>signOut()}>Log out</button> */}

//         </div>

//     )
//   }
