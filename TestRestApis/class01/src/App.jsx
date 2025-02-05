import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NoPage from './pages/noPage/NoPage';
import Signin from './pages/signin/Signin';
import Login from './pages/login/Login';
import RefreshHandler from './RefreshHandler';
export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // const PrivateRoute = ({element}) =>
  // {
  //   return isAuthenticated ? element: <Navigate to="/login" />
  // }

  const PublicRoute = ({element}) =>
    {
      if(localStorage.getItem('token'))
      { return <Navigate to="/" /> }
      else
      { return element; }

    }


    // const PrivateRoute = async ({ element }) => {
    //   if (localStorage.getItem("token")) {
    //     const url = "http://localhost:3000/verify";
    //     const headers = {
    //       headers: {
    //         Authorization: localStorage.getItem("token"),
    //       },
    //     };
      
  
    //     const response = await fetch(url, headers);
    //     const result= await response.json();
    //     // const {success} = result;
    //     // alert("hello")
  
    //     if (result.success) {
    //       return element;
    //     } else {
    //       return <Navigate to="/login" />;
    //     }
    //   } else {
    //     return <Navigate to="/login" />;
    //   }
    // };

    const PrivateRoute = ({element}) =>
      {
        if(localStorage.getItem('token'))
        { return element }
        else
        { return <Navigate to='/login' /> }

  
      }


  return (
    <div>
      <Router>
      {/* <RefreshHandler setIsAuthenticated={setIsAuthenticated}/> */}
        <Routes>
          <Route path='/' element={<PrivateRoute element={<HomePage />} />} />
          {/* <Route path='/' element={<HomePage/> } /> */}
          <Route path='/*' element={<PublicRoute element={<NoPage/>}/> } />
          <Route path='/signin' element={<PublicRoute element={<Signin/>}/> } />
          <Route path='/login' element={<PublicRoute element={<Login />} /> } />



          
        </Routes>
      </Router>
    </div>


    // <div>
    //   <Router>
    //   {/* <RefreshHandler setIsAuthenticated={setIsAuthenticated}/> */}
    //     <Routes>
    //       <Route path='/' element={<HomePage />} />
    //       {/* <Route path='/' element={<HomePage/> } /> */}
    //       <Route path='/*' element={<NoPage/>} />
    //       <Route path='/signin' element={<Signin/>} />
    //       <Route path='/login' element={<Login />}/>



          
    //     </Routes>
    //   </Router>
    // </div>
    
  )
}


// irfan fanu haider