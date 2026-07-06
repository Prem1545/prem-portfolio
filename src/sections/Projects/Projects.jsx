import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from '../../components/Icons/Icons';
import styles from './Projects.module.css';

const categories = ['All', 'React', 'JavaScript', 'HTML/CSS'];

const projects = [
  {
    id: 1,
    title: 'Employee Directory',
    desc: 'A responsive employee management application built with React that allows users to browse, search, filter, and view employee details. Designed using reusable components and React Router.',
    tech: ['React', 'JavaScript', 'Bootstrap', 'React Router'],
    category: 'React',
    accentColor: '#F97316',
    github: 'https://github.com/Prem1545/employee-directory-react',
    live: 'https://employee-directory-react-zxfk.vercel.app/',
  },
  {
    id: 2,
    title: 'Indian Cricket Players Directory',
    desc: 'A modern cricket player directory featuring Indian international players with search, filtering, sorting, detailed player profiles, career statistics, and responsive design.',
    tech: ['React', 'JavaScript', 'Bootstrap', 'React Router'],
    category: 'React',
    accentColor: '#EAB308',
    github: 'https://github.com/Prem1545/Indian-Cricket-Players-Directory',
    live: 'https://indian-cricket-players-directory-nz.vercel.app/',
  },
  {
    id: 3,
    title: 'Mahiv Architects',
    desc: 'A professional architecture company website showcasing services, projects, gallery, contact information, and a premium responsive user interface.',
    tech: ['React', 'JavaScript', 'Bootstrap'],
    category: 'React',
    accentColor: '#22C55E',
    github: 'https://github.com/Prem1545/Mahiv-Architects',
    live: 'https://mahiv-architects.vercel.app/',
  },
  {
    id: 4,
    title: 'Color Picker',
    desc: 'An interactive React application that allows users to generate, preview, and copy color values instantly with a clean user interface.',
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'React',
    accentColor: '#3B82F6',
    github: 'https://github.com/Prem1545/color-picker',
    live: 'https://color-picker-alpha-self.vercel.app/',
  },
  {
    id: 5,
    title: 'Tip Calculator',
    desc: 'A responsive tip calculator that instantly calculates the tip amount and total bill based on user input.',
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'React',
    accentColor: '#8B5CF6',
    github: 'https://github.com/Prem1545/tip-calculator',
    live: 'https://tip-calculator-dun-gamma.vercel.app/',
  },
  {
    id: 6,
    title: 'Guess The Number Game',
    desc: 'An interactive JavaScript game where users guess a randomly generated number with score tracking and restart functionality.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'JavaScript',
    accentColor: '#EC4899',
    github: 'https://github.com/Prem1545/guess-the-number-game',
    live: 'https://guess-the-number-game-coral.vercel.app/',
  },
  {
    id: 7,
    title: 'PMS Website',
    desc: 'A modern and responsive Project Management System (PMS) website designed to showcase project planning, task management, team collaboration, progress tracking, and productivity features. Built with a clean, professional UI focused on user experience and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'HTML/CSS',
    accentColor: '#14B8A6',
    github: 'https://github.com/Prem1545/PMS-Website',
    live: 'https://pms-website-omega.vercel.app/index.html',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">

        <div className="section-header">
          <span className="section-label">What I've built</span>
          <h2 className="section-title">Projects</h2>
        </div>

        {/* Filter */}
        <div className={`${styles.filters} mb-4`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
              id={`filter-${cat.toLowerCase().replace('/', '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="row">
          {filtered.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 mb-4 d-flex">
              <div
                className={styles.card}
                style={{ '--accent': project.accentColor }}
              >
                <div className={styles.cardBody}>
                  <div className={styles.category}>{project.category}</div>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.desc}>{project.desc}</p>

                  {project.learned && (
                    <div className={styles.learned}>
                      <strong>What I learned:</strong> {project.learned}
                    </div>
                  )}

                  <div className={styles.tags}>
                    {project.tech.map((t, i) => (
                      <span key={i} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label={`${project.title} GitHub repo`}
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} ${styles.linkPrimary}`}
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
