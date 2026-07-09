import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

import { categories, projects } from '../../../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
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
                <div className={styles.thumbnailWrapper}>
                  <img src={project.image} alt={project.title} className={styles.thumbnail} loading="lazy" />
                </div>
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

                  {project.highlight && (
                    <div className={styles.features}>
                      <strong>Technical Highlight</strong>
                      {project.highlight}
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
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub size={15} /> Code
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
