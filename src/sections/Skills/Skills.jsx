import React from 'react';
import { Code, Layout, Wind, Atom, GitBranch, FileCode2, Terminal, Monitor, Wrench, Settings } from 'lucide-react';
import { Github } from '../../components/Icons/Icons';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Monitor size={24} />,
    color: '#F97316',
    skills: [
      { name: 'HTML5', color: '#e34f26', icon: <Code size={20} /> },
      { name: 'CSS3', color: '#1572b6', icon: <Layout size={20} /> },
      { name: 'Bootstrap', color: '#7952b3', icon: <Wind size={20} /> },
      { name: 'JavaScript', color: '#f7df1e', icon: <FileCode2 size={20} /> },
      { name: 'React', color: '#61dafb', icon: <Atom size={20} /> },
    ]
  },
  {
    title: 'Programming',
    icon: <Terminal size={24} />,
    color: '#EAB308',
    skills: [
      { name: 'Core Java', color: '#5382a1', icon: <FileCode2 size={20} /> },
    ]
  },
  {
    title: 'Tools & Ecosystem',
    icon: <Wrench size={24} />,
    color: '#22C55E',
    skills: [
      { name: 'Git', color: '#f05032', icon: <GitBranch size={20} /> },
      { name: 'GitHub', color: '#6e7681', icon: <Github size={20} /> },
      { name: 'VS Code', color: '#007acc', icon: <Settings size={20} /> },
      { name: 'Vercel', color: '#000000', icon: <Terminal size={20} /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Arsenal</span>
          <h2 className="section-title">Skills & Tools</h2>
        </div>

        <div className="row justify-content-center">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex">
              <div className={`${styles.categoryCard} glass w-100`} style={{ '--cat-color': category.color }}>
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
