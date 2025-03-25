import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './components/login'
import Signup from './components/signup'
import Profile from './components/profile'
import Home from './components/home'

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
