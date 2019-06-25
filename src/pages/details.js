import React, { useEffect, useState } from 'react'
import api from '../services/api'

const Details = ({ match }) => {
  const [post, setPost] = useState({})

  async function getPostDetails() {
    try {
      const response = await api.get(`/posts/${match.params.id}`)
      setPost(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <main className="main">
      <h1 style={{ marginBottom: 5 }}>{post.title}</h1>
      <p style={{ marginBottom: 20 }}>{post.author}</p>
      <h2>{post.resume}</h2>
    </main>
  )
}

export default Details
