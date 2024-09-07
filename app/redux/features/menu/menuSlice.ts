import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  price: number | null;
  quantity: string;
}

const initialState: MenuState = {
  price: null,
  quantity: '',
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    updatePrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    updateQuantity: (state, action: PayloadAction<string>) => {
      state.quantity = action.payload;
    },
  },
});

export const { updatePrice, updateQuantity } = menuSlice.actions;
export default menuSlice.reducer;