import { configureStore } from '@reduxjs/toolkit';
import adminApi from './features/adminApi'


export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [adminApi.reducerPath]: adminApi.reducer,
    },
   
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(adminApi.middleware),
  })