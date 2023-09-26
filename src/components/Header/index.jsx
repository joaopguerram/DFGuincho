import { useRef } from "react";
import Logo from "../../assets/logo.png";
import Button from "../ButtonFC";
import "./style.css";

const Header = () => {
  const sectionAbout = useRef(null);

  const scrollToSection = () => {
    window.scrollTo({
      top: sectionAbout.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <header className="header-site">
      <div className="div-logo">
        <img src={Logo} className="logo" alt="logotipo da marca DF Guincho" />
      </div>
      <nav className="navbar">
        <ul className="list">
          <li>
            <button onClick={scrollToSection}>Sobre</button>
          </li>
          <li>
            <button>Depoimentos</button>
          </li>
          <li>
            <button>Serviços</button>
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
