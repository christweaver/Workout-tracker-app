import React, { useState } from 'react';

export default function Deleted({ id }) {
  console.log("ID", id)
  const [status, setStatus] = useState('idle'); // 'idle' | 'deleting' | 'deleted' | 'error'

  const goodbye = async function () {
    try {
      setStatus('deleting');
      const res = await fetch(`/api/new/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error('Failed to delete the item');
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setStatus('error');
    }
  };

  return (
    <>
      {status === 'idle' && (
        <button onClick={goodbye} className="text-[18px]">
          Delete
        </button>
      )}
      {status === 'deleting' && <p>Deleting...</p>}
      {status === 'error' && <p>An error occurred while deleting the item</p>}
    </>
  );
}
