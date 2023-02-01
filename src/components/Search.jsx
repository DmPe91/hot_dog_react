import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/filterSlice";
function Search() {
  const disptach = useDispatch();
  const search = useSelector((state) => state.categorySlice.search);
  const [isVisible, setVisible] = React.useState(false);
  const arr = [
    { name: "популярности", sortSearch: "rating" },
    { name: "алфавиту", sortSearch: "name" },
    { name: "цене", sortSearch: "price" },
  ];
  const onSelect = (obj) => {
    disptach(setSearch(obj));
    setVisible(false);
  };
  return (
    <div className="search">
      <p>
        сортировка по
        <span onClick={() => setVisible(!isVisible)}> {search.name}</span>
      </p>

      {isVisible && (
        <ul>
          {arr.map((obj, i) => (
            <li key={i} onClick={() => onSelect(obj)}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Search;
