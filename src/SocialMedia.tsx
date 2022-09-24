import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'

const SocialMedia = () => {
  return (
    <div className="sm">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default SocialMedia