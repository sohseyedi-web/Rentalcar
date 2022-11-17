import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/jeep.png";

const Navbar = () => {
  return (
    <nav className="header">
      <Link to="/" className="header-logo">
        <img src={Logo} alt="jeep" />
      </Link>
      <ul className="header-nav active-menu">
        <li className="header-nav__item">
          <Link to="/">خانه</Link>
        </li>
        <li className="header-nav__item">
          <Link to="/">خدمات</Link>
        </li>
        <li className="header-nav__item">
          <Link to="/store">نمایشگاه</Link>
        </li>
        <li className="header-nav__item">
          <Link to="/">درباره ما</Link>
        </li>
      </ul>
      <div className="header-menu" id="menu">
        <span className="bx bx-menu"></span>
      </div>
      <div className="header-auth">
        <Link to="/register" className="header-auth__register">
          ثبت درخواست
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
