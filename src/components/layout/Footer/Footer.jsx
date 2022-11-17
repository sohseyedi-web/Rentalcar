import './Footer.scss'
import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container__right">
          <Link to="/">
            <RiGithubLine />
          </Link>
          <Link to="/">
            <RiLinkedinLine />
          </Link>
          <Link to="/">
            <RiTwitterLine />
          </Link>
        </div>
        <div className="footer-container__left">
          <a href="https://soheils.ir/">Sidrooweb</a> All Reserverd&#169;
        </div>
      </div>
    </footer>
  );
};

export default Footer;
