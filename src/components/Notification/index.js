import React from 'react'
import { TiBell } from 'react-icons/ti'
import { askForPermissioToReceiveNotifications } from '../../push-notification'

import { Container } from './styles'

function Notification() {
  return (
    <Container onClick={askForPermissioToReceiveNotifications}>
      <TiBell color="#fff" size={35} />
    </Container>
  )
}

export default Notification
