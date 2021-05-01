import Dashboard from "@components/templates/Dashboard/index";
import { useAddCartLoading, useCartAction } from "commons/redux/cart/selector";
import { cartAction } from "commons/redux/cart/slice";
import { useProductDetail } from "commons/redux/products/selector";
import { productsAction } from "commons/redux/products/slice";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetail = useProductDetail();
  const addCartLoading = useAddCartLoading();
  const cartActionState = useCartAction();

  const handleFetchProductDetail = useCallback(
    (param) => {
      dispatch(productsAction.productDetailFetch(param));
    },
    [dispatch]
  );

  const handleAddCart = useCallback(
    (param) => {
      dispatch(cartAction.addCartFetch(param));
    },
    [dispatch]
  );

  useEffect(() => {
    handleFetchProductDetail({
      id: id,
    });
  }, [handleFetchProductDetail, id]);

  useEffect(() => {
    dispatch(productsAction.productDetailReset());
  }, [dispatch]);

  useEffect(() => {
    dispatch(cartAction.addCartReset());
  }, [dispatch]);

  //#region WATCHER
  useEffect(() => {
    if (
      loading === "buyNow" &&
      cartActionState === cartAction.addCartSuccess.type
    ) {
      history.push("/cart");
    }
  }, [cartActionState, history, loading]);
  //#endregion

  return (
    <Dashboard>
      <div className="bg-red-400 flex flex-row">
        <div className="rounded shadow py-4 bg-white mr-4 h-auto w-56 flex flex-col">
          <NavLink
            to="/user/me"
            className="my-1 py-4 font-light pl-4"
            activeClassName="bg-blue-600 text-white"
          >
            Profile
          </NavLink>
          <NavLink
            to="/order"
            className="my-1 py-4 font-light pl-4"
            activeClassName="bg-blue-600 text-white"
          >
            Order
          </NavLink>
          <NavLink
            to="/coupon"
            className="my-1 py-4 font-light pl-4"
            activeClassName="bg-blue-600 text-white"
          >
            Coupon
          </NavLink>
        </div>
        <div className="bg-green-400 flex-1">right</div>
      </div>
    </Dashboard>
  );
};

export default Profile;
