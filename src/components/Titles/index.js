import React from 'react'

import { Container, Text, SeeAll } from './styles'

function Title({ titleText }) {
  return (
    <Container>
      <Text>{titleText}</Text>
      <SeeAll to="/details">See All</SeeAll>
    </Container>
  )
}

export default Title
