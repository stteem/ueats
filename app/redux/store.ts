import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { menuSlice } from './features/menu/menuSlice';
import { drawerSlice } from './features/drawer/drawerSlice';
import { carouselSlice } from "./features/carousel/carouselSlice";


const rootReducer = combineSlices(menuSlice, drawerSlice, carouselSlice);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;

// export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
