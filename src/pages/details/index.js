import React from 'react'
import { TiArrowLeft, TiHeartOutline } from 'react-icons/ti'

import Thumbnail from '../../components/Thumbnail'

import {
  Container,
  Cover,
  Image,
  BackButton,
  Title,
  ButtonLike
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
      </Container>
    </>
  )
}

export default Details
