import "./style.css";

const Comment = ({ image, name, score, description }) => {
  return (
    <li className="card">
      <div>
        <img src={image} alt="" />
        <div>
          <h2>{name}</h2>
          <p className="score">Nota {score}</p>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Comment;
