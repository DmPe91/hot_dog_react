import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slices/cartSlice";

function FoodBlock(props) {
  const [foodCount, setCount] = React.useState(0);
  const [sizeFood, setSize] = React.useState(0);
  const dispatch = useDispatch();
  const typeSize = ["джуниор", "стандарт"];
  const onAdd = () => {
    const item = {
      ...props,
      count: 0,
      type: typeSize[sizeFood],
    };
    setCount(foodCount + 1);
    dispatch(addProduct(item));
  };
  return (
    <div className="food_block">
      <div className="container_image">
        <img src={props.img} alt={props.name} />
      </div>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div className="container_text">
        <p>{props.text}</p>
      </div>
      <div className="option_size">
        <h3>Размер порции</h3>
        <div className="portion">
          <ul>
            {props.size.map((index) => (
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
          <p>{props.price} ₽</p>
        </div>
        <button onClick={onAdd}>
          Добавить
          <span>{foodCount > 0 ? foodCount : ""}</span>
        </button>
      </div>
    </div>
  );
}
export default FoodBlock;
