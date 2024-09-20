import { configureStore } from '@reduxjs/toolkit';
import { menuSlice } from './features/menu/menuSlice';
import { drawerSlice } from './features/drawer/drawerSlice';
import { carouselSlice } from "./features/carousel/carouselSlice";
import { cartSlice } from './features/cart/cartSlice';



export const makeStore = () => {
  return configureStore({
    reducer: {
      [menuSlice.name]: menuSlice.reducer,
      [drawerSlice.name]: drawerSlice.reducer,
      [carouselSlice.name]: carouselSlice.reducer,
      [cartSlice.name]: cartSlice.reducer,
    },
    // devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
