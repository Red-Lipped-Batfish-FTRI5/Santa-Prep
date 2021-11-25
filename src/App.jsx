import React from 'react';
import Login from "./client/components/Login.jsx"
import Homepage from "./Homepage.jsx"
import Dashboard from "./client/components/Dashboard.jsx"
//import Wishlist from "./client/components/Wishlist.jsx"
import CookieRecipes from "./client/components/CookieRecipes"
import SignUp from "./client/components/SignUp"
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KidsDashboard from "./client/components/KidsDashboard.jsx" //added
import LetterToSanta from "./client/components/Wishlist.jsx"
render( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route exact path="/SignUp" element={<SignUp />}></Route>
      <Route exact path="/Login" element={<Login />}></Route>
      <Route exact path="/Dashboard" element={<Dashboard />}></Route>
      <Route exact path="/LetterToSanta" element={<LetterToSanta />}></Route>
      <Route exact path="/CookieRecipes" element={<CookieRecipes />}></Route>
      <Route exact path="/KidsDashboard" element={<KidsDashboard />}></Route> 

    </Routes>
  </BrowserRouter>
  , document.getElementById('app'));