import React from 'react'

import {
  IonContent,
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/react'

import Banner from './components/Banner'
import Modalities from './components/Modalities'
import Categories from './components/Categories'

import Logo from '../../assets/images/logo.png'

function Home() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonButton>
              <IonIcon slot="icon-only" name="menu" />
            </IonButton>
          </IonButtons>
          <IonTitle>
            <img src={Logo} alt="Logo Portal Cavalus" />
          </IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon slot="icon-only" name="search" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Banner />
        <Modalities />
        <Categories />
      </IonContent>
    </IonApp>
  )
}

export default Home
