import { createSlice } from "@reduxjs/toolkit";

const productsInitialState = {
  productsRespons: undefined,
  productsError: undefined,
  productsLoading: false,
};

const productDetailInitialState = {
  productDetailRespons: undefined,
  productDetailError: undefined,
  productDetailLoading: false,
  productDetail: {},
};

const initialState = {
  ...productsInitialState,
  action: "",
  products: [],
  productsPagination: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //#region products
    productsFetch: (state, action) => ({
      ...state,
      productsLoading: true,
      action: action.type,
    }),
    productsSuccess: (state, action) => ({
      ...state,
      productsLoading: false,
      productsRespons: action.payload,
      action: action.type,
    }),
    productsUpdate: (state, action) => ({
      ...state,
      productsLoading: false,
      products: action.payload.data,
      productsPagination: action.payload.pagination,
      action: action.type,
    }),
    productsFailed: (state, action) => ({
      ...state,
      productsLoading: true,
      productsError: action.payload,
      action: action.type,
    }),
    productsReset: (state, action) => ({
      ...state,
      ...productsInitialState,
      action: action.type,
    }),
    //#endregion

    //#region productsDetail
    productDetailFetch: (state, action) => ({
      ...state,
      productDetailLoading: true,
      action: action.type,
    }),
    productDetailSuccess: (state, action) => ({
      ...state,
      productDetailLoading: false,
      productDetailRespons: action.payload,
      productDetail: action.payload,
      action: action.type,
    }),
    productDetailFailed: (state, action) => ({
      ...state,
      productDetailLoading: true,
      productDetailError: action.payload,
      action: action.type,
    }),
    productDetailReset: (state, action) => ({
      ...state,
      ...productDetailInitialState,
      action: action.type,
    }),
    //#endregion
  },
});

export const {
  actions: productsAction,
  reducer: productsReducer,
} = productsSlice;
