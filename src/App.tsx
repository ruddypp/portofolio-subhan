import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './components/Profile';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="bg-[var(--color-paper)] min-h-screen text-[var(--color-ink)]">
        <Navbar />
        <Home />
        <Profile />
        <Education />
        <Projects />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </SmoothScroll>
  );
}

export default App;
