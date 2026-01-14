import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AnimatedText from './components/AnimatedText';
import PromoText from './components/PromoText';
import About from './components/About';
import Skills from './components/Skills';
import Posters from './components/Posters';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SimpleCursor from './components/SimpleCursor';
import FloatingShapes from './components/FloatingShapes';
import GrungeOverlay from './components/GrungeOverlay';
import InteractiveLamp from './components/InteractiveLamp';
import './App.css';

function App() {
  return (
    <div className="App">
      <InteractiveLamp />
      <SimpleCursor />
      <FloatingShapes />
      <GrungeOverlay />
      <Header />
      <Hero />
      <AnimatedText />
      <About />
      <AnimatedText />
      <Skills />
      <AnimatedText />
      <Posters />
      <PromoText />
      <Projects />
      <AnimatedText />
      <Testimonials />
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
