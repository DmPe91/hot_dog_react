import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";

type FoodProps = {
  img: string;
  name: string;
  price: number | string;
  rating: number;
  size: number[];
  text: string;
};
const FoodBlock: React.FC<FoodProps> = ({
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
  const typeSize = ["джуниор", "стандарт"];
  const onAdd = () => {
    const item = {
      img,
      name,
      text,
      price,
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
      <div className="container_text">
        <p>{text}</p>
      </div>
      <div className="option_size">
        <h3>Размер порции</h3>
        <div className="portion">
          <ul>
            {size.map((index) => (
              <li
                key={index}
                onClick={() => setSize(index)}
                className={sizeFood === index ? "active_size" : " "}
              >
                {typeSize[index]}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="price_cart">
        <div>
          <p>{price} ₽</p>
        </div>
        <button onClick={onAdd}>
          Добавить
          <span>{foodCount > 0 ? foodCount : ""}</span>
        </button>
      </div>
    </div>
  );
};
export default FoodBlock;
