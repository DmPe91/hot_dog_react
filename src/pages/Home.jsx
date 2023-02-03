import React from "react";
import axios from "axios";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setFilters } from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import Search, { arr } from "../components/Search";
import FoodBlock from "../components/FoodBlock";
import Skeleton from "../components/FoodBlock/Skeleton";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const category = useSelector((state) => state.categorySlice.category);
  const [items, setItems] = React.useState([]);
  const selected = useSelector((state) => state.categorySlice.sort.sortSearch);
  const [isLoading, setIsLoading] = React.useState(false);
  const fetchFood = () => {
    setIsLoading(true);
    axios
      .get(
        `https://63d2a7e61780fd6ab9ca3aed.mockapi.io/items?${
          category > 0 ? `category=${category}` : ""
        }&sortBy=${selected}&order=desc`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };
  const onChangeCategory = (i) => {
    dispatch(setCategory(i));
  };
  React.useEffect(() => {
    if (window.location.search) {
      const select = qs.parse(window.location.search.substring(1));
      const sort = arr.find((obj) => obj.sortSearch === select.selected);
      dispatch(setFilters({ ...select, sort }));
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      fetchFood();
    }
    isSearch.current = false;
  }, [category, selected]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category,
        selected,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [category, selected]);
  return (
    <>
      <div className="menu">
        <Categories
          active={category}
          onClickCategory={(i) => onChangeCategory(i)}
        />
        <Search />
      </div>
      <div className="main">
        {isLoading
          ? [...new Array(38)].map((_, index) => <Skeleton key={index} />)
          : items.map((value) => <FoodBlock key={value.name} {...value} />)}
      </div>
    </>
  );
};
export default Home;
