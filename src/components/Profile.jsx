import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) setUser(storedUser);
        else navigate("/login");
    }, [navigate]);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        {user ? (
          <>
            <h2 className="text-xl mb-4">Profile</h2>
            <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-full mb-4"/>
            <p>Name: {user.name || "N/A"}</p>
            <p>Email: {user.email}</p>
            <button className="bg-gray-500 text-white px-4 py-2 mt-4" onClick={() => localStorage.clear() || navigate("/")}>
              Logout
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
}

export default Profile