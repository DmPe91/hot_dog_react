import React from "react";
import qs from "qs";
import { useSelector } from "react-redux";
import { setCategory, setFilters } from "../redux/slices/filterSlice";
import { FilterSliceState } from "../redux/slices/filterSlice";
import { fetchFood } from "../redux/slices/foodSlice";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import Search, { arr } from "../components/Search";
import FoodBlock from "../components/FoodBlock";
import Skeleton from "../components/FoodBlock/Skeleton";
import { RootState, useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);
  const { items, status } = useSelector((state: RootState) => state.foodSlice);
  const category = useSelector(
    (state: RootState) => state.categorySlice.category
  );
  const selected = useSelector(
    (state: RootState) => state.categorySlice.sort.sortSearch
  );
  ///const sort = useSelector((state: RootState) => state.categorySlice.sort);

  const getFood = async () => {
    dispatch(
      fetchFood({
        category,
        selected,
      })
    );

    window.scrollTo(0, 0);
  };
  const onChangeCategory = (i: number) => {
    dispatch(setCategory(i));
  };
  React.useEffect(() => {
    if (window.location.search) {
      const select = qs.parse(window.location.search.substring(1));
      const sort = arr.find((obj) => obj.sortSearch === select.selected);
      const params = {
        select,
        sort,
      };
      dispatch(setFilters({ ...params } as unknown as FilterSliceState));
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
          onClickCategory={(i: number) => onChangeCategory(i)}
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
              : items.map((value: any) => (
                  <FoodBlock key={value.name} {...value} />
                ))}{" "}
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
