import React from 'react'

import { Container, Photo, Left, Name, Time } from './styles'

function Thumbnail({ pinned, photo, name, time, colorName, colorTime }) {
  return (
    <Container pinned={pinned}>
      <Photo src={photo} />
      <Left>
        <Name colorName={colorName}>{name}</Name>
        <Time colorTime={colorTime}>{time}</Time>
      </Left>
    </Container>
  )
}

export default Thumbnail
