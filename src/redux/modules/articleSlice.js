import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  articles: [],
  detail: {},
  isLoading: false,
  error: null,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default articleSlice.reducer;
