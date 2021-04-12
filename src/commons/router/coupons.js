import { MonetizationOn } from "@material-ui/icons";
import UserList from "../../modules/users/pages/UserList";

const CouponRouter = [
  {
    path: "/coupons",
    label: "Coupons",
    component: UserList,
    isMenu: true,
    icon: MonetizationOn,
  },
];

export default CouponRouter;
