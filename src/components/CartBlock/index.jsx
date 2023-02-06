import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  minusProduct,
  removeProduct,
  clearProduct,
} from "../../redux/slices/cartSlice";
import EmptyCartBlock from "../EmptyCartBlock";
import style from "./Cart.module.scss";
const CartBlock = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cartSlice);
  const onClickPlus = (item) => {
    dispatch(addProduct(item));
  };
  const onClickMinus = (item) => {
    dispatch(minusProduct(item));
  };
  const onClickRemove = (item) => {
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

  return (
    <div className={style.cart}>
      <div className={style.cart_head}>
        <h1>Корзина</h1>
        <span onClick={onClickClear}>очистить корзину</span>
      </div>
      <div className={style.itemBlock}>
        {items.map((item) => (
          <div className={style.itemCart}>
            <img src={item.img} />
            <div className={style.itemName}>
              <h2>{item.name}</h2>
              <span>{item.type}</span>
            </div>
            <div className={style.itemCount}>
              <button onClick={() => onClickMinus(item)}>-</button>
              <span>{item.count}</span>
              <button onClick={() => onClickPlus(item)}>+</button>
            </div>
            <div className={style.itemPrice}>
              <span>{item.price * item.count} Р</span>
            </div>
            <div>
              <span onClick={() => onClickRemove(item)}>X</span>
            </div>
          </div>
        ))}
      </div>
      <div className={style.info_product}>
        <div>
          <p>
            Всего заказано <span>{items.length} шт</span>
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
