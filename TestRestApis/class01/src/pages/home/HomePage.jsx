import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError } from '../../utils';

export default function HomePage() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState('');
  const navigate = useNavigate();

  useEffect(()=>
  {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  },[])


  const fetchProducts = async () => 
  {

    try {
      const url = "http://localhost:8000/products";
      const headers = {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      }

      const response = await fetch(url,headers)
      const result = await response.json();
      console.log(result);
      setProducts(result);

    } catch (err) {
      handleError(err);
    }

  }




  useEffect(()=>
    {
      fetchProducts();
    },[])

  const handleLogout = () =>
  {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setTimeout(()=> {
      navigate('/Login');
    }, 1000)
  }

  return (
    <div>
      {loggedInUser}
      <button onClick={handleLogout}>logout</button>
      <div>
        {products && products?.map((item, index) => 
        {
          <ul key={index}>
            <span>{item.name} : {item.price}</span>

          </ul>
        })}
      </div>
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

