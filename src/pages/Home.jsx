import React from "react";

import Categories from "../components/Categories";
import Search from "../components/Search";
import FoodBlock from "../components/FoodBlock";
import Skeleton from "../components/FoodBlock/Skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://63d2a7e61780fd6ab9ca3aed.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div class="menu">
        <Categories />
        <Search />
      </div>
      <div class="main">
        {isLoading
          ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
          : items.map((value) => <FoodBlock key={value.name} {...value} />)}
      </div>
    </>
  );
};
export default Home;
