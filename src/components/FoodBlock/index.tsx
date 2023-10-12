import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, CartItem } from "../../redux/slices/cartSlice";
import { Food } from "../../redux/slices/foodSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

type FoodProps = {
  category: number;
  img: string;
  name: string;
  price: number[];
  rating: number;
  size: number[];
  text: string;
};
const FoodBlock: React.FC<FoodProps> = ({
  category,
  img,
  name,
  text,
  price,
  rating,
  size,
}) => {
  const [foodCount, setCount] = React.useState(0);
  const [sizeFood, setSize] = React.useState(0);
  const dispatch = useDispatch();
  const typeSize = ["стандартная", "большая"];
  const onAdd = () => {
    const item: Food = {
      category,
      img,
      name,
      text,
      price: price[sizeFood],
      rating,
      size,
      count: 0,
      type: typeSize[sizeFood],
    };
    setCount(foodCount + 1);
    dispatch(addProduct(item));
  };
  return (
    <div className="food_block">
      <div className="container_image">
        <img src={img} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div className={category == 1 ? "container_text min" : "container_text"}>
        <p>{text}</p>
      </div>
      {size.length > 1 ? (
        <div className="option_size">
          <h3>Размер порции:</h3>
          <div className="portion">
            <ul>
              {size.map((index) => (
                <li
                  key={index}
                  onClick={() => setSize(index)}
                  className={sizeFood === index ? "active_size" : " "}
                >
                  {sizeFood === index ? (
                    <FontAwesomeIcon icon={solid("check")} className="check" />
                  ) : (
                    ""
                  )}
                  {typeSize[index]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        " "
      )}
      <div className="price_cart">
        <div>
          <p>{price[sizeFood]} ₽</p>
        </div>
        {foodCount > 0 ? (
          <div>
            <button onClick={onAdd}>
              <span>
                {foodCount} шт <FontAwesomeIcon icon={solid("plus")} />
              </span>
            </button>
          </div>
        ) : (
          <button onClick={onAdd}>
            <span>Добавить</span>
          </button>
        )}
      </div>
    </div>
  );
};
export default FoodBlock;
