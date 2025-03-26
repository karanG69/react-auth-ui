import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "No",
      });
      const navigate = useNavigate();

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(formData));
        navigate("/profile");
      };
    
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-neutral-900 p-6 shadow-lg w-80 text-center flex flex-col justify-start h-full">
        <h2 className="text-2xl mb-4 font-semibold">Create your PopX account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className='relative'>
            <label className="absolute -top-2.5 left-3 bg-neutral-900 px-1 text-xs text-gray-600">Name</label>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full border p-2 mb-2 rounded-lg"/>
        </div>
        <div className='relative'>
            <label className="absolute -top-2.5 left-3 bg-neutral-900 px-1 text-xs text-gray-600">Phone Number</label>
            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required className="w-full border p-2 mb-2 rounded-lg"/>
        </div>
        <div className='relative'>
            <label className="absolute -top-2.5 left-3 bg-neutral-900 px-1 text-xs text-gray-600">Email</label>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full border p-2 mb-2 rounded-lg"/>  
        </div>
        <div className='relative'>
            <label className="absolute -top-2.5 left-3 bg-neutral-900 px-1 text-xs text-gray-600">password</label>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full border p-2 mb-2 rounded-lg"/>
        </div>
        <div className='relative'>
            <label className="absolute -top-2.5 left-3 bg-neutral-900 px-1 text-xs text-gray-600">Company</label>
            <input type="text" name="company" placeholder="Company" onChange={handleChange} required className="w-full border p-2 mb-2 rounded-lg"/>           
        </div>
        <label>
          Are you an agency?
          <select name="agency" onChange={handleChange} className="border p-2 ml-2">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </label>
        <button type="submit" className="rounded-lg bg-green-500 text-white px-4 py-2 mt-4">Create Accout</button>
        </form>
        </div>
    </div>
  )
}

export default Signup