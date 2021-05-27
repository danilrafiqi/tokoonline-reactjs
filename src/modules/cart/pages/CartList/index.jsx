import { baseApi } from "@commons/config/index";
import { cartAction, useRetrieveCartListData } from "@commons/redux/cart";
import {
  currencyFormat,
  deleteChecked,
  findCheckedValue,
} from "@commons/utils";
import { BackButton, Dashboard, TotalCard } from "@components/index";
import sumBy from "lodash/sumBy";
import CartCard from "modules/cart/components/CartCard/index";
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

  // const handleUpdateCartSuccess = () => {
  //   return MySwal.fire({
  //     text: "Something went wrong!",
  //     icon: "success",
  //   });
  // };

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
                <CartCard
                  key={i}
                  id={data.id}
                  checked={findCheckedValue(checkedItem, data.id)}
                  onCheck={() => {
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
                  onClick={() => {
                    history.push("/product/" + data.id);
                  }}
                  image={baseApi + "/" + data.product.image}
                  productName={data.product.name}
                  price={currencyFormat(data.product.price)}
                  total={data.quantity}
                  onCartUpdate={(val) => {
                    handleUpdateCart({
                      id: data.id,
                      quantity: val,
                      product_id: data.product.id,
                    });
                  }}
                />
              );
            })}
          </div>
          {/* //#endregion */}

          {/* //#region TOTAL */}
          <div>
            <TotalCard
              totalItem={totalBarang}
              totalPrice={totalPrice}
              onClick={() => {
                dispatch(
                  cartAction.retrieveCartListSelectedDataUpdate(
                    cartList.filter((data) => {
                      return findCheckedValue(checkedItem, data.id);
                    })
                  )
                );
                history.push("/checkout");
              }}
            />
          </div>
          {/* //#endregion */}
        </div>
      </div>
    </Dashboard>
  );
};

export default CartList;
