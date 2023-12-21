import { AiFillLike, AiFillHeart, AiFillSmile } from "react-icons/ai";
import "./index.css";

const Post = ({ postData }) => {
  const {id, username, image, title, body, tags, reactions } = postData;

  return (
    <div id={id} className="Post">
      <div className="Post__user-info">
        <img src={image} alt="user image" />
        <h4>{username}</h4>
      </div>
      <h3 className="Post__title">{title}</h3>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--icons">
          <span>
            <AiFillLike />
          </span>
          <span>
            <AiFillHeart />
          </span>
          <span>
            <AiFillSmile />
          </span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{`#${tag}`}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
