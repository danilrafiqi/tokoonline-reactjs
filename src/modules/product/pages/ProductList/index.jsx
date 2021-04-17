import { Pagination } from "@components/moleculs/index";
import Dashboard from "@components/templates/Dashboard/index";
import React, { useState } from "react";
import { useHistory } from "react-router";

const ProductList = () => {
  const history = useHistory();
  const [pagination, setPagination] = useState(1);
  return (
    <Dashboard>
      <div className="overflow-scroll pr-8">
        {/* //#region PRODUCTS */}
        <div className="mt-8">
          <div className="grid grid-cols-4 gap-4">
            {Array.from(Array(8).keys()).map((i) => {
              return (
                <div
                  onClick={() => {
                    console.log("asdf");
                    history.push("/product/" + i);
                  }}
                  key={i}
                  className="rounded-2xl w-full mb-8"
                >
                  <img
                    className="rounded-2xl w-full h-44 object-cover"
                    src="https://placeimg.com/200/200/any"
                  ></img>
                  <div className="mt-2 text-gray-700 font-semibold">
                    Halo dunia
                  </div>
                  <div className="text-gray-500 text-sm -mt-1">Halo dunia</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* //#endregion */}
        {/* //#region PAGINATION */}
        <Pagination active={pagination} onClick={setPagination} limit={10} />
        {/* //#endregion */}
      </div>
    </Dashboard>
  );
};

export default ProductList;
