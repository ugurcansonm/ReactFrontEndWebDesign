import React from 'react';
import logo from "../../logo.svg";
import "./Navbar.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="sirius" src={logo} alt="sirius" />
      <NavLink className="can" to="/">Anasayfa</NavLink>
      <NavLink className="can" to="/hakkımızda">Hakkımızda</NavLink>
      <NavLink className="can" to="/arge">Ar-Ge</NavLink>
      <NavLink className="can" to="/üyelik">Üyelik</NavLink>
    </nav>
  )
}
