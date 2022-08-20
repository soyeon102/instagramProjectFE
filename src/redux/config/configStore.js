import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { configureStore } from '@reduxjs/toolkit';
import articleSlice from '../modules/articleSlice';
import userSlice from '../modules/userSlice';
import createRootReducer from '../modules/reducer';

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    article: articleSlice,
    user: userSlice,
  },
  // composeWithDevTools(
  //   applyMiddleware(
  //     thunk.withExtraArgument({ history }),
  //     promise,
  //     routerMiddleware(history)
  //   )
  // )
});
