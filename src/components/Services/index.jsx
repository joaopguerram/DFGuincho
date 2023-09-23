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
          description="Serviços de Transporte para caminhões com equipamentos adequados e com total responsabilidade, se seu veículo de trabalho apresentar problemas, podemos lhe ajudar a realizar esse transporte, com pátio amplo para poder pernoitar"
        />
        <Service
          image={Car}
          description="Serviços de Guincho em Brasília para veículos de passeio, Suv's, Vans e Utilitários. Viagens interestaduais com o menor valor do quilometro rodado."
        />
        <Service
          image={Trator}
          description="Guincho para máquinas é feito com agilidade e equipamentos adequados, estendendo-se para a remoção de empilhadeiras com frota específica, com profissionais treinados para o serviço."
        />
        <Service
          image={Moto}
          description="Remoção de Motocicletas em plataforma hidráulica, séries sustentáveis ​​por cabos específicos para aqueles tipos de veículos que são mais sensíveis, com risco maior de danos no transporte."
        />
        <Service
          image={Rescue}
          description="Serviço de resgate para veículos Consiste em retirar o veículo que está fora da pista, capotado, em rios ou lagos, subsolo de prédios ou que esteja sendo recuperado de furto."
        />
        <Service
          image={Battery}
          description="Pequenos reparos emergenciais em veículos, paliativos possíveis aonde se encontra o veículo com pane mecânica ou elétrica, falta de combustível e carga de baterias, para que o mesmo volte a funcionar e possa ser levado à uma oficina especializa."
        />
      </ul>
    </section>
  );
};

export default Services;
