import React from "react";
function Categories(props) {
  const categories = [
    "все",
    "хот доги",
    "шаурма",
    "shau box",
    "гарниры",
    "салаты",
    "десерты",
  ];
  return (
    <div className="categories">
      <nav>
        <ul>
          {categories.map((value, index) => (
            <li
              key={value}
              onClick={() => props.onClickCategory(index)}
              className={props.active === index ? "active" : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Categories;
