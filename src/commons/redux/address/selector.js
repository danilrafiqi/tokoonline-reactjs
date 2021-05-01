import { useSelector } from "react-redux";

export const useAddressAction = () =>
  useSelector((state) => state.address.action);
export const useRetrieveAddressLoading = () => {
  return useSelector((state) => state.address.retrieveAddressLoading);
};
export const useCreateAddressLoading = () => {
  return useSelector((state) => state.address.createAddressLoading);
};
export const useAddressList = () => {
  return useSelector((state) => state.address.addressList);
};
