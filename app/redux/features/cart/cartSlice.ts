import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  ids: string[];
}

const initialState: CartState = {
  ids: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<string>) => {
      if (!state.ids.includes(action.payload)) {
        // If it's not in the array, add it
        state.ids.push(action.payload);
      }
      else {
         // If it's already in the array, remove it
        state.ids = state.ids.filter(id => id !== action.payload);
      }
    },
  },
  selectors: {
    selectCartStatus: (cart) => cart.ids,
  },
});

export const { updateCart } = cartSlice.actions;
export const { selectCartStatus } = cartSlice.selectors;
