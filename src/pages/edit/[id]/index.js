import React, { useEffect, useState } from "react";
import EditForm from "../../../components/Editform";
import { useRouter } from "next/router";
const getTopics = async (id) => {
  try {
    // Fetch topic data from the API endpoint-called below in useEffect
    const res = await fetch(`/api/new/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.log("There is an error");
      return null;
    } else {
      return res.json();
    }
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
};

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const [topic, setTopic] = useState(null);

  // fetch data when component mounts or id changes
  useEffect(() => {
    const fetchData = async () => {
      // Run function with id to get item
      const data = await getTopics(id);
      if (data && data.list) {
        setTopic(data.list);
      }
    };
    fetchData();
  }, [id]);

  if (!topic) {
    return <p>Loading...</p>;
  }

  const { name, weight, reps, sets } = topic;
  // Passes data as prop
  return (
    <EditForm name={name} weight={weight} reps={reps} sets={sets} id={id} />
  );
}
