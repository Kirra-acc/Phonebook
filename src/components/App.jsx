import { Input } from '../pages/Contacts/Input/Input.jsx';
import { ContactList } from '../pages/Contacts/ContactList/ContactList.jsx';
import { Filter } from '../pages/Contacts/Filter/Filter.jsx';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header.jsx';
import { NotFound } from 'pages/NotFound/NotFound.jsx';
import { Register } from 'pages/Register/Register.jsx';

export const App = () => {
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
