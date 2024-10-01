import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  image_url: string;
  name: string;
  currency: string;
  price: number;
  description: string;
  quantity: number;
}
interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<CartItem>) => {
        // console.log(action.payload);
        const existingItem = state.items.find(item => item.id === action.payload.id);

        if (!existingItem) {
            // action.payload.quantity = 1;
            // console.log(action.payload);
            // state.total += action.payload.price
            // If an item with the same id is not in the array, add it
            state.items.push(action.payload);
        } else {
            // If it's already in the array, remove it
            state.items = state.items.filter(item => item.id !== action.payload.id);
        }
    },
    trashCartItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItemQuantity: (state, action: PayloadAction<{ id: string; quantityChange: number }>) => {
      const { id, quantityChange } = action.payload;
      state.items = state.items.map(item => {
        if (item.id === id) {
          // const total = state.total += item.price * (item.quantity === 0 ? quantityChange * item.quantity: quantityChange)
          const newQuantity = Math.max(0, item.quantity + quantityChange);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      // Remove items with quantity 0
      // state.items = state.items.filter(item => (item.quantity ?? 0 ) > 0);
    },
    updateTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
  selectors: {
    selectCartItems: (cart) => cart.items,
    selectCartTotal: (cart) => cart.total,
  },
});

export const { updateCart, trashCartItem, updateItemQuantity, updateTotal } = cartSlice.actions;
export const { selectCartItems, selectCartTotal } = cartSlice.selectors;
