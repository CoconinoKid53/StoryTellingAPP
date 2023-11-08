import React, { useState } from 'react';
import NavBar from "../navbar/nav";
import Background from "../background";
import home from "../homepage/home.module.css"
import { Link } from "react-router-dom";
import StoryOne from "./story1";

function Stories() {
    const [documentId, setDocumentId] = useState('A1');
  
    const handleButtonPress = (buttonId) => {
      const newDocumentId = buttonId;
  
      if (newDocumentId) {
        setDocumentId(newDocumentId);
      } else {
        console.log("Unable to determine the new documentId.");
      }
    };
  
    return (
      <div className={home.container}>
        <NavBar />
        <div>
          <Background>
            <div>
              <StoryOne documentId={documentId} onButtonPress={handleButtonPress} />
            </div>
          </Background>
        </div>
      </div>
    );
  }

export default Stories;