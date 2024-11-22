import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Interests } from './components/Interests';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Interests/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
