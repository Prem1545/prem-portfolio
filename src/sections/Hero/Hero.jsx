import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { Github, Linkedin } from '../../components/Icons/Icons';
import heroImg from '../../assets/hero-illustration.png';
import styles from './Hero.module.css';

const titles = ['Software Developer', 'Frontend Developer', 'React Developer'];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [speed, setSpeed] = useState(140);

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % titles.length;
      const full = titles[i];
      const updated = isDeleting
        ? full.substring(0, text.length - 1)
        : full.substring(0, text.length + 1);

      setText(updated);

      if (!isDeleting && updated === full) {
        setIsDeleting(true);
        setSpeed(2000);
      } else if (isDeleting && updated === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setSpeed(140);
      } else {
        setSpeed(isDeleting ? 80 : 140);
      }
    }, speed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, speed]);

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
              <span className={styles.typewriter}>{text}</span>
              <span className={styles.cursor} aria-hidden="true">|</span>
            </h2>
            <p className={styles.tagline}>
              I craft premium, responsive, and high-performance web applications using modern technologies like React, JavaScript, HTML5, and CSS3. Passionate about writing clean code and delivering exceptional user experiences.
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
          <div className="col-lg-5 d-none d-lg-flex justify-content-center">
            <div className={styles.avatarWrapper}>
              <img
                src={heroImg}
                alt="Developer Illustration"
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
