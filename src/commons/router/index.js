import AuthRouter from "./auth";
import CartRouter from "./carts";
import MainRouter from "./main";
import OrderRouter from "./orders";
import ProductRouter from "./products";

const authenticatedRoutes = [
  // ...UserRouter,
  // ...CouponRouter,
  ...OrderRouter,
  ...CartRouter,
  ...MainRouter,
  ...ProductRouter,
];
const unAuthenticatedRoutes = [...AuthRouter];

export { authenticatedRoutes, unAuthenticatedRoutes };
