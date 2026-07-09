import { Mail, ArrowDown, Download } from 'lucide-react';

import styles from './Hero.module.css';
import { socialLinks } from '../../../data/socialLinks';
import { scrollTo } from '../../../utils/scrollTo';

const Hero = () => {



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
              Specializing in building scalable React applications and high-performance UI components that deliver exceptional user experiences.
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
                className="btn-outline-custom mr-3 mb-2"
                id="hero-contact-me"
              >
                Contact Me <Mail size={16} />
              </button>
              <a
                href="/Prem_Kumar_Mekala_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-custom mb-2"
                id="hero-download-resume"
              >
                Resume <Download size={16} />
              </a>
            </div>

            <div className={styles.socials}>
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target={link.name !== 'Email' ? "_blank" : undefined}
                  rel={link.name !== 'Email' ? "noopener noreferrer" : undefined}
                  className={styles.socialLink}
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="col-lg-5 d-flex justify-content-center mt-5 mt-lg-0">
            <div className={`${styles.avatarWrapper} ${styles.heroImage}`}>
              <img
                src="/profile.png"
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
