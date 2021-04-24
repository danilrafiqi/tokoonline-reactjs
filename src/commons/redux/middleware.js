import axios from "axios";

export const tokenInterceptor = (store) => (next) => (action) => {
  const state = store.getState();
  const { token } = state.auth;

  if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  return next(action);
};
