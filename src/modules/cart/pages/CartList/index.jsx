import { BackButton, Button } from "@components/atoms/index";
import CartButton from "@components/moleculs/CartButton/index";
import Dashboard from "@components/templates/Dashboard/index";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./index.css";

const CartList = () => {
  const history = useHistory();
  const [total, setTotal] = useState(1);

  return (
    <Dashboard>
      <div className="overflow-scroll pr-8">
        <BackButton />

        <div className="mt-8 flex flex-row justify-between">
          {/* //#region LIST CART */}
          <div className="mr-8">
            {Array.from(Array(13).keys()).map((i) => {
              return (
                <div className="flex flex-row">
                  <div
                    onClick={() => {
                      history.push("/product/" + i);
                    }}
                    key={i}
                    className="w-32 h-32 mb-4"
                  >
                    <img
                      className="rounded-2xl "
                      src="https://placeimg.com/200/200/any"
                    ></img>
                  </div>

                  <div className="ml-8 flex-1 flex flex-col justify-start items-start">
                    <div className="text-xl text-gray-500 line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates d Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Id, doloremque repellat voluptas laborum
                      atque eaque quas vitae eveniet eligendi delectus. Ex
                      accusantium sequi dolorem. Ipsa quo fugiat culpa hic
                      porro?
                    </div>
                    <div className="font-bold text-xl text-gray-700 mb-4">
                      10.000.000,-
                    </div>

                    <CartButton
                      total={total}
                      onClick={setTotal}
                      buttonClassName="cart__btn"
                    />
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

                <Button
                  onClick={() => history.push("/checkout")}
                  className="w-full mt-4"
                >
                  Beli
                </Button>
              </div>
            </div>
          </div>
          {/* //#endregion */}
        </div>
      </div>
    </Dashboard>
  );
};

export default CartList;
