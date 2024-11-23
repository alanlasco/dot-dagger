import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Interests } from './components/Interests';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LumberJack } from './components/LumberJack';
import ScrollToTopButton from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Interests/>
      <Contact/>
      <LumberJack/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
