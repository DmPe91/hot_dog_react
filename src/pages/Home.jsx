import React from "react";
import axios from "axios";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setFilters } from "../redux/slices/filterSlice";
import { fetchFood } from "../redux/slices/foodSlice";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import Search, { arr } from "../components/Search";
import FoodBlock from "../components/FoodBlock";
import Skeleton from "../components/FoodBlock/Skeleton";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMounted = React.useRef(false);
  const { items, status } = useSelector((state) => state.foodSlice);
  const category = useSelector((state) => state.categorySlice.category);
  const selected = useSelector((state) => state.categorySlice.sort.sortSearch);

  const getFood = async () => {
    dispatch(
      fetchFood({
        category,
        selected,
        axios,
      })
    );

    window.scrollTo(0, 0);
  };
  const onChangeCategory = (i) => {
    dispatch(setCategory(i));
  };
  React.useEffect(() => {
    if (window.location.search) {
      const select = qs.parse(window.location.search.substring(1));
      const sort = arr.find((obj) => obj.sortSearch === select.selected);
      dispatch(setFilters({ ...select, sort }));
    }
  }, []);

  React.useEffect(() => {
    getFood();
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
        {status == "ERROR" ? (
          <div>Извините что то пошло не так</div>
        ) : (
          <div className="container_food">
            {" "}
            {status == "LOADING"
              ? [...new Array(38)].map((_, index) => <Skeleton key={index} />)
              : items.map((value) => (
                  <FoodBlock key={value.name} {...value} />
                ))}{" "}
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
