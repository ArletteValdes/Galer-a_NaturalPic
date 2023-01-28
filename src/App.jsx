import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";

import Photos from "./pages/Photos";
import Likes from "./pages/Likes";

function App() {
  return (
    <>
   
      <Navbar />
      <Routes>
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Likes" element={<Likes />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </>
  );
}

export default App;
