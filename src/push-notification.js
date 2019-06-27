import firebase from 'firebase'

export const initializeFirebase = () => {
  firebase.initializeApp({
    // apiKey: 'AIzaSyAw3ZD62of_KLwcoMyVUCS2GPC-K35kpRY',
    // authDomain: 'blog-pwa-e26bf.firebaseapp.com',
    // databaseURL: 'https://blog-pwa-e26bf.firebaseio.com',
    // projectId: 'blog-pwa-e26bf',
    // storageBucket: '',
    // appId: '1:390752002547:web:3e74e3d04cac9df1',
    messagingSenderId: '390752002547'
  })
}

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging()

    await messaging.requestPermission()
    const token = await messaging.getToken()
    console.log('user token: ', token)

    return token
  } catch (error) {
    console.error('ERROR FIREBASE', error)
  }
}
