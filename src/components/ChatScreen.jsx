import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './ChatScreen.css';

function ChatScreen() {
  const { person } = useParams();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Peter',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg',
      message: 'Whats up',
    },
    {
      name: 'Zendaya',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg',
      message: 'how are yoi',
    },
    {
      message: 'Ya all good',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput('');
  };
  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>
        YOU MATCHED WITH {person.toUpperCase()} ON 10/08/2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='chatScreen__image'
              src={message.image}
              alt={message.name}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>{' '}
          </div>
        )
      )}

      <form className='chatScreen__input'>
        <input
          placeholder='Type a message...'
          type='text'
          className='chatScreen__inputField'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type='submit'
          onClick={handleSend}
          className='chatScreen__inputButton'
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
