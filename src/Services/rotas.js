import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Components/Home/index.jsx';
import Login from '../Components/Login/index.jsx';
import Personagens from '../Components/Personagens/index.js';

export default function Rotas(){

  return(
    <Router>
     <Routes>
     <Route path="/Home" element={<Home/>}/>
     <Route path="/" element={<Login/>}/>
     <Route path="/Personagens" element={<Personagens/>}/>
    </Routes> 
    </Router>
  )
}