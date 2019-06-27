import React from 'react'

import { Container, Text, SeeAll } from './styles'

function Title({ titleText }) {
  return (
    <Container>
      <Text>{titleText}</Text>
      <SeeAll>See All</SeeAll>
    </Container>
  )
}

export default Title
