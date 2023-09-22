import "./style.css";

const Comment = ({ image }) => {
  return (
    <li className="card">
      <img src={image} alt="" />
    </li>
  );
};

export default Comment;
