import './App.css';
import Homepage from './components/homepage/home';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Homepage />
  )
}

export default App;
