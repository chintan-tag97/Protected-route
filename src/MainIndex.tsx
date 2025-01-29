import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Contact from "./Pages/Contact.tsx";
import Login from "./Pages/Login.tsx";
import Protected from "./Pages/Protected.tsx";
import Profile from "./Pages/Profile.tsx";

function MainIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Protected Component={About} />} />
        <Route path="/contact" element={<Protected Component={Contact} />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainIndex;
