import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Navbar from './components/SideNav'
import Home from './pages/Home'
import Students from './pages/Students'
import { useState } from "react";

function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Students" element={<Students />}/>
    </Routes>

    </div>
  )
}

export default App;
