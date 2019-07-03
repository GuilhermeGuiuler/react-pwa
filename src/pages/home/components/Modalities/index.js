import React from 'react'

import {
  Container,
  TitleWrap,
  Title,
  ButtonMore,
  Item,
  Border,
  Resume,
  Thumbnail
} from './styles'

function Modalities() {
  return (
    <Container>
      <TitleWrap>
        <Title>Modalidades</Title>
        <ButtonMore>ver mais</ButtonMore>
      </TitleWrap>
      <Item>
        <Border>
          <Resume>
            Quando vitórias e perdas andam juntas em momentos delicados
          </Resume>
          <Thumbnail src="https://cavalus.com.br/wp-content/uploads/2019/06/Sage-Kimzey-novos-objetvos.jpg" />
        </Border>
      </Item>
      <Item>
        <Border>
          <Resume>O uso de bandana na decoração</Resume>
          <Thumbnail src="https://cavalus.com.br/wp-content/uploads/2019/06/decor_bandana-3-370x247.jpg" />
        </Border>
      </Item>
      <Item>
        <Border>
          <Resume>
            Com a maior nota da prova, Juninho Araújo vence PF de Apartação
          </Resume>
          <Thumbnail src="https://cavalus.com.br/wp-content/uploads/2019/07/PF-ANCA-2019-Queen-Boon-A-Lena-370x247.jpg" />
        </Border>
      </Item>
    </Container>
  )
}

export default Modalities
