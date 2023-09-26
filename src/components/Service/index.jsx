import "./style.css";

const Service = ({ description, image }) => {
  return (
    <li className="service">
      <img src={image} alt="" />
      <p className="descriptionService">{description}</p>
    </li>
  );
};

export default Service;
