import './App.css';
import React, { useState } from 'react';
import Homepage from './components/homepage/home';
import { Routes, Route } from "react-router-dom"
import FAQ from './components/faq/faq';
import Contacts from './components/contact/contact';
import Stories from './components/stories/stories';
import StoryOne from './components/stories/story1';
import BabaYaga from './components/stories/babaYaga';

function App() {

  const [documentId, setDocumentId] = useState('');
  
    const handleButtonPress = (buttonId) => {
      const newDocumentId = buttonId;
  
      if (newDocumentId) {
        setDocumentId(newDocumentId);
      } else {
        console.log("Unable to determine the new documentId.");
      }
    };

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/FAQ' element={<FAQ />}/>
        <Route path='/Contacts' element={<Contacts />}/>
        <Route path='/Stories' element={<Stories />}/>
        <Route path='/StoryOne' element={<StoryOne documentId={documentId} onButtonPress={handleButtonPress} />
        } />

        <Route path='/BabaYaga' element={ <BabaYaga documentId={documentId} onButtonPress={handleButtonPress} />
        } />
        
      </Routes>
    </div>
    
  )
}

export default App;
