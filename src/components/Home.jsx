import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Welcome! Please Login or Sign Up</h1>
      <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded m-2">Login</Link>
      <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded m-2">Sign Up</Link>
    </div>
  )
}

export default Home