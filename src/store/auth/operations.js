import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'configAxios/api';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('users/signup', credentials);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await api.post('users/login', credentials);
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})