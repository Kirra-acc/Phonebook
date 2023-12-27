import { configureStore } from '@reduxjs/toolkit';
import phonebookSlice from './contacts/phonebookSlice';
import { authReducer } from './auth/slice';


export const store = configureStore({
  reducer: {
    phonebook: phonebookSlice,
    auth: authReducer,
  },

  // devTools: process.env.NODE_ENV !== 'production',
});

