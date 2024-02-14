import Link from "next/link";
import { useSession } from "next-auth/react";
import Deleted from "./Deleted";
import { useState } from "react";
import { useEffect } from "react";

// Function to get topics from API endpoint
let getTopics = async () => {
  const res = await fetch("/api/new", {
    cache: "no-store",
  });
  return res.json();
};

export default function Allworkouts() {
  const [list, setList] = useState([]);

  // Get user email from session data
  const { data: session } = useSession();
  const user = session?.user.email;

  useEffect(() => {
    async function fetchData() {
      // Fetch data from API when mounted
      const data = await getTopics();
      // Update list state with fetched data
      setList(data.list);
    }

    fetchData();
  }, []);

  // Filter the data array to include only items where item.username matches user
  const filteredData = list.filter((item) => item.username === user);
  const dataByDate = {};

  // Fixes formatting issues
  filteredData.forEach((item) => {
    const itemDate = item.createdAt.split("T")[0];
    if (!dataByDate[itemDate]) {
      dataByDate[itemDate] = [];
    }
    dataByDate[itemDate].push(item);
  });

  // Renders if there is no data but user is signed in
  if (filteredData.length === 0 && user !== undefined) {
    return (
      <h1 className="text-white text-[30px] text-center pt-32">
        Log your workouts to see them here!
      </h1>
    );
    // Renders if user is not signed in
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
