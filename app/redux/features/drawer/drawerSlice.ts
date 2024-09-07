import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface DrawerState {
  open: boolean;
}

const initialState: DrawerState = {
  open: false,
};

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    updateDrawer: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { updateDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;