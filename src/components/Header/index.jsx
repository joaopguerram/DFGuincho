import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import Button from "../ButtonFC";
import "./style.css";

const Header = () => {
  return (
    <header className="header-site">
      <div className="div-logo">
        <img src={Logo} className="logo" alt="logotipo da marca DF Guincho" />
      </div>
      <nav className="navbar">
        <ul className="list">
          <li>
            <Link
              to="sectionAbout"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="containerCard"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Depoimentos
            </Link>
          </li>
          <li>
            <Link
              to="containerServices"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Serviços
            </Link>
          </li>
        </ul>
        <div className="btn-container">
          <Button />
        </div>
      </nav>
    </header>
  );
};

export default Header;
