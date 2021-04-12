import React from "react";
import { useHistory } from "react-router";

const ProductDetail = () => {
  const history = useHistory();
  return (
    <div className="bg-white flex h-screen flex-row">
      <div className="bg-red-100 p-8">
        <div className="py-4 bg-gray-2">Logo</div>
        <div className="mt-2">
          <div className="font-bold text-2xl mb-6">Categories</div>
          {Array.from(Array(6).keys()).map((i) => {
            return (
              <div key={i} className="my-2">
                programming
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full p-8 flex flex-1 flex-col">
        {/* //#region Header  */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="Search . . ."
              className="p-4 rounded-full bg-gray-2 border-none w-80 mr-4"
            />
            <button className="bg-blue-600 py-4 rounded-full w-14 hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center">
              oo
            </button>
          </div>
          <div className="flex flex-row">
            <button className="bg-blue-600 py-4 rounded-full w-14 hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center mr-4">
              oo
            </button>
            <button className="bg-blue-600 py-4 rounded-full w-14 hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center">
              oo
            </button>
          </div>
        </div>
        {/* //#endregion */}

        {/* //#region BACK */}
        <div className="flex flex-row my-8 items-center">
          <button
            onClick={() => history.goBack()}
            className="bg-blue-600 py-2 rounded-full w-10 hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center"
          >
            oo
          </button>
          <div className="ml-4 text-2xl font-bold">Back</div>
        </div>
        {/* //#endregion */}
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
            <div className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              saepe expedita minima. Id quam optio at facere culpa? Veniam
              labore inventore quis exercitationem obcaecati saepe iure neque
              vel? Aliquid, voluptate.
            </div>

            <div className="flex flex-row">
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
        {/* //#endregion */}
      </div>
    </div>
  );
};

export default ProductDetail;
