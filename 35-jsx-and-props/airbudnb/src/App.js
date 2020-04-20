import React from 'react';
import './App.css';

import NavBar from './NavBar'
import ListingsContainer from './ListingsContainer';

// named export: export function App() {
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ListingsContainer />
    </div>
  );
}


// default export
export default App;
