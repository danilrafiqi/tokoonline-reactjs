import { useRetrieveCategoryListData } from "@commons/redux/category/selector";
import { categoryAction } from "@commons/redux/category/slice";
import {
  productAction,
  useRetrieveProductListPagination,
} from "@commons/redux/product";
import { Pagination } from "@components/moleculs/index";
import Dashboard from "@components/templates/Dashboard/index";
import { useRetrieveProductListData } from "commons/redux/product";
import { currencyFormat } from "commons/utils/index";
import ProductCard from "modules/product/components/ProductCard/index";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const ProductList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);
  const categoryList = useRetrieveCategoryListData();
  const productList = useRetrieveProductListData();
  const productPagination = useRetrieveProductListPagination();

  const handleFetchCategories = useCallback(() => {
    dispatch(categoryAction.retrieveCategoryListExecute());
  }, [dispatch]);

  const handleFetchProducts = useCallback(
    (payload) => {
      dispatch(
        productAction.retrieveProductListExecute({
          perPage: payload?.perPage,
          currentPage: payload?.currentPage,
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    handleFetchCategories();
    handleFetchProducts({
      perPage: 8,
      currentPage: 1,
    });
  }, []);

  return (
    <Dashboard>
      <div className="flex flex-row justify-between mt-4">
        <div>
          <div className="rounded shadow p-8 py-4 bg-white mr-8 inline-block h-auto">
            <div className="font-extrabold text-2xl mb-6">Categories</div>
            {categoryList.map((data, i) => {
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
            {productList.map((data, i) => {
              return (
                <ProductCard
                  key={i}
                  onClick={() => {
                    history.push(`/product/${data.id}`);
                  }}
                  image={data.image}
                  name={data.name}
                  price={currencyFormat(data.price)}
                />
              );
            })}
          </div>
          {/* //#endregion */}

          {/* //#region PAGINATION */}
          <Pagination
            active={pagination}
            onClick={(v) => {
              setPagination(v);
              handleFetchProducts({
                perPage: 8,
                currentPage: v,
              });
            }}
            limit={Math.ceil(
              productPagination.total / productPagination.perPage
            )}
          />
          {/* //#endregion */}
        </div>
      </div>
    </Dashboard>
  );
};

export default ProductList;
