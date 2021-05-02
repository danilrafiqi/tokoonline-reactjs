import { useSelector } from "react-redux";

export const useUserAction = () => useSelector((state) => state.user.action);

//#region LOADING
export const useRetrieveProfileLoading = () => {
  return useSelector((state) => state.user.retrieveProfileLoading);
};
export const useUpdateProfileLoading = () => {
  return useSelector((state) => state.user.updateProfileLoading);
};
export const useUpdatePasswordLoading = () => {
  return useSelector((state) => state.user.updatePasswordLoading);
};
//#endregion
