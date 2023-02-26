import { CartItem } from "../redux/slices/cartSlice";

export const calcTotalCounts = (items: CartItem[]) => {
  return items.reduce((sum: number, item: any) => sum + item.count, 0);
};
