import Truck from "../../assets/truck.png";
import "./style.css";

const About = () => {
  return (
    <main className="sectionAbout">
      <div className="containerTruck">
        <img
          src={Truck}
          alt="Caminhao guincho com uma caminhonete Dodge Ram em cima da plataforma"
          className="imgTruck"
        />
      </div>
      <div className="description">
        <h1>Guincho 24 horas em todo DF e Brasil</h1>
        <p>
          Procurando assistência confiável e rápida? Você está no lugar certo!
          Somos uma equipe de especialistas em serviços de guinchos, auto
          socorro e resgates dedicados a garantir que você esteja sempre seguro
          e em movimento, não importa a situação. Com uma equipe experiente,
          estamos prontos para atender a todas as suas necessidades de guincho,
          auto socorro, resgate, pane seca e recarga de bateria a qualquer hora,
          em qualquer lugar.
        </p>
      </div>
    </main>
  );
};

export default About;
