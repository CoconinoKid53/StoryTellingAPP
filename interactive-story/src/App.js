import './App.css';
import Homepage from './components/homepage/home';
import { Routes, Route } from "react-router-dom"
import FAQ from './components/faq/faq';
import Contacts from './components/contact/contact';
import Stories from './components/stories/stories';


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
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/FAQ' element={<FAQ />}/>
        <Route path='/Contacts' element={<Contacts />}/>
        <Route path='/Stories' element={<Stories />}/>
      </Routes>
    </div>
    
  )
}

export default App;
