import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Interests } from './components/Interests';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Interests/>
    </div>
  );
}

export default App;
