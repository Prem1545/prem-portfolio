
import { skillCategories } from '../../../data/skills';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Arsenal</span>
          <h2 className="section-title">Skills & Tools</h2>
        </div>

        <div className="row justify-content-center">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4 d-flex">
              <div className={`${styles.categoryCard} w-100 ${category.title === 'Frontend' ? styles.cardFrontend : category.title === 'Backend' ? styles.cardBackend : category.title === 'Tools' ? styles.cardTools : styles.cardLearning}`} style={{ '--cat-color': category.color }}>
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon} style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                
                <div className={styles.skillsList}>
                  {category.skills.map((skill, i) => (
                    <div key={i} className={styles.skillItem}>
                      <span className={styles.skillIcon} style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
