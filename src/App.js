import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Route>
      </Routes>
      {/* Tinder Cards */}
      {/* Buttons below Tinder cards */}

      {/* Chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
