import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/Cookie';

const BASE_URL = 'http://13.209.97.60';

const config = {
  headers: {
    Authorization: getCookie('ACCESS_TOKEN'),
  },
};

export const __loginUser = createAsyncThunk(
  'LOGIN_USER',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`${BASE_URL}/api/member/login`, payload);
      setCookie('ACCESS_TOKEN', data.headers.authorization);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __signupUser = createAsyncThunk(
  'SIGNUP_USER',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`${BASE_URL}/api/member/signup`, payload);
      // history.push('/login');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errorMessage);
    }
  }
);

const initialState = {
  user: {},
  isLogin: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isLogin = true;
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__signupUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__signupUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__signupUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // [__getUser.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__getUser.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.user = action.payload;
    // },
    // [__getUser.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export default userSlice.reducer;
