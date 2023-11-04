import React, { useState, useEffect } from 'react';
import { db } from '../../firestore';


function JournalEntries() {
    return (
    <div>
        <p>This story is an example</p> 
        <button>Continue</button>   
    </div>
    )
    // Create functionality for state changing
    // const [entries, setEntries] = useState([]);
    
    //   // Read from database on snapshot / site load
    //   useEffect(() => {
    //     const unsubscribe = db.collection('entries').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
    //       const entryData = snapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         ...doc.data(),
    //       }));
    //       setEntries(entryData);
    //     });
    
    //     return () => {
    //       unsubscribe();
    //     };
    //   }, []);
    
    //   // HTML
    //   return (
    //     <div>
    //       <h2>Journal Entries</h2>
    //       <div className="journal-entries-container">
    //         {entries.map((entry) => (
    //           <div key={entry.id} className="journal-entry-box">
    //             <strong>{entry.title}</strong>
    //             <p>{entry.timestamp.toDate().toLocaleString()}</p>
    //             <p>{entry.text}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   );
    }

export default JournalEntries