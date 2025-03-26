import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email })); // Simulating login
    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-neutral-900 p-6 shadow-lg w-80 text-center flex flex-col justify-start h-full">
        <h2 className="text-2xl font-semibold mb-3">Sign in to your PopX account</h2>
        <p className="mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti sapiente</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className='relative w-full'>
            <label className="absolute -top-2.5 left-3 bg-neutral-900 px-1 text-xs text-gray-600">Email Address</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border p-2 mb-2 rounded-lg"/>  
          </div>
          <div className='relative w-full'>
            <label className="absolute -top-2.5 left-3 bg-neutral-900 px-1 text-xs text-gray-600">Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border p-2 mb-2 rounded-lg"/>
          </div>
          <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded-lg">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login