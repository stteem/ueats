import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './features/menu/menuSlice';
import drawerSlice from './features/drawer/drawerSlice';

export const ueatsStore = () => {
  return configureStore({
    reducer: {
      menu: menuSlice,
      drawer: drawerSlice,
    },
  });
};

export type AppStore = ReturnType<typeof ueatsStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
