import React from 'react'

import {
  Container,
  Post,
  Title,
  Profile,
  Thumbnail,
  Name,
  Cover,
  Time,
  Carrousel,
  CarrouselList,
  CarrouselListItem
} from './styles'

import Titles from '../Titles'

function Posts() {
  return (
    <>
      <Titles titleText="Your Everyday Inspiration" />
      <Container>
        <Carrousel>
          <CarrouselList>
            <CarrouselListItem>
              <Post>
                <Cover src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/300px-GoldenGateBridge-001.jpg" />
                <Profile>
                  <Thumbnail src="https://avatars3.githubusercontent.com/u/14942865?s=400&v=4" />
                  <Name>Leonardo Campos</Name>
                  <Time>2 hours ago</Time>
                </Profile>
                <Title>Where passion and possibilities meet</Title>
              </Post>
            </CarrouselListItem>

            <CarrouselListItem>
              <Post>
                <Cover src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/300px-GoldenGateBridge-001.jpg" />
                <Profile>
                  <Thumbnail src="https://avatars0.githubusercontent.com/u/26743815?s=400&v=4" />
                  <Name>Thawan Keane</Name>
                  <Time>10 hours ago</Time>
                </Profile>
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
