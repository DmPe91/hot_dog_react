import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Filter, setSearch } from "../redux/slices/filterSlice";
import { RootState } from "../redux/store";

type SortArr = {
  name: string;
  sortSearch: "rating" | "name" | "price";
};
export const arr: SortArr[] = [
  { name: "популярности", sortSearch: "rating" },
  { name: "алфавиту", sortSearch: "name" },
  { name: "цене", sortSearch: "price" },
];
function Search() {
  const disptach = useDispatch();
  const sort = useSelector((state: RootState) => state.categorySlice.sort);
  const [isVisible, setVisible] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);
  const onSelect = (obj: SortArr) => {
    disptach(setSearch(obj));
    setVisible(false);
  };
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        path: Node[];
      };
      if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
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
