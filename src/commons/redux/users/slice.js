import { createSlice } from "@reduxjs/toolkit";

const retrieveProfileInitialState = {
  retrieveProfileRespons: undefined,
  retrieveProfileError: undefined,
  retrieveProfileLoading: false,
};

const updateProfileInitialState = {
  updateProfileRespons: undefined,
  updateProfileError: undefined,
  updateProfileLoading: false,
};

const updatePasswordInitialState = {
  updatePasswordRespons: undefined,
  updatePasswordError: undefined,
  updatePasswordLoading: false,
};

const initialState = {
  ...retrieveProfileInitialState,
  ...updateProfileInitialState,
  ...updatePasswordInitialState,
  action: "",
  retrieveProfileData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //#region retrieveProfile
    retrieveProfileFetch: (state, action) => ({
      ...state,
      retrieveProfileLoading: true,
      action: action.type,
    }),
    retrieveProfileSuccess: (state, action) => ({
      ...state,
      retrieveProfileLoading: false,
      retrieveProfileData: action.payload,
      retrieveProfileRespons: action.payload,
      action: action.type,
    }),
    retrieveProfileFailed: (state, action) => ({
      ...state,
      retrieveProfileLoading: true,
      retrieveProfileError: action.payload,
      action: action.type,
    }),
    retrieveProfileReset: (state, action) => ({
      ...state,
      ...retrieveProfileInitialState,
      action: action.type,
    }),
    //#endregion

    //#region updateProfile
    updateProfileFetch: (state, action) => ({
      ...state,
      updateProfileLoading: true,
      action: action.type,
    }),
    updateProfileSuccess: (state, action) => ({
      ...state,
      updateProfileLoading: false,
      updateProfileRespons: action.payload,
      action: action.type,
    }),
    updateProfileFailed: (state, action) => ({
      ...state,
      updateProfileLoading: true,
      updateProfileError: action.payload,
      action: action.type,
    }),
    updateProfileReset: (state, action) => ({
      ...state,
      ...updateProfileInitialState,
      action: action.type,
    }),
    //#endregion

    //#region updatePassword
    updatePasswordFetch: (state, action) => ({
      ...state,
      updatePasswordLoading: true,
      action: action.type,
    }),
    updatePasswordSuccess: (state, action) => ({
      ...state,
      updatePasswordLoading: false,
      updatePasswordRespons: action.payload,
      action: action.type,
    }),
    updatePasswordFailed: (state, action) => ({
      ...state,
      updatePasswordLoading: true,
      updatePasswordError: action.payload,
      action: action.type,
    }),
    updatePasswordReset: (state, action) => ({
      ...state,
      ...updatePasswordInitialState,
      action: action.type,
    }),
    //#endregion
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
