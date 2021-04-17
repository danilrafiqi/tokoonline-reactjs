import { BackButton } from "@components/atoms/index";
import Dashboard from "@components/templates/Dashboard/index";
import React from "react";
import { useHistory } from "react-router";

const ProductDetail = () => {
  const history = useHistory();
  return (
    <Dashboard>
      <div className="overflow-scroll pr-8">
        <BackButton className="my-8" />
        {/* //#region PRODUCTS */}
        <div className="mt-4 flex flex-row">
          <div className="w-96">
            <img
              className="rounded-2xl w-96 h-72 object-cover"
              src="https://placeimg.com/200/200/any"
            ></img>

            <div className="mt-4 flex flex-row justify-between">
              {Array.from(Array(3).keys()).map((i) => {
                return (
                  <img
                    className="rounded-2xl w-28"
                    src="https://placeimg.com/200/200/any"
                  ></img>
                );
              })}
            </div>
          </div>

          <div className="flex-1 ml-8">
            <div className="font-bold text-4xl text-gray-700">
              Ini judul product
            </div>
            <div className="font-bold text-xl text-gray-700 my-4">
              10.000.000,-
            </div>

            <div className="font-bold text-xl text-gray-700">
              <span>Stock: </span>
              <span className="font-normal">4</span>
            </div>
            <div className="text-gray-500 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              saepe expedita minima. Id quam optio at facere culpa? Veniam
              labore inventore quis exercitationem obcaecati saepe iure neque
              vel? Aliquid, voluptate.
            </div>

            <div className="flex flex-row mt-10">
              <button className="bg-blue-600 py-3 rounded-full w-12 hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center mr-2">
                -
              </button>
              <button
                className="bg-blue-600 py-3 rounded-full w-12 text-white shadow-2xl flex items-center justify-center cursor-text "
                disabled
              >
                2
              </button>
              <button className="bg-blue-600 py-3 rounded-full w-12 hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center mx-2">
                +
              </button>
              <button className="bg-blue-600 p-3 rounded-md hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center ml-10">
                Add to Cart
              </button>
              <button
                onClick={() => history.push("/cart")}
                className="bg-blue-600 p-3 rounded-md hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center mx-2"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //#endregion */}
    </Dashboard>
  );
};

export default ProductDetail;
