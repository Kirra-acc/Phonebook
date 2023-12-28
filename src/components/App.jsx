import { Input } from '../pages/Contacts/Input/Input.jsx';
import { ContactList } from '../pages/Contacts/ContactList/ContactList.jsx';
import { Filter } from '../pages/Contacts/Filter/Filter.jsx';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header.jsx';
import { NotFound } from 'pages/NotFound/NotFound.jsx';
import { Register } from 'pages/Register/Register.jsx';
import { Login } from 'pages/Login/Login.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'store/auth/operations.js';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route
          path="/contacts"
          element={
            <>
              <h1>Phonebook</h1>
              <Input />

              <h2>Contacts</h2>
              <ContactList>
                <Filter />
              </ContactList>
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
