import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,  // Assign `userReducer` to handle `user` slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Disables serializable check if needed
    }),
});
