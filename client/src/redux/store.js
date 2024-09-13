import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import {persistReducer, persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { version } from 'mongoose';
import storage from 'redux-persist/lib/storage';

const rootReducre = combineReducers({user: userReducer})

const PersistConfig = {
  key:'root',
  storage,
  version:1,

}

const persistedReducre = persistReducer(PersistConfig , rootReducre)

export const store = configureStore({
  reducer: persistedReducre,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Disables serializable check if needed
    }),
});

export const persistor = persistStore(store);