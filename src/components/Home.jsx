import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-neutral-900 p-6 shadow-lg w-80 text-center flex flex-col justify-end h-full">
        <h1 className="text-3xl font-semibold mb-3">Welcome To PopX</h1>
        <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reprehenderit.</p>
        
        <div className="flex flex-col gap-3">
          <Link to="/login" className="bg-blue-500 text-white text-lg font-semibold py-2 rounded-lg shadow-md">
            Already Registered? Login
          </Link>
          <Link to="/signup" className="bg-green-500 text-white text-lg font-semibold py-2 rounded-lg shadow-md">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
