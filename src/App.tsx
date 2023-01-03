import React from 'react';
import { Outlet } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <p>Esto nunca va  a cambiar</p>
        <Outlet />

      </header>
    </div>
  );
}

export default App;
