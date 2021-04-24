import { createSlice } from "@reduxjs/toolkit";

const categoriesInitialState = {
  categoriesRespons: undefined,
  categoriesError: undefined,
  categoriesLoading: false,
};

const initialState = {
  ...categoriesInitialState,
  action: "",
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    //#region categories
    categoriesFetch: (state, action) => ({
      ...state,
      categoriesLoading: true,
      action: action.type,
    }),
    categoriesSuccess: (state, action) => ({
      ...state,
      categoriesLoading: false,
      categories: action.payload,
      action: action.type,
    }),
    categoriesFailed: (state, action) => ({
      ...state,
      categoriesLoading: true,
      categoriesError: action.payload,
      action: action.type,
    }),
    categoriesReset: (state, action) => ({
      ...state,
      ...categoriesInitialState,
      action: action.type,
    }),
    //#endregion
  },
});

export const {
  actions: categoriesAction,
  reducer: categoriesReducer,
} = categoriesSlice;
