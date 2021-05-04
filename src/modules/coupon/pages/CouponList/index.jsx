import { SideBar } from "@components/organisms/index";
import Dashboard from "@components/templates/Dashboard/index";
import { useRetrieveCouponListData } from "commons/redux/coupon/selector";
import { couponAction } from "commons/redux/coupon/slice";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const CouponList = () => {
  const dispatch = useDispatch();

  const couponListData = useRetrieveCouponListData();

  const handleRetrieveCoupon = useCallback(() => {
    dispatch(couponAction.retrieveCouponListExecute());
  }, [dispatch]);

  useEffect(() => {
    handleRetrieveCoupon();
  }, [handleRetrieveCoupon]);

  return (
    <Dashboard>
      <div className="flex flex-row py-4">
        <div>
          <SideBar />
        </div>
        {console.log("couponListData", couponListData)}
        <div className="flex-1">asas</div>
      </div>
    </Dashboard>
  );
};

export default CouponList;
