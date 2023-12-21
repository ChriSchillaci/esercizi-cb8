import Post from "../post/Post";
import "./index.css";

const PostList = ({ postListData}) => {
  return (
    <div className="PostList">
      {postListData.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
    </div>
  );
};

export default PostList;
