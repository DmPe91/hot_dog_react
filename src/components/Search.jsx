import React from "react";
function Search() {
  const [isVisible, setVisible] = React.useState(false);
  const [selected, setSelect] = React.useState(0);
  const arr = ["популярности", "алфавиту", "цене"];
  const onSelect = (i) => {
    setSelect(i);
    setVisible(false);
  };
  return (
    <div className="search">
      <p>
        сортировка по
        <span onClick={() => setVisible(!isVisible)}> {arr[selected]}</span>
      </p>

      {isVisible && (
        <ul>
          {arr.map((name, i) => (
            <li key={i} onClick={() => onSelect(i)}>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Search;
