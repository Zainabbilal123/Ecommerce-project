import { createSlice } from "@reduxjs/toolkit";

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteProducts: [],
    message: "",
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const isExist = state.favoriteProducts.find(
        (item) => item.id === action.payload.id
      );

      if (isExist) {
        state.favoriteProducts = state.favoriteProducts.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favoriteProducts.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;