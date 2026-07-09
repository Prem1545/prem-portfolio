import { Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import styles from './Footer.module.css';
import { socialLinks } from '../../../data/socialLinks';
import { scrollTo } from '../../../utils/scrollTo';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>

        <div className={styles.topSection}>
          {/* Column 1 */}
          <div className={styles.col1}>
            <div className={styles.logo} onClick={() => scrollTo('home')}>
              <span className={styles.logoTag}>&lt;</span>
              <span className={styles.logoText}>Prem</span>
              <span className={styles.logoSubText}>.dev</span>
              <span className={styles.logoTag}>/&gt;</span>
            </div>

            <p className={styles.tagline}>
              Building reliable software with clean code, thoughtful design, and continuous learning.
            </p>

            <div className={styles.socials}>
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target={link.name !== 'Email' ? "_blank" : undefined}
                  rel={link.name !== 'Email' ? "noopener noreferrer" : undefined}
                  className={styles.socialLink}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.verticalDivider}></div>

          {/* Column 2 */}
          <div className={styles.col2}>
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                    className={styles.linkButton}
                  >
                    <span className={styles.bullet}></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.verticalDivider}></div>

          {/* Column 3 */}
          <div className={styles.col3}>
            <h3 className={styles.title}>Let's Connect</h3>
            <p className={styles.connectText}>
              I'm always open to discussing opportunities, collaborations, and exciting software projects.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.contactBtn} onClick={() => scrollTo('contact')}>
                <Send size={16} className={styles.sendIcon} />
                Get In Touch
              </button>
              <a href="https://wa.me/917032536697" target="_blank" rel="noopener noreferrer" className={styles.contactBtn} style={{ textDecoration: 'none', color: '#F97316' }}>
                <FaWhatsapp size={16} className={styles.sendIcon} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copy}>
            &copy; {currentYear} Prem Kumar Mekala. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
