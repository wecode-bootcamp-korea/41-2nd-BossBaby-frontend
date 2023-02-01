import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: prevState => ({ ...prevState, value: prevState.value + 1 }),
    decrease: prevState => ({ ...prevState, value: prevState.value - 1 }),
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
