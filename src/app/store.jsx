import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { apiCatSlice } from "../features/cats/CatsApiSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiCatSlice.reducerPath]: apiCatSlice.reducer,
    //additional reducers
  },
  //middleware used for async calls
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiCatSlice.middleware); //.concat(additional reducer for all reducers)
  },
});
