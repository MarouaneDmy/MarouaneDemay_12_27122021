import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from "./pages/home"
import Profile from "./pages/profile"
import Settings from "./pages/settings"
import Community from "./pages/community"
import Header from "./components/header"
import SideBar from "./components/sideBar"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <SideBar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/profile/:id" element={<Profile/>}/>
          <Route exact path="/settings" element={<Settings/>}/>
          <Route exact path="/community" element={<Community/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
