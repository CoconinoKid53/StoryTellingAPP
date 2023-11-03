import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBwQzIyZ3oCzqJzMr8PvGrTViE08TMXOFw",
    authDomain: "storyboard-deb58.firebaseapp.com",
    projectId: "storyboard-deb58",
    storageBucket: "storyboard-deb58.appspot.com",
    messagingSenderId: "390778132835",
    appId: "1:390778132835:web:8d86cf7b961de686f49b56",
    measurementId: "G-H1DZDBGVZG"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };