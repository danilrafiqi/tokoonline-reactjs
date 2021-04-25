import { useSelector } from "react-redux";

export const useCartActionSelector = () =>
  useSelector((state) => state.cart.action);
export const useCartsLoading = () => {
  return useSelector((state) => state.cart.cartsLoading);
};
export const useCarts = () => {
  return useSelector((state) => state.cart.cartList);
};
export const useAddCartLoading = () => {
  return useSelector((state) => state.cart.addCartLoading);
};
