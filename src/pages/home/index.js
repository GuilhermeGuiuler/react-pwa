import React from 'react'

import Header from '../../components/Header'
import Posts from '../../components/Posts'
import Notification from '../../components/Notification'

function Home() {
  return (
    <>
      <Notification />
      <Header />
      <Posts />
    </>
  )
}

export default Home
