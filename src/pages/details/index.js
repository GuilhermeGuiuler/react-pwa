import React from 'react'
import { TiArrowLeft, TiHeartOutline } from 'react-icons/ti'

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

function Details() {
  return (
    <>
      <Cover>
        <BackButton to="/">
          <TiArrowLeft size={35} />
        </BackButton>
        <Image src="https://www.urbanarts.com.br/imagens/produtos/111149/Detalhes/paisagem-abstrata-5.jpg" />
        <Title>Where passion and possibilities meet </Title>
        <ButtonLike>
          <TiHeartOutline size={35} color="#fff" />
        </ButtonLike>
      </Cover>
      <Container>
        <Thumbnail
          name="Guilherme Leme"
          time="2 horas"
          photo="https://www.urbanarts.com.br/imagens/produtos/111149/Detalhes/paisagem-abstrata-5.jpg"
        />
        <Content>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Content>
      </Container>
    </>
  )
}

export default Details
