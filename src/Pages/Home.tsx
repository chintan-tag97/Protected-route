import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
          
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/profile">Profile</NavLink>


          
          </nav>
    </div>
  )
}

export default Home