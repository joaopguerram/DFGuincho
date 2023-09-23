import "./style.css";

const Service = ({ description, image }) => {
  return (
    <li className="service">
      <img src={image} alt="" />
      <p>{description}</p>
    </li>
  );
};

export default Service;
