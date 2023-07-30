import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userSlice from "../slice/userSlice";
import storage from "./storage";

const persistConfig = {
  key: "reducer",
  storage,
};

const reducer = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
