import Service from "../Service";
import "./style.css";
import Truck from "../../assets/truck-truck.png";
import Car from "../../assets/truck-car.png";
import Trator from "../../assets/truck-trator.png";
import Moto from "../../assets/truck-motorbycle.png";
import Rescue from "../../assets/rescue.png";
import Battery from "../../assets/battery.png";

const Services = () => {
  return (
    <section className="containerServices">
      <ul className="services">
        <Service
          image={Truck}
          description="Serviços de Transporte para caminhões com equipamentos adequados e com total responsabilidade, com pátio amplo para pernoite"
        />
        <Service
          image={Car}
          description="Serviços de Guincho em Brasília para veículos colecionaveis. Seu veiculo sempre em confiaveis mãos."
        />
        <Service
          image={Trator}
          description="Guincho para máquinas é feito com agilidade e equipamentos adequados"
        />
        <Service
          image={Moto}
          description="Remoção de Motocicletas, com equipamentos específicos e total segurança"
        />
        <Service
          image={Rescue}
          description="Serviço de resgate para veículos, sendo acidentes em geral, capotamento, resgate em subsolos, entre outros."
        />
        <Service
          image={Battery}
          description="Pequenos reparos emergenciais em veículos, como recarga de bateria ou transporte de combustivel em caso de pane seca"
        />
      </ul>
    </section>
  );
};

export default Services;
