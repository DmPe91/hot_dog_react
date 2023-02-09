import React from "react";
type CategoryProps = {
  active: number;
  onClickCategory: (i: number) => void;
};
const Categories: React.FC<CategoryProps> = ({ onClickCategory, active }) => {
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
              onClick={() => onClickCategory(index)}
              className={active === index ? "active" : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Categories;
