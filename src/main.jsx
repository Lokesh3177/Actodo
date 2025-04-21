import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Landing from './pages/Landing';
import { Link } from "react-router-dom";
import { useState } from "react";


function Main() {
  const [user, Setuser] = useState([{
    username: "Lokyy",
    password: "1234"
},])

  return (
    <div>
      <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login  user={user} Setuser={Setuser}/>} />
        <Route path='/Singup' element={<Singup user={user}  Setuser={Setuser}/>} />
        <Route path='/Landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
    </div>
  );
}



createRoot(document.getElementById('root')).render(
  <Main />
  
);
// 