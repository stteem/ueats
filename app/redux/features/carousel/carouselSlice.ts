// import { createAppSlice } from "../../createAppSlice";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CarouselState {
  active: number;
}

const initialState: CarouselState = {
  active: 0,
};

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    updateCarousel: (state, action: PayloadAction<number>) => {
        state.active = action.payload;
    },
    
  },
  selectors: {
    selectCarouselStatus: (carousel) => carousel.active,
  },
});

export const { updateCarousel } = carouselSlice.actions;
export const { selectCarouselStatus } = carouselSlice.selectors;
// export default carouselSlice.reducer;