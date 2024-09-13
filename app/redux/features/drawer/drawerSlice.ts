// import { createSlice } from '@reduxjs/toolkit';
import { createAppSlice } from "../../createAppSlice";
import type { PayloadAction } from '@reduxjs/toolkit';

interface DrawerState {
  open: boolean;
}

const initialState: DrawerState = {
  open: false,
};

export const drawerSlice = createAppSlice({
  name: 'drawer',
  initialState,
  reducers: (create) => ({
    updateDrawer: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        state.open = action.payload;
      },
    ),
  }),
  selectors: {
    selectStatus: (drawer) => drawer.open,
  },
});

export const { updateDrawer } = drawerSlice.actions;
export const { selectStatus } = drawerSlice.selectors;

// export default drawerSlice.reducer;