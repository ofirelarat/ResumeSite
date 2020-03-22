import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Header className="header-app" />
      <div className="top-container">
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
