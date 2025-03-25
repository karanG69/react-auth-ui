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
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border p-2 mb-2"/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border p-2 mb-2"/>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
      </form>
    </div>
  )
}

export default Login