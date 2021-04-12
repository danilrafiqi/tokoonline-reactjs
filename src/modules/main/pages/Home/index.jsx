import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  const settings = {
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
  };
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
        {/* //#region Carousel */}
        {/* <div className="w-full">
          <Slider {...settings} className="w-full">
            {Array.from(Array(12).keys()).map((i) => {
              return (
                <img
                  key={i}
                  className="p-4 object-cover h-64 rounded-3xl"
                  src="https://source.unsplash.com/1600x900/?nature,water"
                />
              );
            })}
          </Slider>
        </div> */}
        {/* //#region */}

        {/* //#region CATEGORIES*/}
        <div className="mt-8">
          <div className="flex flex-row justify-between">
            <div className="font-bold text-2xl">Explore popular categories</div>
            <button className="bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-300 text-gray-500 shadow-2xl flex items-center justify-center">
              See all
            </button>
          </div>

          <div className="flex flex-row justify-between -mx-2 mt-4">
            {Array.from(Array(4).keys()).map((i) => {
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-red-50 px-10 w-full mx-2 flex flex-col justify-center items-center py-4"
                >
                  <img
                    className="rounded-2xl"
                    src="https://placeimg.com/200/100/any"
                  ></img>
                  <div className="mt-4">Halo dunia</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* //#endregion */}

        {/* //#region PRODUCTS */}
        <div className="mt-12">
          <div className="flex flex-row justify-between">
            <div className="font-bold text-2xl">All Products</div>
            <button className="bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-300 text-gray-500 shadow-2xl flex items-center justify-center">
              See all
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-4">
            {Array.from(Array(8).keys()).map((i) => {
              return (
                <div
                  onClick={() => {
                    console.log("asdf");
                    history.push("/product/" + i);
                  }}
                  key={i}
                  className="rounded-2xl bg-purple-50 px-10 w-full flex flex-col justify-center items-center py-8 "
                >
                  <img
                    className="rounded-2xl"
                    src="https://placeimg.com/200/200/any"
                  ></img>
                  <div className="mt-4">Halo dunia</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* //#endregion */}
        {/* //#region PAGINATION */}
        <div className="flex flex-row justify-center py-12">
          <button className="bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-300 text-gray-500 shadow-2xl flex items-center justify-center">
            Back
          </button>
          <button className="bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-300 text-gray-500 shadow-2xl flex items-center justify-center">
            1
          </button>
          <button className="bg-gray-400 py-2 px-4 rounded-full hover:bg-gray-300 text-white shadow-2xl flex items-center justify-center">
            2
          </button>
          <button className="bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-300 text-gray-500 shadow-2xl flex items-center justify-center">
            3
          </button>
          <button className="bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-300 text-gray-500 shadow-2xl flex items-center justify-center">
            Next
          </button>
        </div>
        {/* //#endregion */}
      </div>
    </div>
  );
};

export default Home;
