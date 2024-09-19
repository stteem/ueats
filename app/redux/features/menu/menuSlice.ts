import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { createAppSlice } from "../../createAppSlice";
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchMenu } from '@/app/lib/data';
import { Menu } from '@/app/lib/definitions';

interface MenuState {
  menu: Menu[] | null;
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
  error: string | null;
}

const initialState: MenuState = {
  menu: null,
  status: 'idle',
  error: null
};


export const fetchMenuFromThunk = createAsyncThunk('menu/fetchMenu', async () => {
  console.log('fetchMenuFromThunk called')
  const response = await fetchMenu();
  console.log({response})
  return response;
});



export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    updateMenu: (state, action: PayloadAction<Menu[]>) => {
      state.menu = state.menu || [];
      const newItems = action.payload.filter(
        (newItem) => !state.menu?.some((item) => item.id === newItem.id)
      );
      state.menu = [...state.menu, ...newItems];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuFromThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMenuFromThunk.fulfilled, (state, action: PayloadAction<Menu[]>) => {
        state.status = 'succeeded';
        state.menu = action.payload;
      })
      .addCase(fetchMenuFromThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? '';
      });
  },
  selectors: {
    selectMenu: (menu) => menu.menu,
  },
});
export const { updateMenu } = menuSlice.actions;
export const { selectMenu } = menuSlice.selectors;
// export default menuSlice.reducer;