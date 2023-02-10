import './App.css';

import { useState } from 'react';

import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [token, setToken] = useState<string>('');

  return (
    <div className="App">
      {token ? (
        <div>
          Already logged in
          <Logout setToken={setToken} />
        </div>
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
}

export default App;
