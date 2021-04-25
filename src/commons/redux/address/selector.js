import { useSelector } from "react-redux";

export const useAddressctionSelector = () =>
  useSelector((state) => state.address.action);
export const useRetrieveAddressLoading = () => {
  return useSelector((state) => state.address.retrieveAddressLoading);
};
export const useAddressList = () => {
  return useSelector((state) => state.address.addressList);
};
