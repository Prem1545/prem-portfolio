import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { useScrollSpy } from '../../../hooks/useScrollSpy';
import styles from './Navbar.module.css';
import { navLinks } from '../../../data/navigation';
import { scrollTo } from '../../../utils/scrollTo';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = navLinks.map(link => link.id);
  const { activeSection, scrolled } = useScrollSpy(sectionIds);

  const handleNavClick = (id) => {
    setIsOpen(false);
    scrollTo(id);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container-fluid px-4 px-md-5 ">
        <div className="d-flex align-items-center justify-content-between w-100">

          {/* Logo */}
          <button
            className={`${styles.logo} btn p-0 border-0`}
            onClick={() => handleNavClick('home')}
            aria-label="Go to top"
          >
            <span className={styles.logoTag}>&lt;</span>
            <span className={styles.logoText}>Prem</span>
            <span className={styles.logoAccent}>.dev</span>
            <span className={styles.logoTag}>/&gt;</span>
          </button>

          {/* Desktop nav */}
          <div className={`${styles.desktopNav} d-none d-lg-flex align-items-center`}>
            <ul className="d-flex mb-0 list-unstyled">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeUnderline"
                        className={styles.activeUnderline}
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={toggleTheme}
              className={styles.themeBtn}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="d-flex d-lg-none align-items-center" style={{ gap: '8px' }}>
            <button
              onClick={toggleTheme}
              className={styles.themeBtn}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.hamburger}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <div className="container py-2">
          <ul className="list-unstyled mb-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`${styles.mobileLink} ${activeSection === link.id ? styles.active : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
