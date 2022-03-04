import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    incremented(state) {
      // it's okay to do this because "immer" makes it work
      // under the hood
      state.value++;
    },

    // decrement
    decremented(state) {
      state.value--;
    },

    // Increment based upon a passed in argument
    amountAdded(state, action) {
      state.value += action.payload;
    },
  },
});

export const { incremented, decremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
