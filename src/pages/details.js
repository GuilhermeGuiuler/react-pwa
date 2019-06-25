import React, { useEffect, useState } from "react";
import api from "../services/api";

const Details = ({ match }) => {
  const [post, setPost] = useState({});

  async function getPostDetails() {
    try {
      const response = await api.get(`/posts/${match.params.id}`);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.author}</p>
    </div>
  );
};

export default Details;
