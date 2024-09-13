import { createAppSlice } from "../../createAppSlice";
import type { PayloadAction } from '@reduxjs/toolkit';

interface CarouselState {
  active: number;
}

const initialState: CarouselState = {
  active: 0,
};

export const carouselSlice = createAppSlice({
  name: 'carousel',
  initialState,
  reducers: (create) => ({
    updateCarousel: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.active = action.payload;
      },
    ),
  }),
  selectors: {
    selectCarouselStatus: (carousel) => carousel.active,
  },
});

export const { updateCarousel } = carouselSlice.actions;
export const { selectCarouselStatus } = carouselSlice.selectors;