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
              <Post to="/details">
                <Thumbnail
                  pinned
                  colorName="light"
                  colorTime="light"
                  name="Mateusinho"
                  time="3 horas"
                  photo="https://www.urbanarts.com.br/imagens/produtos/111149/Detalhes/paisagem-abstrata-5.jpg"
                />
                <Cover src={post.cover} />
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
