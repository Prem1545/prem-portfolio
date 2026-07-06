import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from '../../components/Icons/Icons';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`${styles.footer} glass`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo} onClick={handleScrollToTop}>
          <span className={styles.logoTag}>&lt;</span>
          <span className={styles.logoText}>Prem</span>
          <span className={styles.logoSubText}>.dev</span>
          <span className={styles.logoTag}>/&gt;</span>
        </div>

        <p className={styles.copy}>
          &copy; {currentYear} Prem Kumar Mekala. All rights reserved.
        </p>

        <div className={styles.socials}>
          <a href="https://github.com/Prem1545" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/prem-kumar-mekala-6396332b3?trk=contact-info" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:premyadavofficial15@gmail.com" className={styles.socialLink} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className={styles.attribution}>
        Made with <Heart size={14} className={styles.heartIcon} /> using React
      </div>
    </footer>
  );
};

export default Footer;
