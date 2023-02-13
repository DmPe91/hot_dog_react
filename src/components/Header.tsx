import React from "react";
import "../style.scss";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { calcTotalCounts } from "../utils/calcTotalCount";

function Header() {
  const { items, totalPrice } = useSelector(
    (state: RootState) => state.cartSlice
  );
  const isMounted = React.useRef(false);
  const location = useLocation();
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <div>
            <img src="assets/image/logo/logo_shau.png" />
          </div>
        </Link>
        <div>
          <h1>SHAU & HOT DOGS</h1>
          <p>Лучшие хот доги и шаурма</p>
        </div>
      </div>
      {location.pathname !== "/cart" && (
        <div className="header_cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>{calcTotalCounts(items)}</span>
          </Link>
        </div>
      )}
    </div>
  );
}
export default Header;
