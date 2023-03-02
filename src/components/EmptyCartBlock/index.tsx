import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import style from "./EmptyCartBlock.module.scss";

const EmptyCartBlock: React.FC = () => {
  return (
    <div className={style.container}>
      <FontAwesomeIcon icon={solid("cart-shopping")} className={style.cart} />
      <h1 className={style.container}>Корзина пуста</h1>
      <Link to="/">
        <div>
          <span>Вернутся назад</span>
        </div>
      </Link>
    </div>
  );
};
export default EmptyCartBlock;
