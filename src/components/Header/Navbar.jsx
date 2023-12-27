import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'store/auth/operations';
import { selectIsLoggedIn } from 'store/auth/selectors';

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {!isLoggedIn && (
        <>
          <NavLink to="/register">SignUp</NavLink>
          <NavLink to="/login">LogIn</NavLink>
        </>
      )}

      {isLoggedIn && (
        <>
          |{' '}
          <button
            onClick={() => {
              dispatch(logoutThunk());
            }}
          >
            Exit
          </button>
        </>
      )}
    </div>
  );
};
