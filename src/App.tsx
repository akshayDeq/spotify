import './App.css';

import { useState } from 'react';

import Login from './components/Login';

function App() {
  const [token, setToken] = useState<string>('');

  return (
    <div className="App">
      {token ? <div>Already logged in</div> : <Login setToken={setToken} />}
    </div>
  );
}

export default App;
