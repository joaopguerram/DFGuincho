import Comment from "../Comment";
import "./style.css";
// import Avaliacao1 from "../../assets/avaliacao-1.png";
// import Avaliacao2 from "../../assets/avaliacao-2.png";
// import Avaliacao3 from "../../assets/avaliacao-3.png";
import { comments } from "../../Data/dataComments";

const Comments = () => {
  return (
    <ul className="containerCard">
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            image={comment.image}
            name={comment.name}
            score={comment.score}
            description={comment.description}
          />
        );
      })}
    </ul>
  );
};

export default Comments;
