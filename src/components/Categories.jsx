import React from "react";
function Categories() {
  const [activeIndex, setActive] = React.useState(0);
  const onClickActive = (index) => {
    setActive(index);
  };
  const categories = [
    "хот доги",
    "шаурма",
    "салаты",
    "гарниры",
    "десерты",
    "напитки",
    "shau box",
  ];
  return (
    <div className="categories">
      <nav>
        <ul>
          {categories.map((value, index) => (
            <li
              key={value}
              onClick={() => onClickActive(index)}
              className={activeIndex === index ? "active" : ""}
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
