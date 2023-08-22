import { Navigate } from "react-router-dom";
import CartPage from "../CartPage/CartPage";
import CheckOutPage from "../CheckoutPage/CheckOutPage";
import DetailPage from "../DetailPage/DetailPage";
import HomePage from "../HomePage/HomePage";
import SignUp from "../LoginPage/loginpage";
import LoginPage from "../SignUpPage/signupPage";

import ShopPage from "../ShopPage/shopPage";
//Du lieu cac route va component tuong ung
const RoutesData = [
  { path: "/home", component: HomePage },
  { path: "/cart", component: CartPage },
  { path: "/checkout", component: CheckOutPage },
  { path: "/detail", component: DetailPage },
  { path: "/login", component: SignUp },
  { path: "/register", component: LoginPage },
  { path: "/shop", component: ShopPage },
];
export default RoutesData;
