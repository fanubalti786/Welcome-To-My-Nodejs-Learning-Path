import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [siginInfo, setSigninInfo] = useState({
    name:'',
    email:'',
    password: ''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninInfo((prevState) => ({
      ...prevState, // Preserve the previous state
      [name]: value, // Update only the changed field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (siginInfo.name && siginInfo.email && siginInfo.password) {
      alert(`Name: ${siginInfo.name}\nEmail: ${siginInfo.email}\nPassword: ${siginInfo.password}`);
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={siginInfo.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={siginInfo.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={siginInfo.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
        
        <span className="flex justify-center">already have an account?</span>
        <h1 className="flex justify-center text-blue-500">
             <Link to="/Login">login</Link>
        </h1>
      </form>
    </div>
  );
};

export default SignUpForm;
