import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContasctsThunk,
} from '../contacts/operations';
import { logoutThunk } from 'store/auth/operations';

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContasctsThunk.fulfilled, (state, { payload }) => {
        // state.contacts.items = payload;
        state.contacts.loading = false;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.contacts.items = [];
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== payload.id
        );
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
        // state.contacts.isLoading = false;
      })
      .addCase(fetchContasctsThunk.pending, state => {
        state.contacts.loading = true;
      })
      .addCase(fetchContasctsThunk.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      });
  },
});

export const { setFilter } = phonebookSlice.actions;

export default phonebookSlice.reducer;
