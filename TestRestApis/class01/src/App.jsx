import { Button } from '@material-tailwind/react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NoPage from './pages/noPage/NoPage';
import Signin from './pages/signin/Signin';
import Login from './pages/login/Login';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/> } />
          <Route path='/*' element={<NoPage/> } />
          <Route path='/signin' element={<Signin/> } />
          <Route path='/login' element={<Login/> } />


          
        </Routes>
      </Router>
    </div>
    
  )
}
