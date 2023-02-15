import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  minusProduct,
  removeProduct,
  clearProduct,
  CartItem,
} from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";
import { calcTotalCounts } from "../../utils/calcTotalCount";
import EmptyCartBlock from "../EmptyCartBlock";
import style from "./Cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
const CartBlock = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(
    (state: RootState) => state.cartSlice
  );
  const onClickPlus = (item: CartItem) => {
    dispatch(addProduct(item));
  };
  const onClickMinus = (item: CartItem) => {
    dispatch(minusProduct(item));
  };
  const onClickRemove = (item: CartItem) => {
    if (window.confirm("Ты хочешь удалить выбранный продукт?")) {
      dispatch(removeProduct(item));
    }
  };
  const onClickClear = () => {
    if (window.confirm("Удалить все выбранные продукты?")) {
      dispatch(clearProduct());
    }
  };
  if (!totalPrice) {
    return <EmptyCartBlock />;
  }
  console.log(items);
  return (
    <div className={style.cart}>
      <div className={style.cart_head}>
        <h1>Корзина</h1>
        <span onClick={onClickClear}>очистить корзину</span>
      </div>
      <div className={style.itemBlock}>
        {items.map((item: any, index: any) => (
          <div className={style.itemCart} key={index}>
            <img src={item.img} />
            <div className={style.itemName}>
              <h2>{item.name}</h2>
              <span>{item.type}</span>
            </div>
            <div className={style.itemCount}>
              <button
                onClick={() => onClickMinus(item)}
                disabled={item.count === 1}
              >
                <FontAwesomeIcon icon={solid("minus")} />
              </button>
              <span>{item.count}</span>
              <button onClick={() => onClickPlus(item)}>
                <FontAwesomeIcon icon={solid("plus")} />
              </button>
            </div>
            <div className={style.itemPrice}>
              <span>{item.price * item.count} Р</span>
            </div>
            <div>
              <span onClick={() => onClickRemove(item)}>
                <FontAwesomeIcon icon={solid("circle-xmark")} />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className={style.info_product}>
        <div>
          <p>
            Всего заказано <span>{calcTotalCounts(items)} шт</span>
          </p>
        </div>
        <div>
          <p>
            Сумма заказа <span>{totalPrice}</span>
          </p>
        </div>
      </div>
      <div className={style.cart_button}>
        <button className={style.button_return}>Вернуться назад</button>
        <button className={style.button_pay}>Оплатить сейчас</button>
      </div>
    </div>
  );
};
export default CartBlock;
