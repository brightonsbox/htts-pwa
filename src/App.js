import React from 'react';
import logo from './logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Is it Hotter than the Sahara?</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <a href="/" class="btn-3d">Find out!</a>
    </div>
  );
}

export default App;
