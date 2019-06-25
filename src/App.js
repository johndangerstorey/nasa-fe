import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div>
      <header className="App-header tac">
        <img src={logo} alt="logo" className="h200" />
        <p>
          Not A Serious Application
        </p>
        <p className="text-small w500">
          Of course this is a simplistic view of an application.
          Many of the problems we encounter are when dealing with complex situations,
          but my hope is that this will be a proving ground for simplifying complex things.
          To be used when needed to express a new pattern or organization thought.
        </p>
      </header>
    </div>
  );
}

export default App;
