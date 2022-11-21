import "./Navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/jeep.png";
import { RiFingerprint2Line } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="header">
      <Link to="/" className="header-logo">
        <img src={Logo} alt="jeep" />
      </Link>
      <ul className={active ? "header-nav active-nav" : "header-nav"}>
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
      <div className="header-menu" onClick={() => setActive(!active)}>
        <span>
          <RiFingerprint2Line />
        </span>
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
