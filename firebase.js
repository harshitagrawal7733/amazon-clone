import firebase from 'firebase';

const firebaseApp =firebase.initializeApp(
 {
  apiKey: "AIzaSyA-jPnXLugpDrjWy3QQfYaPSr1DXMQRmhk",
  authDomain: "challenge-4f4b0.firebaseapp.com",
  databaseURL: "https://challenge-4f4b0.firebaseio.com",
  projectId: "challenge-4f4b0",
  storageBucket: "challenge-4f4b0.appspot.com",
  messagingSenderId: "516356623327",
  appId: "1:516356623327:web:321523fbb04ec4619b526a",
  measurementId: "G-PJTF0MGYN8"
});
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {db,auth};
