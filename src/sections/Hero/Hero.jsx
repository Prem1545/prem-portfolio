import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { Github, Linkedin } from '../../components/Icons/Icons';
import heroImg from '../../assets/profile.png';
import styles from './Hero.module.css';

const titles = ['Software Developer', 'Frontend Developer', 'React Developer'];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(140);

  useEffect(() => {
    // We removed the typewriter effect to favor a clean, professional static title
    // as requested for the V2.0 upgrade.
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center">

          {/* Text content */}
          <div className={`col-lg-7 ${styles.content}`}>
            <span className={styles.greeting}>Hi there, I'm</span>
            <h1 className={styles.name}>
              Prem Kumar <span className="gradient-text">Mekala</span>
            </h1>
            <h2 className={styles.role}>
              Software Developer @ Quantum Works Pvt. Ltd.
            </h2>
            <div className={styles.techStack}>
              <span className={styles.techItem}>React Developer</span>
              <span className={styles.techDivider}>|</span>
              <span className={styles.techItem}>JavaScript</span>
              <span className={styles.techDivider}>|</span>
              <span className={styles.techItem}>Core Java</span>
            </div>
            <p className={styles.tagline}>
              Building responsive, scalable, and modern web applications. I specialize in delivering high-performance UI components, writing clean maintainable code, and crafting exceptional user experiences.
            </p>

            <div className={`${styles.ctas} d-flex flex-wrap`}>
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary-custom mr-3 mb-2"
                id="hero-view-projects"
              >
                View Projects <ArrowDown size={16} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-outline-custom mb-2"
                id="hero-contact-me"
              >
                Contact Me <Mail size={16} />
              </button>
            </div>

            <div className={styles.socials}>
              <a
                href="https://github.com/Prem1545"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/prem-kumar-mekala-6396332b3?trk=contact-info"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:premyadavofficial15@gmail.com"
                className={styles.socialLink}
                aria-label="Send email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div className="col-lg-5 d-flex justify-content-center mt-5 mt-lg-0">
            <div className={styles.avatarWrapper}>
              <img
                src={heroImg}
                alt="Prem Kumar Mekala"
                className={styles.avatar}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
