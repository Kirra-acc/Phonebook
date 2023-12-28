// https://658b4e16ba789a962238a684.mockapi.io/contacts

// import axios from 'axios';

// import {
//   addContact,
//   deleteContact,
//   fetchingData,
//   isError,
//   isPending,
// } from './phonebookSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'configAxios/api';

// axios.defaults.baseURL = 'https://658b4e16ba789a962238a684.mockapi.io/';

// createAsyncThunk

export const fetchContasctsThunk = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'deleteContacts',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await api.post('contacts', { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// CRUD
// export const fetchContasctsThunk = () => async dispatch => {
//   try {
//     dispatch(isPending());
//     const response = await axios.get('contacts');
//     dispatch(fetchingData(response.data));
//   } catch (error) {
//     dispatch(isError(error.message));
//   }
// };

// export const deleteContactsThunk = id => async dispatch => {
//   try {
//     const response = await axios.delete(`contacts/${id}`);
//     dispatch(deleteContact(response.data.id));
//     console.log(response.data);
//   } catch (error) {}
// };

// export const addContactsThunk =
//   ({ name, phone }) =>
//   async dispatch => {
//     try {
//       const response = await axios.post('contacts', { name, phone });
//       console.log(response.data);
//       dispatch(addContact(response.data));
//     } catch (error) {}
//   };
