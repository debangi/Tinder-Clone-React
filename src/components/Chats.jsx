import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ChatScreen from './ChatScreen';
import ChatsPreview from './ChatsPreview';

function Chats() {
  return (
    <Routes>
      <Route index element={<ChatsPreview />} />
      <Route path=':person' element={<ChatScreen />} />
    </Routes>
  );
}

export default Chats;
