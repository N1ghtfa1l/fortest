import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  item: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.item.push(action.payload)
      
    },
    removeCart(state, action) {
      state.item = state.item.filter(item => item.id !== action.payload);
    },
  },
});
export const {setCart, removeCart, updateCurrentItem} = cartSlice.actions;

export default cartSlice.reducer;

