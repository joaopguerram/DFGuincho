import Logo from "../../assets/logo.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header-site">
      <div className="div-logo">
        <img src={Logo} className="logo" alt="logotipo da marca DF Guincho" />
      </div>
      <nav className="navbar">
        <ul className="list">
          <li>Sobre</li>
          <li>Depoimentos</li>
          <li>Serviços</li>
        </ul>
        <div className="btn-container">
          <button className="btn-faleConosco">Fale Conosco</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
