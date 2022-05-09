import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase-config';

import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'people'), (snapshot) => {
      setPeople(
        snapshot.docs.map((doc) => ({
          name: doc.data().name,
          url: doc.data().url,
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            key={person.name}
            className='swipe'
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
