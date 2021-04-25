import { BackButton, Button, Spinner } from "@components/atoms/index";
import CartButton from "@components/moleculs/CartButton/index";
import Dashboard from "@components/templates/Dashboard/index";
import { useAddCartLoading } from "commons/redux/cart/selector";
import { cartAction } from "commons/redux/cart/slice";
import { useProductDetail } from "commons/redux/products/selector";
import { productsAction } from "commons/redux/products/slice";
import { currencyFormat } from "commons/utils/index";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";

const ProductDetail = () => {
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const productDetail = useProductDetail();
  const addCartLoading = useAddCartLoading();

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

  return (
    <Dashboard>
      <div className="overflow-scroll pr-8">
        <BackButton className="" />
        {/* //#region PRODUCTS */}
        {productDetail && (
          <div className="mt-8 flex flex-row">
            <div className="w-96">
              <img
                className="rounded-2xl w-96 h-72 object-cover"
                src={productDetail.image}
              ></img>

              <div className="mt-4 flex flex-row justify-between">
                {Array.from(Array(3).keys()).map((i) => {
                  return (
                    <img
                      key={i}
                      className="rounded-2xl w-28"
                      src="https://placeimg.com/200/200/any"
                    ></img>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 ml-8">
              <div className="font-bold text-4xl text-gray-700">
                {productDetail.name}
              </div>
              <div className="font-bold text-xl text-gray-700 my-4">
                Rp.{currencyFormat(productDetail.price)}
              </div>

              <div className="font-bold text-xl text-gray-700">
                <span>Stock: </span>
                <span className="font-normal">{productDetail.stock}</span>
              </div>
              <div className="text-gray-500 my-4">
                {productDetail.description}
              </div>

              <div className="flex flex-row mt-10">
                <CartButton total={quantity} onClick={setQuantity} />
                <Button
                  className="ml-6 mr-0.5"
                  onClick={() => {
                    handleAddCart({
                      quantity: quantity,
                      product_id: id,
                    });
                  }}
                >
                  {addCartLoading ? <Spinner /> : "Add to Cart"}
                </Button>
                <Button onClick={() => history.push("/cart")}>Buy Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* //#endregion */}
    </Dashboard>
  );
};

export default ProductDetail;
