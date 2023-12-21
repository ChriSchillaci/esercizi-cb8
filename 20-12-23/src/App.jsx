import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import AddPost from "./components/addPost";
import PostList from "./components/postList";
import "./App.css";

function App() {
  const [postListData, setPostListData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      data.posts.map((post) => {
        fetch(`https://dummyjson.com/users/${post.userId}`)
          .then((res) => res.json())
          .then((data) => {
            const userData = {
              id: post.id,
              image: data.image,
              username: data.username,
              title: post.title,
              body: post.body,
              tags: post.tags,
              reactions: post.reactions,
            };
            setPostListData((prev) => [...prev, userData]);
          });
      });
    };

    fetchPosts();
  }, []);

  // Ho letto su Internet che per prevenire la doppia esecuzione dell'useEffect bisogna rimuovere lo Strict Mode su main.jsx.
  // Ho deciso di non rimuoverlo perchè ho letto che è sconsigliato farlo dato che aiuta a evidenziare potenziali errori nella web application.

  return (
    <div className="App">
      <Navbar />
      <AddPost setPostListData={setPostListData} />
      <PostList
        postListData={postListData}
      />
    </div>
  );
}

export default App;
