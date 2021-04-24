import { useSelector } from "react-redux";

export const useCategoriesctionSelector = () =>
  useSelector((state) => state.categories.action);
export const useCategoriesLoading = () => {
  return useSelector((state) => state.categories.categoriesLoading);
};
export const useCategories = () => {
  return useSelector((state) => state.categories.categories);
};
