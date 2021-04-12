import React from "react";
import { useHistory } from "react-router";

const CartList = () => {
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

        <div className="mt-12 flex flex-row justify-between">
          {/* //#region LIST CART */}
          <div className="">
            {Array.from(Array(3).keys()).map((i) => {
              return (
                <div className="flex flex-row">
                  <div
                    onClick={() => {
                      console.log("asdf");
                      history.push("/product/" + i);
                    }}
                    key={i}
                    className="w-36 h-36 mb-4"
                  >
                    <img
                      className="rounded-2xl "
                      src="https://placeimg.com/200/200/any"
                    ></img>
                  </div>

                  <div className="ml-8">
                    <div className="text-xl text-gray-500">
                      Ini judul product
                    </div>
                    <div className="font-bold text-xl text-gray-700 mb-4">
                      10.000.000,-
                    </div>

                    <div className="flex flex-row">
                      <button className="border border-gray-400 rounded-full w-10 py-2 hover:bg-gray-200 text-gray-500 shadow-2xl flex items-center justify-center mr-2">
                        -
                      </button>
                      <button
                        className="border border-gray-400 rounded-full w-10 py-2 text-gray-500 shadow-2xl flex items-center justify-center cursor-text "
                        disabled
                      >
                        2
                      </button>
                      <button className="border border-gray-400 rounded-full w-10 py-2 hover:bg-gray-200 text-gray-500 shadow-2xl flex items-center justify-center mx-2">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* //#endregion */}

          {/* //#region TOTAL */}
          <div>
            <div className="border rounded-xl w-80 p-4">
              <div className="mt-4">
                <div className="font-semibold mb-4">Ringkasan belanja</div>
                <div className="text-gray-500 flex flex-row text-sm justify-between">
                  <div>Total Harga (3 barang)</div>
                  <div>Rp.8.850.000,-</div>
                </div>
                <hr className="my-4" />
                <div className="font-semibold flex flex-row justify-between">
                  <div>Total</div>
                  <div>Rp.8.850.000,-</div>
                </div>

                <button
                  className="bg-blue-600 py-3 w-full rounded-full hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center mt-4"
                  onClick={() => history.push("/checkout")}
                >
                  Beli
                </button>
              </div>
            </div>
          </div>
          {/* //#endregion */}
        </div>
      </div>
    </div>
  );
};

export default CartList;
