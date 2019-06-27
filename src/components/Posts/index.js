import React from 'react'

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
  return (
    <>
      <Titles titleText="Your Everyday Inspiration" />
      <Container>
        <Carrousel>
          <CarrouselList>
            <CarrouselListItem>
              <Post to="/details">
                <Thumbnail
                  pinned
                  colorName="light"
                  colorTime="light"
                  name="Mateusinho"
                  time="3 horas"
                  photo="https://www.urbanarts.com.br/imagens/produtos/111149/Detalhes/paisagem-abstrata-5.jpg"
                />
                <Cover src="https://www.urbanarts.com.br/imagens/produtos/111149/Detalhes/paisagem-abstrata-5.jpg" />
                <Title>Where passion and possibilities meet</Title>
              </Post>
            </CarrouselListItem>
            <CarrouselListItem>
              <Post to="/details">
                <Thumbnail
                  pinned
                  colorName="light"
                  colorTime="light"
                  name="Mateusinho"
                  time="3 horas"
                  photo="https://www.urbanarts.com.br/imagens/produtos/111149/Detalhes/paisagem-abstrata-5.jpg"
                />
                <Cover src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/300px-GoldenGateBridge-001.jpg" />
                <Title>Where passion and possibilities meet</Title>
              </Post>
            </CarrouselListItem>
          </CarrouselList>
        </Carrousel>
      </Container>
    </>
  )
}

export default Posts
