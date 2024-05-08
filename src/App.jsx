import './app.scss'
import Home from './home/Home';
import Watch from'./watch/Watch';
import Register from'./register/Register';
import Login from'./login/Login';
import{AuthContext} from "../src/AuthContext"
import Firstpage from '../src/Fisrtpage';
 
import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,Routes,Navigate
} from "react-router-dom";


function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes> 
       <Route exact path="/" element={user?<Home/>:<Firstpage/> }/>
        <Route path="/register" element={!user ? <Register/>:<Home/>}/>
        <Route path="/login" element={!user ? <Login/>:<Home/>}/>
        <Route path="/movies" element={<Home type="movie"/>}/>
        <Route path="/series" element={<Home type="series"/>}/>
        <Route path="/watch" element={user ? <Watch/>:<Register/> }/>

      </Routes>
    </Router>
  );
}

export default App;
