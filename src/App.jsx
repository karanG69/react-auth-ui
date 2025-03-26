import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
