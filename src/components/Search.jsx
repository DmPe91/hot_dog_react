import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/filterSlice";
export const arr = [
  { name: "популярности", sortSearch: "rating" },
  { name: "алфавиту", sortSearch: "name" },
  { name: "цене", sortSearch: "price" },
];
function Search() {
  const disptach = useDispatch();
  const sort = useSelector((state) => state.categorySlice.sort);
  const [isVisible, setVisible] = React.useState(false);
  const sortRef = React.useRef();
  const onSelect = (obj) => {
    disptach(setSearch(obj));
    setVisible(false);
  };
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      let path = event.composedPath().includes(sortRef.current);
      if (!path) {
        setVisible(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div ref={sortRef} className="search">
      <p>
        сортировка по
        <span onClick={() => setVisible(!isVisible)}> {sort.name}</span>
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
