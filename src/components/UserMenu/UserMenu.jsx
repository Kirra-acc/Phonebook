import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'store/auth/operations';
import { selectUserName } from 'store/auth/selectors';

export const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <div>
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
