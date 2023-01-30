import React from "react";

import style from "./EmptyCartBlock.module.scss";
const EmptyCartBlock = () => {
  return (
    <div>
      <h1 className={style.container}>Корзина пуста</h1>
    </div>
  );
};
export default EmptyCartBlock;
