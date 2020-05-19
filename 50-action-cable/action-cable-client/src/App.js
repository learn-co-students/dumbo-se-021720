import React, { useState, useEffect } from 'react';
import TweetsContainer from './components/TweetsContainer';
import Header from './components/Header';
import { login } from './api';
import Loader from './components/Loader';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  // fake auth time
  useEffect(() => {
    const userId = localStorage.getItem('userId')
    if (userId) {
      login(userId).then(setCurrentUser)
    }
  }, [])

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      {currentUser ? <TweetsContainer currentUser={currentUser} /> : <Loader />}
    </div>
  );
}

export default App;
