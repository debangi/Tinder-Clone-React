import React from 'react';
import Chat from './Chat';

import './Chats.css';

function Chats() {
  return (
    <div className='chats'>
      <Chat
        name='Zendaya'
        message='Yo what iz up!'
        timestamp='40 secs ago'
        profilePic='https://upload.wikimedia.org/wikipedia/commons/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg'
      />
      <Chat
        name='Kylie'
        message='Hi, we matched!'
        timestamp='10 min ago'
        profilePic='https://upload.wikimedia.org/wikipedia/commons/d/de/Kylie_Jenner_2021_%28cropped%29.jpg'
      />
      <Chat
        name='Peter'
        message='Hi, I am Spidey'
        timestamp='3 hours ago'
        profilePic='https://upload.wikimedia.org/wikipedia/en/0/0f/Tom_Holland_as_Spider-Man.jpg'
      />
      <Chat
        name='Tom'
        message='Hey, Whats up?'
        timestamp='1 day ago'
        profilePic='https://upload.wikimedia.org/wikipedia/commons/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg'
      />
    </div>
  );
}

export default Chats;
