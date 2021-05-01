import { createSlice } from "@reduxjs/toolkit";

const addCartInitialState = {
  addCartRespons: undefined,
  addCartError: undefined,
  addCartLoading: false,
};

const updateCartInitialState = {
  updateCartRespons: undefined,
  updateCartError: undefined,
  updateCartLoading: false,
};

const cartsInitialState = {
  cartsRespons: undefined,
  cartsError: undefined,
  cartsLoading: false,
};

const cartDetailInitialState = {
  cartDetailRespons: undefined,
  cartDetailError: undefined,
  cartDetailLoading: false,
  cartDetail: {},
};

const initialState = {
  ...addCartInitialState,
  ...updateCartInitialState,
  action: "",
  cartList: [],
  cartPagination: [],
  cartListSelected: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //#region addCart
    addCartFetch: (state, action) => ({
      ...state,
      addCartLoading: true,
      action: action.type,
    }),
    addCartSuccess: (state, action) => ({
      ...state,
      addCartLoading: false,
      action: action.type,
    }),
    addCartFailed: (state, action) => ({
      ...state,
      addCartLoading: false,
      addCartError: action.payload,
      action: action.type,
    }),
    addCartReset: (state, action) => ({
      ...state,
      ...addCartInitialState,
      action: action.type,
    }),
    //#endregion

    //#region updateCart
    updateCartFetch: (state, action) => ({
      ...state,
      updateCartLoading: true,
      action: action.type,
    }),
    updateCartSuccess: (state, action) => ({
      ...state,
      updateCartLoading: false,
      action: action.type,
    }),
    updateCartFailed: (state, action) => ({
      ...state,
      updateCartLoading: true,
      action: action.type,
    }),
    updateCartReset: (state, action) => ({
      ...state,
      ...updateCartInitialState,
      action: action.type,
    }),
    //#endregion

    //#region carts
    cartsFetch: (state, action) => ({
      ...state,
      cartsLoading: true,
      action: action.type,
    }),
    cartsSuccess: (state, action) => ({
      ...state,
      cartsLoading: false,
      cartsRespons: action.payload,
      action: action.type,
    }),
    cartsUpdate: (state, action) => ({
      ...state,
      cartsLoading: false,
      cartList: action.payload.data,
      cartPagination: action.payload.pagination,
      action: action.type,
    }),
    cartsFailed: (state, action) => ({
      ...state,
      cartsLoading: true,
      cartsError: action.payload,
      action: action.type,
    }),
    cartsReset: (state, action) => ({
      ...state,
      ...cartsInitialState,
      action: action.type,
    }),
    //#endregion

    //#region cartsDetail
    cartDetailFetch: (state, action) => ({
      ...state,
      cartDetailLoading: true,
      action: action.type,
    }),
    cartDetailSuccess: (state, action) => ({
      ...state,
      cartDetailLoading: false,
      cartDetailRespons: action.payload,
      cartDetail: action.payload,
      action: action.type,
    }),
    cartDetailFailed: (state, action) => ({
      ...state,
      cartDetailLoading: true,
      cartDetailError: action.payload,
      action: action.type,
    }),
    cartDetailReset: (state, action) => ({
      ...state,
      ...cartDetailInitialState,
      action: action.type,
    }),
    //#endregion

    //#region carts
    cartsSelectedUpdate: (state, action) => ({
      ...state,
      cartsLoading: false,
      cartListSelected: action.payload,
      action: action.type,
    }),
    //#endregion
  },
});

export const { actions: cartAction, reducer: cartReducer } = cartSlice;
