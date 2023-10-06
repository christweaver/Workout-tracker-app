import React, { useEffect, useState } from 'react';
import EditForm from "../../../components/Editform";
import { useRouter } from 'next/router';
const getTopics = async (id) => {
  try {
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopics(id);
      if (data && data.list) {
        setTopic(data.list);
      }
    };
    fetchData();
  }, [id]);

  if (!topic) {
    return <p>Loading...</p>; // Or a loading spinner
  }

  const { name, weight, reps, sets } = topic;

  return (
    <EditForm name={name} weight={weight} reps={reps} sets={sets} id={id} />
  );
}
