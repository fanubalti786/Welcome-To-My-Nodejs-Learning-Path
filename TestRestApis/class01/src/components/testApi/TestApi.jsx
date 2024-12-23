import React from 'react'
import { useState } from 'react';

const api = async () => {
    alert('fetching start')
  const response = await fetch(`${process.env.REACT_BASE_URL}/users`);
  const data = await response.json();
  return data;
};

export default function TestApi() {
  const [data, setData] = useState(null);

  // Fetch data directly when component is called
  const fetchData = async () => {
    alert('next before fetch api')
    const result = await api();
    setData(result);
  };

  // Call fetchData when the component renders
  if (!data) {
    alert("before fetch api")
    fetchData();  // Fetch the data on render, though this is not recommended
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <h1>{data.name}</h1>
      <h1>{data.rollno}</h1>
      <h1>{data.class}</h1> */}
      <h1>hello</h1>
      <h1>hy</h1>
      <h1>kesy ho</h1>
    </div>
  );
}

