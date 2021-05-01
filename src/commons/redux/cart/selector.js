import { useSelector } from "react-redux";

export const useCartAction = () => useSelector((state) => state.cart.action);
export const useCartsLoading = () => {
  return useSelector((state) => state.cart.cartsLoading);
};
export const useCarts = () => {
  return useSelector((state) => state.cart.cartList);
};
export const useCartsSelected = () => {
  return useSelector((state) => state.cart.cartListSelected);
};
export const useAddCartLoading = () => {
  return useSelector((state) => state.cart.addCartLoading);
};
