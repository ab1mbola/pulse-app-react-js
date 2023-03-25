import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-green">
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src="/assets/pulse-logo.svg" alt="pulse logo" />
          </NavLink>
        </div>

        <div className="navbar-items">
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/customer-stories">Customer Stories</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </div>
      </nav>
    </header>
  );
}
