import React from "react";
import { Link } from "react-router-dom";

import style from "./EmptyCartBlock.module.scss";

const EmptyCartBlock: React.FC = () => {
  return (
    <div>
      <h1 className={style.container}>Корзина пуста</h1>
      <Link to="/">
        <span>Вернутся назад</span>
      </Link>
    </div>
  );
};
export default EmptyCartBlock;
