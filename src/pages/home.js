import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Home() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await api.get("posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main className="main">
      {posts.map(post => (
        <Link key={post.id} className="post" to={`/details/${post.id}`}>
          <h3 className="title">{post.title}</h3>
          <img className="thumbnail" src={post.thumbnail} alt={post.title} />
        </Link>
      ))}
    </main>
  );
}

export default Home;
