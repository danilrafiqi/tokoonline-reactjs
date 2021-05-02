import { Button, Spinner } from "@components/atoms/index";
import Dashboard from "@components/templates/Dashboard/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCartAction } from "commons/redux/cart/selector";
import { cartAction } from "commons/redux/cart/slice";
import { productsAction } from "commons/redux/products/slice";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required(),
  description: yup.string().required(),
});
const Profile = () => {
  const history = useHistory();
  const [loading, setLoading] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartActionState = useCartAction();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFetchProductDetail = useCallback(
    (param) => {
      dispatch(productsAction.productDetailFetch(param));
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
      <div className="flex flex-row py-4">
        <div className="rounded-md shadow py-4 bg-white mr-4 h-auto w-56 flex flex-col">
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
        <div className="flex-1">
          <div className="flex flex-row rounded-md shadow bg-white p-4">
            <div className="w-64">
              <img src="" alt="" className="w-64 h-64" />
              <Button className="mt-4 w-full" type="button">
                {loading ? <Spinner className="mr-4" /> : "Simpan Alamat"}
              </Button>
            </div>
            <form
              className="flex flex-col w-full ml-8"
              onSubmit={handleSubmit(console.log)}
            >
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Input Email"
                  className="p-3 rounded-md bg-gray-2 border-none"
                  {...register("email")}
                  readOnly
                />
                {errors?.email && (
                  <div className="text-red-500">{errors?.email?.message}</div>
                )}
              </div>

              <div className="flex flex-col mt-6">
                <label htmlFor="name" className="text-gray-500">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Input name"
                  className="p-3 rounded-md bg-gray-2 border-none"
                  {...register("name")}
                />
                {errors?.name && (
                  <div className="text-red-500">{errors?.name?.message}</div>
                )}
              </div>

              <div className="flex flex-col mt-6">
                <label htmlFor="phone" className="text-gray-500">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="Input phone"
                  className="p-3 rounded-md bg-gray-2 border-none"
                  {...register("phone")}
                />
                {errors?.phone && (
                  <div className="text-red-500">{errors?.phone?.message}</div>
                )}
              </div>

              <Button className="mt-10" type="submit">
                {loading ? <Spinner className="mr-4" /> : "Simpan Alamat"}
              </Button>
            </form>
          </div>

          <form
            className="flex flex-col rounded-md shadow bg-white p-4 mt-4"
            onSubmit={handleSubmit(console.log)}
          >
            <div className="flex flex-col mt-6">
              <label htmlFor="name" className="text-gray-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                placeholder="Input name"
                className="p-3 rounded-md bg-gray-2 border-none"
                {...register("name")}
              />
              {errors?.name && (
                <div className="text-red-500">{errors?.name?.message}</div>
              )}
            </div>

            <div className="flex flex-col mt-6">
              <label htmlFor="phone" className="text-gray-500">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="phone"
                placeholder="Input phone"
                className="p-3 rounded-md bg-gray-2 border-none"
                {...register("phone")}
              />
              {errors?.phone && (
                <div className="text-red-500">{errors?.phone?.message}</div>
              )}
            </div>

            <Button className="mt-10" type="submit">
              {loading ? <Spinner className="mr-4" /> : "Simpan Alamat"}
            </Button>
          </form>
        </div>
      </div>
    </Dashboard>
  );
};

export default Profile;
