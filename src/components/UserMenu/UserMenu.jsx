import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'store/auth/operations';
import { selectUserName } from 'store/auth/selectors';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <div className={s.userMenuWrapper}>
      {user && <h2>Hi {user}!</h2>}
      <button
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Exit
      </button>
    </div>
  );
};
