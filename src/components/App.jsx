import { Input } from '../pages/Contacts/Input/Input.jsx';
import { ContactList } from '../pages/Contacts/ContactList/ContactList.jsx';
import { Filter } from '../pages/Contacts/Filter/Filter.jsx';

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
      <h1>Phonebook</h1>
      <Input />

      <h2>Contacts</h2>
      <ContactList>
        <Filter />
      </ContactList>
    </div>
  );
};
