import React from 'react'

import { Container, Title, BadgeWrap, Badge, Name } from './styles'

function Categories() {
  return (
    <Container>
      <Title>continue navegando por categoria</Title>
      <BadgeWrap>
        <Badge>
          <Name>Modalidades</Name>
        </Badge>
        <Badge>
          <Name>Saúde Animal</Name>
        </Badge>
        <Badge>
          <Name>Geral</Name>
        </Badge>
        <Badge>
          <Name>Academia UC</Name>
        </Badge>
        <Badge>
          <Name>Internacional</Name>
        </Badge>
      </BadgeWrap>
    </Container>
  )
}

export default Categories
