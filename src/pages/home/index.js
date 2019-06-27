import React from 'react'

import Header from '../../components/Header'
import ContainerDefault from '../../components/ContainerDefault'
import Posts from '../../components/Posts'

function Home() {
  return (
    <>
      <Header />
      <ContainerDefault>
        <Posts />
      </ContainerDefault>
    </>
  )
}

export default Home
