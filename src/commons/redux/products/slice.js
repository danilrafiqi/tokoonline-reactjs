import { createSlice } from "@reduxjs/toolkit";

const retrieveProductListInitialState = {
  retrieveProductListRespons: undefined,
  retrieveProductListError: undefined,
  retrieveProductListLoading: false,
};

const retrieveProductDetailInitialState = {
  retrieveProductDetailRespons: undefined,
  retrieveProductDetailError: undefined,
  retrieveProductDetailLoading: false,
  retrieveProductDetail: {},
};

const initialState = {
  ...retrieveProductListInitialState,
  action: "",
  retrieveProductListData: [],
  retrieveProductListPagination: {},
  retrieveProductDetailData: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //#region retrieveProductList
    retrieveProductListDataUpdate: (state, action) => ({
      ...state,
      retrieveProductListData: action.payload,
      action: action.type,
    }),
    retrieveProductListPaginationUpdate: (state, action) => ({
      ...state,
      retrieveProductListPagination: action.payload,
      action: action.type,
    }),

    retrieveProductListExecute: (state, action) => ({
      ...state,
      retrieveProductListLoading: true,
      action: action.type,
    }),
    retrieveProductListSuccess: (state, action) => ({
      ...state,
      retrieveProductListLoading: false,
      retrieveProductListRespons: action.payload,
      action: action.type,
    }),
    retrieveProductListFailed: (state, action) => ({
      ...state,
      retrieveProductListLoading: true,
      retrieveProductListError: action.payload,
      action: action.type,
    }),
    retrieveProductListReset: (state, action) => ({
      ...state,
      ...retrieveProductListInitialState,
      action: action.type,
    }),
    //#endregion

    //#region retrieveProductListDetail
    retrieveProductDetailExecute: (state, action) => ({
      ...state,
      retrieveProductDetailLoading: true,
      action: action.type,
    }),
    retrieveProductDetailSuccess: (state, action) => ({
      ...state,
      retrieveProductDetailLoading: false,
      retrieveProductDetailRespons: action.payload,
      retrieveProductDetailData: action.payload,
      action: action.type,
    }),
    retrieveProductDetailFailed: (state, action) => ({
      ...state,
      retrieveProductDetailLoading: true,
      retrieveProductDetailError: action.payload,
      action: action.type,
    }),
    retrieveProductDetailReset: (state, action) => ({
      ...state,
      ...retrieveProductDetailInitialState,
      action: action.type,
    }),
    //#endregion
  },
});

export const { actions: productAction, reducer: productReducer } = productSlice;
