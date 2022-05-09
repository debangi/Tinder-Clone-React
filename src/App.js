import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Header backButton='/' />}>
          <Route index element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Route>
      </Routes>

      {/* Chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;

//2:00
