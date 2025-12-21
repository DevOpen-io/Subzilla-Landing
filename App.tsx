import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Installation from './components/Installation';
import Footer from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { motion, useScroll, useSpring } from 'framer-motion';
import { LanguageProvider } from './LanguageContext';

const AppContent: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Init theme based on system preference or local storage
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <BackgroundEffects />

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Features />
        <Installation />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;