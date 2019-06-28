import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import {
  Container,
  Post,
  Title,
  Cover,
  Carrousel,
  CarrouselList,
  CarrouselListItem
} from './styles'

import Titles from '../Titles'
import Thumbnail from '../../components/Thumbnail'

function Posts() {
  const [posts, setPosts] = useState([])

  async function getPosts() {
    const response = await api.get('posts')
    setPosts(response.data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Container>
      <Titles titleText="Your Everyday Inspiration" />
      <Carrousel>
        <CarrouselList>
          {posts.map(post => (
            <CarrouselListItem key={post._id}>
              <Post to={`/detalhes/${post.slug}`}>
                <Thumbnail
                  pinned
                  colorName="light"
                  colorTime="light"
                  name={post.author}
                  time="3 horas"
                  photo={post.cover}
                />
                <Cover src={post.thumbnail} />
                <Title>{post.title}</Title>
              </Post>
            </CarrouselListItem>
          ))}
        </CarrouselList>
      </Carrousel>
    </Container>
  )
}

export default Posts
