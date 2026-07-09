
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

import { responsibilities } from '../../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Where I've worked</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.timelineCard}>
            <div className={styles.timelineIcon}>
              <Briefcase size={20} />
            </div>
            <div className={styles.timelineContent}>
              <h3 className={styles.role}>Software Developer</h3>
              <h4 className={styles.company}>Quantum Works Pvt. Ltd.</h4>
              <span className={styles.date}>February 2026 – Present</span>
              
              <ul className={styles.responsibilitiesList}>
                {responsibilities.map((item, index) => (
                  <li key={index} className={styles.responsibilityItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Experience;
