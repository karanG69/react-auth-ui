import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
    else navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="w-80 h-[10%] bg-neutral-800 text-2xl font-semibold mb-3 text-white mb-0">Settings</h2>
        <div className="mt-0 bg-neutral-900 p-6 shadow-lg w-80 text-center flex flex-col justify-start h-full">
        {user ? (
          <>
            <div className="flex gap-2">
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1R0H4I-R-sZqMsCLlFjlfGzzrmWlcWfsng&s"
                alt="Profile"
                className="rounded-full mb-4 mx-auto w-20 h-20"
                />
                <div className="flex flex-col">
                    <p className="text-gray-300">{user.name || "N/A"}</p>
                    <p className="text-gray-300">{user.email}</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore illum incidunt nostrum. Omnis quod molestiae sint nostrum odio est at distinctio error delectus.</p>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
