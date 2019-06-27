import React from 'react'

import { Container, ButtonMenu, Ball, Perfil } from './styles'

function Header({ ...props }) {
  return (
    <Container>
      <ButtonMenu {...props}>
        <Ball style={{ top: 0, left: 0 }} />
        <Ball style={{ top: 0, right: 0 }} />
        <Ball style={{ bottom: 0, left: 0 }} />
        <Ball style={{ bottom: 0, right: 0 }} />
      </ButtonMenu>
      <Perfil src="https://avatars3.githubusercontent.com/u/10064190?s=400&u=41a3041f12d3fda9adfd4bc8386d9d6803e94c8d&v=4" />
    </Container>
  )
}

export default Header
