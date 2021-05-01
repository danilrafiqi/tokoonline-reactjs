import { BackButton, Button, Spinner } from "@components/atoms/index";
import Dashboard from "@components/templates/Dashboard/index";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useAddressAction,
  useAddressList,
  useCreateAddressLoading,
} from "commons/redux/address/selector";
import { addressAction } from "commons/redux/address/slice";
import { useCartsSelected } from "commons/redux/cart/selector";
import { cartAction } from "commons/redux/cart/slice";
import { currencyFormat } from "commons/utils/index";
import sumBy from "lodash/sumBy";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required(),
  description: yup.string().required(),
});

const Checkout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalAddressIsOpen, setModalAddressIsOpen] = React.useState(false);
  const [addressSelected, setAddressSelected] = React.useState(0);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const openAddressModal = () => {
    setModalAddressIsOpen(true);
  };
  const closeAddressModal = () => {
    setModalAddressIsOpen(false);
  };

  const cartList = useCartsSelected();
  const addressList = useAddressList();
  const loading = useCreateAddressLoading();
  const addressActionState = useAddressAction();

  const handleFetchCarts = useCallback(() => {
    dispatch(cartAction.cartsFetch());
  }, [dispatch]);

  const handleFetchAddress = useCallback(() => {
    dispatch(addressAction.retrieveAddressFetch());
  }, [dispatch]);

  const handleCreateAddress = useCallback(
    (payload) => dispatch(addressAction.createAddressFetch(payload)),
    [dispatch]
  );

  useEffect(() => {
    handleFetchCarts();
    handleFetchAddress();
  }, []);

  //#region WATCHER
  useEffect(() => {
    if (addressActionState === addressAction.createAddressSuccess.type) {
      handleFetchAddress();
      closeAddressModal();
    }
  }, [addressActionState]);
  //#endregion

  const totalBarang = sumBy(cartList, (data) => {
    return data.quantity;
  });

  const totalPrice = currencyFormat(
    sumBy(cartList, (data) => {
      return data.product.price * data.quantity;
    })
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Dashboard>
      <div className="overflow-scroll pr-8">
        <BackButton />

        <div className="flex flex-row justify-between mt-8">
          <div className="flex-1 mr-8">
            <div>
              <div>Alamat Pengiriman</div>
              {addressList.length > 0 && (
                <div className="border border-l-0 border-r-0 py-4 text-gray-500">
                  <div className="font-bold text-gray-900">
                    {addressList[addressSelected].name}
                  </div>
                  <div className="text-gray-700">
                    {addressList[addressSelected].phone}
                  </div>
                  <div>{addressList[addressSelected].description}</div>
                  <div>{addressList[addressSelected].address}</div>
                </div>
              )}

              <Button className="my-4" onClick={openModal}>
                Pilih Alamat Lain
              </Button>
              <hr className="border-4 border-gray-100" />
            </div>
            {/* //#region LIST CART */}
            <div className="mt-8">
              {cartList.map((data, i) => {
                return (
                  <div className="flex flex-row" key={i}>
                    <div
                      onClick={() => {
                        history.push("/product/" + data.id);
                      }}
                      key={i}
                      className="w-32 h-32 mb-4"
                    >
                      <img
                        className="rounded-2xl "
                        src={data.product.image}
                      ></img>
                    </div>

                    <div className="ml-8 flex-1 flex flex-col justify-start items-start">
                      <div className="text-xl text-gray-500 line-clamp-2">
                        {data.product.name}
                      </div>
                      <div className="font-bold text-xl text-gray-700">
                        Rp.{currencyFormat(data.product.price)},-
                      </div>
                      <div className="font-light text-gray-700 mb-4">
                        x {data.quantity}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* //#endregion */}
          </div>

          {/* //#region TOTAL */}
          <div>
            <div className="border rounded-xl w-80 p-4">
              <input
                className="mb-4 w-full rounded-xl border border-gray-300"
                type="text"
                placeholder="Coupon"
                name=""
                id=""
              />
              <hr className="border-4 -mx-4 border-gray-100" />
              <div className="mt-4">
                <div className="font-semibold mb-4">Ringkasan belanja</div>
                <div className="text-gray-500 flex flex-row text-sm justify-between">
                  <div>Total Harga ({totalBarang} barang)</div>
                  <div>
                    Rp.{" "}
                    {currencyFormat(
                      sumBy(cartList, (data) => {
                        return data.product.price * data.quantity;
                      })
                    )}
                    ,-
                  </div>
                </div>
                <hr className="my-4" />
                <div className="font-semibold flex flex-row justify-between">
                  <div>Total</div>
                  <div>Rp.{totalPrice},-</div>
                </div>

                <Button className="w-full mt-4" onClick={openModal}>
                  Beli
                </Button>
              </div>
            </div>
          </div>
          {/* //#endregion */}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            backgroundColor: "#ffffff",
            width: "50%",
            margin: "0 auto",
            borderRadius: 10,
            padding: 40,
          },
          overlay: {
            backgroundColor: "#0009",
          },
        }}
        contentLabel="Example Modal"
      >
        <div className="font-semibold text-2xl text-center">
          Pilih Alamat Pengiriman
        </div>
        <button
          className="w-full border-gray-300 border border-dashed p-5 rounded-xl font-semibold text-gray-500 mt-8"
          onClick={() => {
            openAddressModal();
            closeModal();
          }}
        >
          Tambah Alamat Baru
        </button>

        <div className="mt-8">
          {addressList.map((data, i) => {
            return (
              <div
                key={i}
                className="border text-gray-500 p-4 rounded-xl border-blue-300 my-2 flex flex-row justify-between items-center"
              >
                <div>
                  <div className="font-bold text-gray-900">{data.name}</div>
                  <div className="text-gray-700">{data.phone}</div>
                  <div>{data.description}</div>
                  <div>{data.address}</div>
                </div>
                <button
                  onClick={() => {
                    closeModal();
                    setAddressSelected(i);
                  }}
                  className="bg-blue-600 p-2 px-6 rounded-md hover:bg-blue-500 text-white flex items-center justify-center"
                >
                  Pilih
                </button>
              </div>
            );
          })}
        </div>
      </Modal>

      <Modal
        isOpen={modalAddressIsOpen}
        onRequestClose={closeAddressModal}
        style={{
          content: {
            backgroundColor: "#ffffff",
            width: "50%",
            margin: "0 auto",
            borderRadius: 10,
            padding: 40,
          },
          overlay: {
            backgroundColor: "#0009",
          },
        }}
        contentLabel="Example Modal"
      >
        <div className="font-semibold text-2xl text-center">
          Tambah Alamat Baru
        </div>

        <form
          className="flex flex-col mt-8 w-full"
          onSubmit={handleSubmit(handleCreateAddress)}
        >
          <div className="flex flex-row w-full">
            <input
              name="name"
              type="name"
              placeholder="Input name"
              className="flex-1 p-3 rounded-md bg-gray-2 border-none mt-6 mr-2"
              {...register("name")}
            />
            {errors?.name && (
              <div className="text-red-500">{errors?.name?.message}</div>
            )}

            <input
              name="phone"
              type="phone"
              placeholder="Input phone"
              className="flex-1 p-3 rounded-md bg-gray-2 border-none mt-6 ml-2"
              {...register("phone")}
            />
            {errors?.phone && (
              <div className="text-red-500">{errors?.phone?.message}</div>
            )}
          </div>

          <input
            name="address"
            type="text"
            placeholder="Input Address"
            className="p-3 rounded-md bg-gray-2 border-none mt-6"
            {...register("address")}
          />
          {errors?.address && (
            <div className="text-red-500">{errors?.address?.message}</div>
          )}

          <textarea
            name="description"
            type="description"
            placeholder="Input description"
            className="h-40 p-3 rounded-md bg-gray-2 border-none mt-6"
            {...register("description")}
          />
          {errors?.description && (
            <div className="text-red-500">{errors?.description?.message}</div>
          )}

          <Button className="mt-10" onClick={openModal} type="submit">
            {loading ? <Spinner className="mr-4" /> : "Simpan Alamat"}
          </Button>
        </form>
      </Modal>
    </Dashboard>
  );
};

export default Checkout;
