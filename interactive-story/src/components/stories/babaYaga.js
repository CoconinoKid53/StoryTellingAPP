import React, { useState, useEffect } from 'react';
import { db } from '../../firestore';


function BabaYaga({ documentId }) {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const docRef = db.collection('babaYaga').doc(documentId);

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>The story of Baba Yaga</h2>
      <div className="story1-container">
        <div className="journal-entry-box">
          <strong>{entry.title}</strong>
          <p>{entry.option1}</p>
          <p>{entry.desc}</p>
          <button>{entry.button1}</button>
        </div>
      </div>
    </div>
  );
}

export default BabaYaga;
