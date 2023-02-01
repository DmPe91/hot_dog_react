import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Search from "../components/Search";
import FoodBlock from "../components/FoodBlock";
import Skeleton from "../components/FoodBlock/Skeleton";

const Home = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categorySlice.category);
  const [items, setItems] = React.useState([]);
  const selected = useSelector(
    (state) => state.categorySlice.search.sortSearch
  );
  const [isLoading, setIsLoading] = React.useState(false);

  const onChangeCategory = (i) => {
    dispatch(setCategory(i));
  };
  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63d2a7e61780fd6ab9ca3aed.mockapi.io/items?${
        category > 0 ? `category=${category}` : ""
      }&sortBy=${selected}&order=desc`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [category, selected]);
  return (
    <>
      <div class="menu">
        <Categories
          active={category}
          onClickCategory={(i) => onChangeCategory(i)}
        />
        <Search />
      </div>
      <div class="main">
        {isLoading
          ? [...new Array(38)].map((_, index) => <Skeleton key={index} />)
          : items.map((value) => <FoodBlock key={value.name} {...value} />)}
      </div>
    </>
  );
};
export default Home;
