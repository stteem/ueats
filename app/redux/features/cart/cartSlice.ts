import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  image_url: string;
  name: string;
  currency: string;
  price: number;
}
interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<CartItem>) => {
        console.log(action.payload);
        const existingItem = state.items.find(item => item.id === action.payload.id);

        if (!existingItem) {
            // If an item with the same id is not in the array, add it
            state.items.push(action.payload);
        } else {
            // If it's already in the array, remove it
            state.items = state.items.filter(item => item.id !== action.payload.id);
        }
    },
  },
  selectors: {
    selectCartStatus: (cart) => cart.items,
  },
});

export const { updateCart } = cartSlice.actions;
export const { selectCartStatus } = cartSlice.selectors;
