import React from 'react'

export default function HomePage() {
  return (
    <div>
      Home
    </div>
  )
}








// import React from 'react'
// import { useState } from 'react';

// const api = async () => {
//     alert('fetching start')
//   const response = await fetch('http://localhost:800/users');
//   const data = await response.json();
//   return data;
// };

// export default function HomePage() {
//   const [data, setData] = useState(null);

//   // Fetch data directly when component is called
//   const fetchData = async () => {
//     const result = await api();
//     setData(result);
//   };

//   // Call fetchData when the component renders
//   if (!data) {
//     fetchData();  // Fetch the data on render, though this is not recommended
//   }

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <h1>{data.rollno}</h1>
//       <h1>{data.class}</h1>
//       {/* <h1>hello</h1>
//       <h1>hy</h1>
//       <h1>kesy ho</h1> */}
//     </div>
//   );
// }

