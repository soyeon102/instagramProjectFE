import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/Cookie';
import { BASE_URL } from '../../shared/api';

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
      setCookie('nickname', data.data);
      getCookie('ACCESS_TOKEN');
      console.log('로그인 후 data!!!!', data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errorMessage);
    }
  }
);

const initialState = {
  user: '',
  isLogin: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUser: (state, action) =>
      (action.payload = {
        user: getCookie('nickname'),
        isLogin: getCookie('ACCESS_TOKEN') ? true : false,
      }),
  },
  extraReducers: {
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isLogin = getCookie('ACCESS_TOKEN') ? true : false;
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
