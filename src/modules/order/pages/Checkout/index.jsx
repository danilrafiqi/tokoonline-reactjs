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
    <div className="bg-white flex h-screen flex-row">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            backgroundColor: "#ffffff",
            width: "50%",
            margin: "0 auto",
          },
          overlay: {
            backgroundColor: "#0009",
          },
        }}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>

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
          <div className="flex-1 mr-8">
            <div>
              <div>Alamat Pengiriman</div>
              <div className="border border-l-0 border-r-0 py-4">
                <div>Muhamad Danil Rafiqi</div>
                <div>085788598869</div>
                <div>Rumah paling elit</div>
                <div>
                  Bandar Sakti, Kec. Abung Surakarta, Kab. Lampung Utara,34581
                </div>
              </div>

              <button
                onClick={openModal}
                className="mt-4 bg-blue-600 p-3 rounded-full hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center"
              >
                Pilih Alamat Lain
              </button>
              <hr className="border-4 border-gray-100 mt-4" />
            </div>
            {/* //#region LIST CART */}
            <div className="mt-8">
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

                <button className="bg-blue-600 py-3 w-full rounded-full hover:bg-blue-500 text-white shadow-2xl flex items-center justify-center mt-4">
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

export default Checkout;
