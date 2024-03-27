'use client';

import React, { useState } from 'react';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      if ( formData.password !== formData.confirmPassword) {
        // Passwords don't match, handle error or display a message
        alert('Passwords should match!');
      } 
      // Add your logic to handle user registration, e.g., send data to the server
      console.log('User registration data:', formData);
      // Reset the form after registration
      setFormData({ email: '', password: '', confirmPassword: '' });
    } else {
      // Add your logic to handle login, e.g., send data to the server
      console.log('Login form data:', formData);
      // Reset the form after login
      setFormData({ email: '', password: '', confirmPassword: '' });
    }
  };

  const handleToggleRegister = () => {
    if (!isRegistering && formData.password !== formData.confirmPassword) {
      // Passwords don't match, handle error or display a message
      alert('Passwords should match!');
    } 
      setIsRegistering((prev) => !prev);
    
  };
  const handleToggleRegisterS=()=>setTimeout(handleToggleRegister,500);
  

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 border-2 border-blue-500/50  rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex justify-center">{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
            Email :
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
            Password :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {isRegistering && (
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-600">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}

        <div className="flex justify-center">
          <button type="submit" className="px-4 py-2 bg-gray-500 hover:bg-blue-400 text-white rounded-md transition ease-in-out hover:translate-y-1 hover:text-large hover:font-bold ">
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </div>

        <div className="mt-4 text-center ">
          <p className="text-sm">
            {isRegistering
              ? 'Already have an account?'
              : "Don't have an account?"}
            <span
              className="text-gray-400 cursor-pointer ml-1 hover:text-blue-400 hover:font-bold "
              onClick={handleToggleRegisterS}
            >
              {isRegistering ? 'Login here' : 'Register here'}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
