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
import ParentLanding from "./client/components/ParentLanding";
import ViewKiddos from "./client/components/ViewKiddos";
import ParentAuth from "./client/components/ParentAuth"

render( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route exact path="/SignUp" element={<SignUp />}></Route>
      <Route exact path="/Login" element={<Login />}></Route>
      <Route exact path="/Dashboard" element={<Dashboard />}></Route>
      <Route exact path="/LetterToSanta" element={<LetterToSanta />}></Route>
      <Route exact path="/CookieRecipes" element={<CookieRecipes />}></Route>
      <Route exact path="/ParentLanding" element={<ParentLanding />}></Route>
      <Route exact path="/ViewKiddos" element={<ViewKiddos />}></Route>
      <Route exact path="/ParentAuth" element={<ParentAuth />}></Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById('app'));