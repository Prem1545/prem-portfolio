import { useState } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Experience from './components/sections/Experience/Experience';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Timeline from './components/sections/Timeline/Timeline';
import GithubSection from './components/sections/Github/GithubSection';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/sections/Footer/Footer';
import Loader from './components/common/Loader/Loader';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';
import BackgroundAccents from './components/layout/BackgroundAccents/BackgroundAccents';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  const finishLoading = () => {
    setLoading(false);
  };

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(135deg, #F97316 0%, #FB923C 45%, #F59E0B 100%)',
          transformOrigin: '0%',
          zIndex: 9999,
        }}
      />
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{ position: 'fixed', inset: 0, zIndex: 100000 }}
          >
            <Loader finishLoading={finishLoading} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="app-container"
          >
            <BackgroundAccents />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Timeline />
              <GithubSection />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

