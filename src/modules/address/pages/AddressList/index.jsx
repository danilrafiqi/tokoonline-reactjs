import { useProducts } from "@commons/redux/product/selector";
import { productsAction } from "@commons/redux/product/slice";
import { Pagination } from "@components/moleculs/index";
import Dashboard from "@components/templates/Dashboard/index";
import { useCategories } from "commons/redux/categories/selector";
import { categoriesAction } from "commons/redux/categories/slice";
import { currencyFormat } from "commons/utils/index";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const ProductList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);
  const categories = useCategories();
  const products = useProducts();

  const handleFetchCategories = useCallback(() => {
    dispatch(categoriesAction.categoriesFetch());
  }, [dispatch]);

  const handleFetchProducts = useCallback(() => {
    dispatch(productsAction.productsFetch());
  }, [dispatch]);

  useEffect(() => {
    handleFetchCategories();
    handleFetchProducts();
  }, []);

  return (
    <Dashboard>
      <div className="flex flex-row justify-between mt-4">
        <div>
          <div className="rounded shadow p-8 py-4 bg-white mr-8 inline-block h-auto">
            <div className="font-extrabold text-2xl mb-6">Categories</div>
            {categories.map((data, i) => {
              return (
                <div key={i} className="my-4 font-light">
                  {data.name}
                </div>
              );
            })}
          </div>
        </div>

        <div className="overflow-scroll flex-1">
          {/* //#region PRODUCTS */}
          <div className="grid grid-cols-4 gap-4">
            {products.map((data, i) => {
              return (
                <div
                  onClick={() => {
                    history.push(`/product/${data.id}`);
                  }}
                  key={i}
                  className="rounded-2xl w-full mb-8"
                >
                  <img
                    className="rounded-2xl w-full h-44 object-cover"
                    src={data.image}
                  ></img>
                  <div className="mt-2 text-gray-700 font-semibold">
                    {data.name}
                  </div>
                  <div className="text-gray-500 text-sm -mt-1">
                    {currencyFormat(data.price)}
                  </div>
                </div>
              );
            })}
          </div>
          {/* //#endregion */}
          {/* //#region PAGINATION */}
          <Pagination active={pagination} onClick={setPagination} limit={10} />
          {/* //#endregion */}
        </div>
      </div>
    </Dashboard>
  );
};

export default ProductList;
