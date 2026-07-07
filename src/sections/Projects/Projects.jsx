import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from '../../components/Icons/Icons';
import styles from './Projects.module.css';

const categories = ['All', 'React', 'JavaScript', 'HTML/CSS'];

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    desc: 'Engineered a modern, responsive personal portfolio with a scalable React architecture, featuring reusable components, custom CSS Modules for encapsulated styling, and React Router for seamless single-page navigation.',
    tech: ['React', 'JavaScript', 'Bootstrap', 'React Router'],
    category: 'React',
    accentColor: '#F97316',
    github: 'https://github.com/Prem1545/portfolio',
    live: 'https://premmekala.dev/',
    projectType: '💻 Personal Project',
    featured: true
  },
  {
    id: 2,
    title: 'Mahiv Architects',
    desc: 'Developed a professional, production-ready architecture firm website with a focus on responsive UI, modern design principles, and smooth cross-device accessibility to showcase real-world client services.',
    tech: ['React', 'JavaScript', 'Bootstrap'],
    category: 'React',
    accentColor: '#22C55E',
    github: 'https://github.com/Prem1545/Mahiv-Architects',
    live: 'https://mahiv-architects.vercel.app/',
    projectType: '🏢 Client Project'
  },
  {
    id: 3,
    title: 'Indian Cricket Players Directory',
    desc: 'Architected a dynamic player directory featuring comprehensive search, filtering, and sorting algorithms. Integrated REST API concepts and implemented dynamic routing for detailed player profiles.',
    tech: ['React', 'React Router', 'REST API', 'Bootstrap'],
    category: 'React',
    accentColor: '#EAB308',
    github: 'https://github.com/Prem1545/Indian-Cricket-Players-Directory',
    live: 'https://indian-cricket-players-directory-nz.vercel.app/',
    projectType: '💻 Personal Project'
  },
  {
    id: 4,
    title: 'Employee Directory',
    desc: 'Built a responsive employee management application featuring stateful search, filtering, and sorting capabilities. Utilized reusable React components and React Router to ensure scalable architecture.',
    tech: ['React', 'React Router', 'REST API', 'Bootstrap'],
    category: 'React',
    accentColor: '#3B82F6',
    github: 'https://github.com/Prem1545/employee-directory-react',
    live: 'https://employee-directory-react-zxfk.vercel.app/',
    projectType: '📚 Learning Project'
  },
  {
    id: 5,
    title: 'PMS Website',
    desc: 'Designed a modern Project Management System landing page emphasizing semantic HTML structure, CSS layout techniques, and DOM manipulation to deliver a clean, professional user experience.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    category: 'HTML/CSS',
    accentColor: '#14B8A6',
    github: 'https://github.com/Prem1545/PMS-Website',
    live: 'https://pms-website-omega.vercel.app/index.html',
    projectType: '📚 Learning Project'
  },
  {
    id: 6,
    title: 'Color Picker',
    desc: 'Created an interactive utility application demonstrating robust state management in React, allowing users to instantly generate, preview, and copy hex color values via a responsive UI.',
    tech: ['React', 'CSS'],
    category: 'React',
    accentColor: '#8B5CF6',
    github: 'https://github.com/Prem1545/color-picker',
    live: 'https://color-picker-alpha-self.vercel.app/',
    projectType: '📚 Learning Project'
  },
  {
    id: 7,
    title: 'Tip Calculator',
    desc: 'Developed a dynamic calculator tool focusing on core JavaScript logic, event handling, and DOM manipulation to calculate real-time tip percentages and total bills.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'JavaScript',
    accentColor: '#EC4899',
    github: 'https://github.com/Prem1545/tip-calculator',
    live: 'https://tip-calculator-dun-gamma.vercel.app/',
    projectType: '📚 Learning Project'
  },
  {
    id: 8,
    title: 'Guess The Number Game',
    desc: 'Programmed an interactive browser-based game implementing JavaScript game logic, state tracking, and direct DOM manipulation for instant user feedback and score tracking.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'JavaScript',
    accentColor: '#f43f5e',
    github: 'https://github.com/Prem1545/guess-the-number-game',
    live: 'https://guess-the-number-game-coral.vercel.app/',
    projectType: '📚 Learning Project'
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
        <div className={`${styles.filters} mb-5`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
              id={`filter-${cat.toLowerCase().replace('/', '-')}`}
              aria-label={`Filter by ${cat}`}
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
                className={`${styles.card} ${project.featured ? styles.featuredCard : ''}`}
                style={{ '--accent': project.accentColor }}
              >
                <div className={styles.cardBody}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className={styles.category}>{project.category}</div>
                    {project.projectType && (
                      <div className={styles.projectTypeBadge}>{project.projectType}</div>
                    )}
                  </div>
                  
                  <h3 className={styles.title}>
                    {project.title}
                    {project.featured && <span className={styles.featuredBadge}>Featured</span>}
                  </h3>
                  
                  <p className={styles.desc}>{project.desc}</p>

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
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github size={15} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} ${styles.linkPrimary}`}
                    aria-label={`View ${project.title} live demo`}
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
