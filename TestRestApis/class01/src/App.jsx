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

  const PrivateRoute = ({element}) =>
  {
    return isAuthenticated ? element: <Navigate to="/login" />
  }

  // const PublicRoute = ({element}) =>
  //   {
  //     if(localStorage.getItem('token'))
  //     { return <Navigate to="/HomePage" /> }
  //     else
  //     { return element; }

  //   }

  //   const PrivateRoute = ({element}) =>
  //     {
  //       if(localStorage.getItem('token'))
  //       { return element; }
  //       else
  //       { return <Navigate to='/login' /> }

  
  //     }


  return (
    <div>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/> } />
          <Route path='/*' element={<NoPage/> } />
          <Route path='/signin' element={<Signin/> } />
          <Route path='/login' element={<PrivateRoute element={<HomePage />} />} />


          
        </Routes>
      </Router>
    </div>
    
  )
}
