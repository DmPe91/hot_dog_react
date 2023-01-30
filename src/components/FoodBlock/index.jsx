import React from "react";

function FoodBlock(props) {
  const [foodCount, setCount] = React.useState(0);
  const [sizeFood, setSize] = React.useState(0);
  const typeSize = ["джуниор", "стандарт"];
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
        <button onClick={() => setCount(foodCount + 1)}>
          Добавить
          <span>{foodCount}</span>
        </button>
      </div>
    </div>
  );
}
export default FoodBlock;
