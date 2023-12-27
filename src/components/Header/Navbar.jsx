import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/register">SignUp</NavLink>
      <NavLink to="/login">LogIn</NavLink>
    </div>
  );
};
