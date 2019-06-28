import React, { useEffect, useState } from 'react'
import { TiArrowLeft, TiHeartOutline } from 'react-icons/ti'
import api from '../../services/api'

import Thumbnail from '../../components/Thumbnail'

import {
  Container,
  Cover,
  Image,
  BackButton,
  Title,
  ButtonLike,
  Content
} from './styles'

function Details({ match }) {
  const [post, setPost] = useState([])

  async function getPost() {
    const response = await api.get(`posts?slug=${match.params.slug}`)
    setPost(response.data[0])
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      <Cover>
        <BackButton to="/">
          <TiArrowLeft size={35} />
        </BackButton>
        <Image src={post.thumbnail} />
        <Title>{post.title}</Title>
        <ButtonLike>
          <TiHeartOutline size={35} color="#fff" />
        </ButtonLike>
      </Cover>
      <Container>
        <Thumbnail name={post.author} time="2 horas" photo={post.cover} />
        <Content>{post.content}</Content>
      </Container>
    </>
  )
}

export default Details
