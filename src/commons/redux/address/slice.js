import { createSlice } from "@reduxjs/toolkit";

const retrieveAddressInitialState = {
  retrieveAddressRespons: undefined,
  retrieveAddressError: undefined,
  retrieveAddressLoading: false,
};

const initialState = {
  ...retrieveAddressInitialState,
  action: "",
  addressList: [],
  addressPagination: {},
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    //#region retrieveAddress
    retrieveAddressFetch: (state, action) => ({
      ...state,
      retrieveAddressLoading: true,
      action: action.type,
    }),
    retrieveAddressSuccess: (state, action) => ({
      ...state,
      retrieveAddressLoading: false,
      addressList: action.payload.data,
      addressPagination: action.payload.pagination,
      action: action.type,
    }),
    retrieveAddressFailed: (state, action) => ({
      ...state,
      retrieveAddressLoading: true,
      retrieveAddressError: action.payload,
      action: action.type,
    }),
    retrieveAddressReset: (state, action) => ({
      ...state,
      ...retrieveAddressInitialState,
      action: action.type,
    }),
    //#endregion
  },
});

export const { actions: addressAction, reducer: addressReducer } = addressSlice;
