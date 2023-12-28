import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { selectIsLoggedIn } from 'store/auth/selectors';

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.navbarWrapper}>
      <NavLink to="/">Home</NavLink>
      {/* <NavLink to="/contacts">Contacts</NavLink> */}
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {!isLoggedIn ? (
        <>
          <NavLink to="/register">SignUp</NavLink>
          <NavLink to="/login">LogIn</NavLink>
        </>
      ) : (
        <>
          | <UserMenu />
        </>
      )}
    </div>
  );
};
