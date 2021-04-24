import { BackButton, Button } from "@components/atoms/index";
import Dashboard from "@components/templates/Dashboard/index";
import React from "react";
import Modal from "react-modal";
import { useHistory } from "react-router";

const Checkout = () => {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Dashboard>
      <div className="overflow-scroll pr-8">
        <BackButton className="my-8 " />

        <div className="flex flex-row justify-between">
          <div className="flex-1 mr-8">
            <div>
              <div>Alamat Pengiriman</div>
              <div className="border border-l-0 border-r-0 py-4 text-gray-500">
                <div className="font-bold text-gray-900">
                  Muhamad Danil Rafiqi
                </div>
                <div className="text-gray-700">085788598869</div>
                <div>Rumah paling elit</div>
                <div>
                  Bandar Sakti, Kec. Abung Surakarta, Kab. Lampung Utara,34581
                </div>
              </div>

              <Button className="my-4" onClick={openModal}>
                Pilih Alamat Lain
              </Button>
              <hr className="border-4 border-gray-100" />
            </div>
            {/* //#region LIST CART */}
            <div className="mt-8">
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
                        adipisicing elit. Id, doloremque repellat voluptas
                        laborum atque eaque quas vitae eveniet eligendi
                        delectus. Ex accusantium sequi dolorem. Ipsa quo fugiat
                        culpa hic porro?
                      </div>
                      <div className="font-bold text-xl text-gray-700 mb-4">
                        10.000.000,-
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
                  <div>Total Harga (3 barang)</div>
                  <div>Rp.8.850.000,-</div>
                </div>
                <hr className="my-4" />
                <div className="font-semibold flex flex-row justify-between">
                  <div>Total</div>
                  <div>Rp.8.850.000,-</div>
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
        <button className="w-full border-gray-300 border border-dashed p-5 rounded-xl font-semibold text-gray-500 mt-8">
          Tambah Alamat Baru
        </button>

        <div className="mt-8">
          {Array.from(Array(6).keys()).map((i) => {
            return (
              <div className="border text-gray-500 p-4 rounded-xl border-blue-300 my-2 flex flex-row justify-between items-center">
                <div>
                  <div className="font-bold text-gray-900">
                    Muhamad Danil Rafiqi
                  </div>
                  <div className="text-gray-700">085788598869</div>
                  <div>Rumah paling elit</div>
                  <div>
                    Bandar Sakti, Kec. Abung Surakarta, Kab. Lampung Utara,34581
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-blue-600 p-2 px-6 rounded-full hover:bg-blue-500 text-white flex items-center justify-center"
                >
                  Pilih
                </button>
              </div>
            );
          })}
        </div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </Dashboard>
  );
};

export default Checkout;
