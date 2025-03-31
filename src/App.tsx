import React from 'react';
import logo from './logo.svg';
import './App.css';
import Present from './components/Presentation'
import Auth from './components/Authentification';

function App() {
  return (
    <div className="App">
      <header className='header'>
          <h1 className="title">Social Media</h1>
      </header>
      <br /><br />
      <Present/>
      <Auth/>
    </div>
  );
}

export default App;
