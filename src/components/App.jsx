import { Input } from '../pages/Contacts/Input/Input.jsx';
import { ContactList } from '../pages/Contacts/ContactList/ContactList.jsx';
import { Filter } from '../pages/Contacts/Filter/Filter.jsx';
import { Route, Routes } from 'react-router-dom';

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
      </Routes>
    </div>
  );
};
