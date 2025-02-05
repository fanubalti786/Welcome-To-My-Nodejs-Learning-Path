import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from '../../utils';

export default function HomePage() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  const fetchProducts = async () => 
  {

    try {
      const url = "http://localhost:3000/product";
      const headers = {
        
          'Authorization': localStorage.getItem('token'),
          'Content-Type': 'application/json' // Ensure backend reads it as JSON
        
      }

      const response = await fetch(url,{
        method: "GET", // Specify method
        headers: headers // Correct headers format
      })
      const result = await response.json();
      console.log(result);
      const {message, success, data} = result;
      if(!success){
        handleError(message)
      }
      else{
        setProducts(data);
      }

    } catch (err) {
      handleError(err);
    }

  }




  useEffect(()=>
    {
    setLoggedInUser(localStorage.getItem('name'))
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
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-4'>
      {loggedInUser}
      <button onClick={handleLogout} className='py-2 px-5 border bg-gray-500 text-white rounded-lg'>logout</button>
      <div>
        {products?.map((item, index) =>{
        return(

          <ul key={index}>
            <span>{item.name} : {item.price}</span>

          </ul>
          )
})}
      </div>
      <ToastContainer/>
      
    </div>
  )
}











