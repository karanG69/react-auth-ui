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
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="border p-2 mb-2"/>
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required className="border p-2 mb-2"/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border p-2 mb-2"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="border p-2 mb-2"/>
        <input type="text" name="company" placeholder="Company" onChange={handleChange} required className="border p-2 mb-2"/>
        <label>
          Are you an agency?
          <select name="agency" onChange={handleChange} className="border p-2 ml-2">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </label>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-4">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup