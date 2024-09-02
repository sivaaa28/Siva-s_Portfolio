import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Education />
        <Skills />
        <Internship />
        <Projects />
        <Certifications />
        <Achievements />
        <section id="contact">
        <Contact />
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
