import WhatsApp from "../../assets/whatsapp.png";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <a
        href="http://wa.me/+5561999227170"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <img
          src={WhatsApp}
          alt="Simbolo do aplicativo WhatsApp, com fundo verde e um telefone branco"
          className="imgWpp"
        />
      </a>
    </div>
  );
};

export default Contact;
