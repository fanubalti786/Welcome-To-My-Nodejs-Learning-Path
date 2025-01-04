import React, { useState } from "react";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value, // Update only the changed field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginInfo; // Access state correctly
    if (email && password) {
      alert(`Email: ${email}\nPassword: ${password}`);
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleForgotPassword = () => {
    alert("Redirecting to the password reset page...");
    // Add navigation logic here (e.g., using React Router)
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
            value={loginInfo.email} // Correct value binding
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
            value={loginInfo.password} // Correct value binding
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Enter your password"
            required
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
      </form>
    </div>
  );
};

export default LoginForm;
