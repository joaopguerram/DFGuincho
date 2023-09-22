import Comment from "../Comment";
import "./style.css";
import Avaliacao1 from "../../assets/avaliacao-1.png";
import Avaliacao2 from "../../assets/avaliacao-2.png";
import Avaliacao3 from "../../assets/avaliacao-3.png";

const Comments = () => {
  return (
    <ul className="containerCard">
      <Comment image={Avaliacao1} />
      <Comment image={Avaliacao2} />
      <Comment image={Avaliacao3} />
    </ul>
  );
};

export default Comments;
