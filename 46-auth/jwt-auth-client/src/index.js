import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import 'console-hog'

console.hog("nice")

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);