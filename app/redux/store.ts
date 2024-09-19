import { configureStore } from '@reduxjs/toolkit';
import { menuSlice } from './features/menu/menuSlice';
import { drawerSlice } from './features/drawer/drawerSlice';
import { carouselSlice } from "./features/carousel/carouselSlice";



export const makeStore = () => {
  return configureStore({
    reducer: {
      [menuSlice.name]: menuSlice.reducer,
      [drawerSlice.name]: drawerSlice.reducer,
      [carouselSlice.name]: carouselSlice.reducer,
    },
    // devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
