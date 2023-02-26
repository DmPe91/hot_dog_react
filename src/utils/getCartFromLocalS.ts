import { CartItem } from "../redux/slices/cartSlice";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLocalS = () => {
  const data = localStorage.getItem("cart");

  const items = data ? JSON.parse(data) : [];

  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};
