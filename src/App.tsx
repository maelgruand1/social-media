import React from 'react';
import logo from './logo.svg';
import './App.css';
import Present from './components/Presentation'

function App() {
  return (
    <div className="App">
      <header className='header'>
          <h1 className="title">Social Media</h1>
      </header>
      <br /><br />
      <Present/>

    </div>
  );
}

export default App;
