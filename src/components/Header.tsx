import React from "react";
//import "../style.scss";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { calcTotalCounts } from "../utils/calcTotalCounts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

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
      <Link to="/" className="link">
        <div className="header_logo">
          <div>
            <img src="assets/image/logo/logo_shau.png" />
          </div>
        </div>
        <div className="header_tittle">
          <h1>SHAU & HOT DOGS</h1>
          <p>Лучшие хот доги и шаурма</p>
        </div>
      </Link>
      <div className="container_cart">
        <div className="item-media">
          <span>
            <a href="https://vk.com">
              <FontAwesomeIcon icon={brands("vk")} />
            </a>
          </span>
          <span>
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={brands("twitter")} />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={brands("instagram")} />
            </a>
          </span>
        </div>
        {location.pathname == "/" ? (
          <div className="header_cart">
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice} ₽</span> |
              <FontAwesomeIcon
                icon={solid("cart-shopping")}
                className="cart_shopping"
              />
              <span>{calcTotalCounts(items)}</span>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Header;
