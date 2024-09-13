// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createAppSlice } from "../../createAppSlice";
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchMenu } from '@/app/lib/data';
import { Menu } from '@/app/lib/definitions';

interface MenuState {
  menu: Menu[] | null;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: MenuState = {
  menu: null,
  status: 'idle',
  error: null
};



export const menuSlice = createAppSlice({
  name: 'menu',
  initialState,
  reducers: (create) => ({
    fetchMenuAsync: create.asyncThunk(
      async () => {
        console.log('fetchMenuAsync called')
        const response = await fetchMenu();
        console.log({response})
        // The value we return becomes the `fulfilled` action payload
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action: PayloadAction<Menu[]>) => {
          state.status = "idle";
          // state.status = "fulfilled";
          state.menu = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    ),
  }),
  selectors: {
    selectMenu: (menu) => menu.menu,
    selectStatus: (menu) => menu.status,
  },

  
});
export const { fetchMenuAsync } = menuSlice.actions;
export const { selectMenu, selectStatus } = menuSlice.selectors;



// export const fetchMenuFromThunk = createAsyncThunk('menu/fetchMenu', async () => {
//   console.log('fetchMenuFromThunk called')
//   const response = await fetchMenu();
//   console.log({response})
//   return response;
// });

// extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchMenuFromThunk.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchMenuFromThunk.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.menu = action.payload;
  //     })
  //     .addCase(fetchMenuFromThunk.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.error.message ?? '';
  //     });
  // },

// export default menuSlice.reducer;