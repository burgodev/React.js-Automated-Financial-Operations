import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import user from "./user";

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ user });
const store = configureStore({ reducer, middleware });

export default store;
