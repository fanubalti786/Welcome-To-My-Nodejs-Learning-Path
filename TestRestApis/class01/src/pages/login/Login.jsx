import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { handleError,handleSuccess } from "../../utils";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("name, and password are required")
    } 

    try {
            const url = "http://localhost:3000/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
    
    
            const result = await response.json();
            console.log(result)
            const {success, message, jwToken, name, error} = result;
            if(success)
            {
                handleSuccess(message);
                localStorage.setItem('token', jwToken);
                localStorage.setItem('name', name);
               
                navigate("/")
            }else if(error)
            {
                const details = error?.details[0].message;
                handleError(details);
            }else if(!success)
            {
                handleError(message);
            }
    
    
        } catch (err) {
            handleError(err);
        }

  };

  const handleForgotPassword = () => {
    toast.info("Redirecting to the password reset page...");
    // Add navigation logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-xl w-96 max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Login
        </h2>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Enter your email"
            // required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Enter your password"
            // required
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <button
            type="button"
            className="text-sm text-blue-600 font-semibold hover:underline"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
        >
          Login
        </button>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Don't have an account?</span>
          <Link to="/Signin" className="text-blue-600 font-semibold ml-2">Signin</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
