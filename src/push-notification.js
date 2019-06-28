import firebase from "firebase";

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "390752002547"
  });
};

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("user token: ", token);
    localStorage.setItem("@BLOGPWA:NOTIFICATION", token);
    return token;
  } catch (error) {
    console.error("ERROR FIREBASE", error);
  }
};
