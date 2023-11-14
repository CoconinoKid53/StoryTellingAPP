import React, { useState, useEffect } from 'react';
import { db } from '../../firestore';

import home from "../homepage/home.module.css"
import NavBar from '../navbar/nav';
import Background from '../background';


function StoryOne({ documentId, onButtonPress }) {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const docRef = db.collection('story1').doc(documentId);

    const unsubscribe = docRef.onSnapshot((snapshot) => {
      if (snapshot.exists) {
        setEntry({
          id: snapshot.id,
          ...snapshot.data(),
        });
      } else {
        console.log("ERROR: Document does not exist");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [documentId]); 

  if (!entry) {
    return (
      <div className={home.container}>
      <NavBar/>
      <div>
        <Background>
        <div>Loading Story...</div>
        </Background>
        </div>
    </div>
  )
}

  const handleButtonPress = async(buttonId) => {
    if (entry[buttonId]) {
        onButtonPress(entry[buttonId]);
      } 
      else {
        console.log(`Document ID not found in ${buttonId} field.`);
      }
   };

   const buttons = Object.keys(entry)
    .filter((key) => key.startsWith('Option') || key == 'Back' || key.startsWith('Game')) // Filter button fields
    .map((key) => ({ id: key, label: entry[key] })); // Map to an array of objects


  return (

    <div className={home.container}>
      <NavBar/>
      <div>
        <Background>
          <div>
            <h2>Story 1</h2>
            <div className="story1-container">
              <div className="journal-entry-box">
                <strong>{entry.title}</strong>
                <p>{entry.option1}</p>
                <p>{entry.desc}</p>
                {buttons.map((button) => (
                  <button key={button.id} onClick={() => handleButtonPress(button.id)}>
                    {button.id}
                  </button>
                ))}
              </div>
            </div>
          </div>
                </Background>
        </div>
    </div>
  );
}

export default StoryOne;
