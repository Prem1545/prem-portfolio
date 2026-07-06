import React from 'react';
import { ExternalLink, Star, GitFork } from 'lucide-react';
import { Github } from '../../components/Icons/Icons';
import styles from './GithubSection.module.css';

const featuredRepos = [
  {
    id: 1,
    name: 'employee-directory-react',
    description: 'A responsive employee management application built with React.',
    stars: 5,
    forks: 1,
    language: 'React',
    url: 'https://github.com/Prem1545/employee-directory-react'
  },
  {
    id: 2,
    name: 'Indian-Cricket-Players-Directory',
    description: 'A modern cricket player directory featuring Indian international players.',
    stars: 3,
    forks: 0,
    language: 'React',
    url: 'https://github.com/Prem1545/Indian-Cricket-Players-Directory'
  },
  {
    id: 3,
    name: 'PMS-Website',
    description: 'A modern and responsive Project Management System (PMS) website.',
    stars: 4,
    forks: 2,
    language: 'JavaScript',
    url: 'https://github.com/Prem1545/PMS-Website'
  }
];

const GithubSection = () => {
  return (
    <section id="github" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Open Source & Code</span>
          <h2 className="section-title">GitHub Showcase</h2>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <a
              href="https://github.com/Prem1545"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom"
            >
              <Github size={20} /> View Full Profile
            </a>
          </div>
        </div>

        <div className="row">
          {featuredRepos.map(repo => (
            <div key={repo.id} className="col-lg-4 col-md-6 mb-4 d-flex">
              <div className={`${styles.repoCard} glass w-100`}>
                <div className={styles.repoHeader}>
                  <Github size={24} className={styles.repoIcon} />
                  <a href={repo.url} target="_blank" rel="noopener noreferrer" className={styles.repoName}>
                    {repo.name} <ExternalLink size={14} />
                  </a>
                </div>
                <p className={styles.repoDesc}>{repo.description}</p>
                <div className={styles.repoFooter}>
                  <span className={styles.repoLang}>
                    <span className={styles.langColor} style={{ backgroundColor: repo.language === 'React' ? '#61dafb' : '#f1e05a' }}></span>
                    {repo.language}
                  </span>
                  <div className={styles.repoStats}>
                    <span><Star size={14} /> {repo.stars}</span>
                    <span><GitFork size={14} /> {repo.forks}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
