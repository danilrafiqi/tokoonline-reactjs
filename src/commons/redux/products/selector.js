import { useSelector } from "react-redux";

export const useProductsctionSelector = () =>
  useSelector((state) => state.products.action);
export const useProductsLoading = () => {
  return useSelector((state) => state.products.productsLoading);
};
export const useProducts = () => {
  return useSelector((state) => state.products.products);
};

export const useProductDetailLoading = () => {
  return useSelector((state) => state.products.productDetailLoading);
};
export const useProductDetail = () => {
  return useSelector((state) => state.products.productDetail);
};
