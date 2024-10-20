import { useState } from 'react';
import './App.css';
import { Login } from './components/login';
import { Home } from './components/home';

function App() {
  const [username, setUsername] = useState('');

  return username ? (
    <Home username={username} />
  ) : (
    <Login onSubmit={setUsername} />
  );
}

export default App;
