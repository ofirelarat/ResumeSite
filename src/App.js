import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education/education';
import Projects from './components/projects';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header className="header-app" />
      <div className="top-container">
        <About />
        <Skills />
      </div>
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
