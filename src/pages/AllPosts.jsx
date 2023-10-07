import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div>
            <Link to={`${post.id}`}>{post.title}</Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};
export default AllPosts;
