import { CartItem } from "../redux/slices/cartSlice";
import { calcTotalCounts } from "./calcTotalCount";

export const getCartFromLocalS = () => {
  const data = localStorage.getItem("cart");
  console.log(data);
  const items = data ? JSON.parse(data) : [];
  console.log(items);
  const totalPrice = calcTotalCounts(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};
