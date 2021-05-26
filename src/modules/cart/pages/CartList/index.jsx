import { baseApi } from "@commons/config/index";
import { cartAction, useRetrieveCartListData } from "@commons/redux/cart";
import {
  currencyFormat,
  deleteChecked,
  findCheckedValue,
} from "@commons/utils";
import { BackButton, Button } from "@components/atoms/index";
import CartButton from "@components/moleculs/CartButton/index";
import Dashboard from "@components/templates/Dashboard/index";
import sumBy from "lodash/sumBy";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./index.css";

const CartList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartList = useRetrieveCartListData();

  const [checkedItem, setCheckedItem] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  const handleRetrieveCartList = useCallback(() => {
    dispatch(cartAction.retrieveCartListExecute());
  }, [dispatch]);

  const handleUpdateCart = useCallback(
    (param) => {
      dispatch(cartAction.updateCartExecute(param));
    },
    [dispatch]
  );

  useEffect(() => {
    handleRetrieveCartList();
  }, [handleRetrieveCartList]);

  const finalData = cartList.filter((val) => {
    return findCheckedValue(checkedItem, val.id);
  });

  const totalBarang = sumBy(finalData, (data) => {
    return data.quantity;
  });

  const totalPrice = currencyFormat(
    sumBy(finalData, (data) => {
      return data.product.price * data.quantity;
    })
  );

  return (
    <Dashboard>
      <div className="overflow-scroll pr-8">
        <BackButton />

        <div className="mt-8 flex flex-row justify-between">
          {/* //#region LIST CART */}
          <div className="mr-8">
            <div className="flex flex-row items-center mb-4">
              <input
                type="checkbox"
                name="all"
                id="all"
                className="w-5 h-5"
                checked={checkAll}
                onChange={() => {
                  if (checkAll) {
                    setCheckAll(false);
                    setCheckedItem([]);
                  } else {
                    setCheckAll(true);
                    setCheckedItem(cartList.map((cart) => cart.id));
                  }
                }}
              />
              <label htmlFor="all" className="ml-3">
                {"Pilih Semua"}
              </label>
            </div>

            {cartList.map((data, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-row justify-start items-center"
                >
                  <input
                    id={data.id}
                    type="checkbox"
                    className="cart-card__checkbox w-5 h-5 mr-4"
                    checked={findCheckedValue(checkedItem, data.id)}
                    onChange={() => {
                      if (findCheckedValue(checkedItem, data.id)) {
                        setCheckedItem(deleteChecked(checkedItem, data.id));
                        setCheckAll(false);
                      } else {
                        if (checkedItem.length === cartList.length - 1) {
                          setCheckAll(true);
                        }
                        setCheckedItem((prev) => [...prev, data.id]);
                      }
                    }}
                  />
                  <label htmlFor={data.id} className="flex flex-row">
                    <div
                      onClick={() => {
                        history.push("/product/" + data.id);
                      }}
                      key={data.product.name}
                      className="w-32 h-32 mb-4"
                    >
                      <img
                        alt="dummy"
                        className="rounded-2xl w-full h-full object-cover"
                        src={baseApi + "/" + data.product.image}
                      ></img>
                    </div>

                    <div className="ml-8 flex-1 flex flex-col justify-start items-start">
                      <div className="text-xl text-gray-500 line-clamp-2">
                        {data.product.name}
                      </div>
                      <div className="font-bold text-xl text-gray-700 mb-4">
                        {currencyFormat(data.product.price)}
                      </div>

                      <CartButton
                        total={data.quantity}
                        onClick={(val) => {
                          handleUpdateCart({
                            id: data.id,
                            quantity: val,
                            product_id: data.product.id,
                          });
                        }}
                        buttonClassName="cart__btn"
                      />
                    </div>
                  </label>
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
                  <div>Total Harga ({totalBarang} barang)</div>
                  <div>{totalPrice}</div>
                </div>
                <hr className="my-4" />
                <div className="font-semibold flex flex-row justify-between">
                  <div>Total</div>
                  <div>{totalPrice}</div>
                </div>

                <Button
                  onClick={async () => {
                    dispatch(
                      cartAction.retrieveCartListSelectedDataUpdate(
                        cartList.filter((data) => {
                          return findCheckedValue(checkedItem, data.id);
                        })
                      )
                    );
                    history.push("/checkout");
                  }}
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
