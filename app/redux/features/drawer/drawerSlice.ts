import { createSlice } from '@reduxjs/toolkit';
// import { createAppSlice } from "../../createAppSlice";
import type { PayloadAction } from '@reduxjs/toolkit';

interface DrawerState {
  open: boolean;
  cart: boolean;
}

const initialState: DrawerState = {
  open: false,
  cart: false
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    updateDrawer: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    updateCartDrawer: (state, action: PayloadAction<boolean>) => {
      state.cart = action.payload;
    },
  },
  selectors: {
    selectStatus: (drawer) => drawer.open,
    selectCartStatus: (drawer) => drawer.cart,
  },
});

export const { updateDrawer, updateCartDrawer } = drawerSlice.actions;
export const { selectStatus, selectCartStatus } = drawerSlice.selectors;

// export default drawerSlice.reducer;