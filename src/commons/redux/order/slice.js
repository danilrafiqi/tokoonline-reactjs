import { createSlice } from "@reduxjs/toolkit";

const retrieveOrderListInitialState = {
  retrieveOrderListRespons: undefined,
  retrieveOrderListError: undefined,
  retrieveOrderListLoading: false,
};

const initialState = {
  ...retrieveOrderListInitialState,
  action: "",
  retrieveOrderListData: [],
  retrieveOrderListPagination: undefined,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    //#region retrieveOrderList
    retrieveOrderListExecute: (state, action) => ({
      ...state,
      retrieveOrderListLoading: true,
      action: action.type,
    }),
    retrieveOrderListSuccess: (state, action) => ({
      ...state,
      retrieveOrderListLoading: false,
      retrieveOrderListData: action.payload.data,
      retrieveOrderListPagination: action.payload.pagination,
      retrieveOrderListRespons: action.payload,
      action: action.type,
    }),
    retrieveOrderListFailed: (state, action) => ({
      ...state,
      retrieveOrderListLoading: false,
      retrieveOrderListError: action.payload,
      action: action.type,
    }),
    retrieveOrderListReset: (state, action) => ({
      ...state,
      ...retrieveOrderListInitialState,
      action: action.type,
    }),
    //#endregion
  },
});

export const { actions: orderAction, reducer: orderReducer } = orderSlice;
