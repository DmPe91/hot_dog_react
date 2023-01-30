import "../style.scss";

import { Link } from "react-router-dom";
function Header() {
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
      <div className="header_cart">
        <Link to="/cart" className="button button--cart">
          <span>520 ₽</span>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  );
}
export default Header;
