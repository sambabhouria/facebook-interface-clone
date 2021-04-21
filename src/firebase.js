import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA72jpIUAeiSf74BNlNyYITwNSM4ZrvXXg",
  authDomain: "facebook-clone-faeb4.firebaseapp.com",
  projectId: "facebook-clone-faeb4",
  storageBucket: "facebook-clone-faeb4.appspot.com",
  messagingSenderId: "363617222600",
  appId: "1:363617222600:web:8a47e37f6776b3554e4afd",
  measurementId: "G-PY4C0TW72N"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
