import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";

const SignUpForm = () => {
  const [signinInfo, setSigninInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninInfo((prevState) => ({
      ...prevState, // Preserve the previous state
      [name]: value, // Update only the changed field
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (signinInfo.name && signinInfo.email && signinInfo.password) {
    //   alert(`Name: ${signinInfo.name}\nEmail: ${signinInfo.email}\nPassword: ${signinInfo.password}`);
    // } else {
    //   alert("Please fill out all fields!");
    // }
    const { name, email, password } = signinInfo;

    if (!name || !email || !password) {
      return handleError("name, email, and password are required");
    }

    try {
        const url = "http://localhost:8000/auth/signin";
        const response = await fetch(url, {
            method: POST,
            headers: {
                'Content-Type': 'appliction/json'
            },
            body: JSON.stringify(signinInfo)
        });


        const result = await response.json();
        console.log(result)
        const {success, message} = result;
        if(success)
        {
            handleSuccess(message);
            setTimeout(()=>{},1000)
        }


    } catch (error) {
        
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-xl w-96 max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={signinInfo.name} // Corrected this to 'signinInfo'
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={signinInfo.email} // Corrected this to 'signinInfo'
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Enter your email"
            required
            
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
            value={signinInfo.password} // Corrected this to 'signinInfo'
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Enter your password"
            required
            
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
        >
          Sign Up
        </button>
        
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Already have an account?</span>
          <Link to="/Login" className="text-blue-600 font-semibold ml-2">Login</Link>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default SignUpForm;
