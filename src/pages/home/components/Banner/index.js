import React from 'react'

import { Container, Item, Cover, Image, Title, Tag } from './styles'

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
    // autoplay: true
  }

  return (
    <Container {...settings}>
      <Item>
        <Cover>
          <Image src="https://cavalus.com.br/wp-content/uploads/2019/06/Sage-Kimzey-novos-objetvos.jpg" />
          <Tag>Apartaçāo</Tag>
        </Cover>
        <Title>
          Pentacampeão mundial Sage Kimzey em busca de novos objetivos
        </Title>
      </Item>
      <Item>
        <Cover>
          <Image src="https://cavalus.com.br/wp-content/uploads/2019/07/Como-aprender-o-jogo-mental-observando-o-meu-cavalo-770x508.jpg" />
          <Tag>Apartaçāo</Tag>
        </Cover>
        <Title>Como aprender o jogo mental observando o meu cavalo</Title>
      </Item>
    </Container>
  )
}

export default Banner
