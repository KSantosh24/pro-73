import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB4QBwRUJVcJJgZlPu9fjNtLjYz8osLsgo",
  authDomain: "e-rider-79a8b.firebaseapp.com",
  projectId: "e-rider-79a8b",
  storageBucket: "e-rider-79a8b.appspot.com",
  messagingSenderId: "706333916545",
  appId: "1:706333916545:web:12f30f1ee0d5b7a2bcfc80"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
