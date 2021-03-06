import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import './Chat.css';

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className='chat'>
        <Avatar className='chat__image' alt={name} src={profilePic} />
        <div className='chat__details'>
          <h2 className='chat__name'>{name}</h2>
          <p className='chat__message'>{message}</p>
        </div>
        <p className='chat__timestamp'>{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
