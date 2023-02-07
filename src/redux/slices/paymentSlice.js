import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product_id: 0,
  address: '',
  price: 0,
  point: 0,
  laundry_fee: 3000,
  total_price: 0,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    getProductInfo: (prevState, action) => {
      const { price, product_id } = action.payload;
      const { laundry_fee, point } = prevState;
      const totalPrice = price + laundry_fee - point;
      return {
        ...prevState,
        price,
        product_id,
        total_price: totalPrice,
      };
    },
    saveAddress: (prevState, action) => {
      return {
        ...prevState,
        address: action.payload,
      };
    },
  },
});

export const { getProductInfo, saveAddress } = paymentSlice.actions;
export default paymentSlice.reducer;
