import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBrBj3F8URYH4RRnMCChtY72V1SgPxXWYU",
  authDomain: "tonnyz-fb-clone.firebaseapp.com",
  databaseURL: "https://tonnyz-fb-clone.firebaseio.com",
  projectId: "tonnyz-fb-clone",
  storageBucket: "tonnyz-fb-clone.appspot.com",
  messagingSenderId: "310593345521",
  appId: "1:310593345521:web:9619e13d37a0cb7ee0d650",
  measurementId: "G-00CPCYDSZV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
