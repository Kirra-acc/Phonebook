import React from 'react';
import { Navbar } from './Navbar';
import { useSelector } from 'react-redux';
import { selectUserName } from 'store/auth/selectors';

export const Header = () => {
  const user = useSelector(selectUserName);
  return (
    <header>
      <Navbar />
      {user && <h2>{user}</h2>}
    </header>
  );
};
