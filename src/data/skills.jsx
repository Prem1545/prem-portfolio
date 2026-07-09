
import { Code, Layout, Wind, Atom, GitBranch, FileCode2, Terminal, Monitor, Wrench, Settings } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const skillCategories = [
  {
    title: 'Frontend',
    icon: <Monitor size={24} />,
    color: '#F97316',
    skills: [
      { name: 'React.js', color: '#61dafb', icon: <Atom size={20} /> },
      { name: 'Modern JavaScript (ES6+)', color: '#f7df1e', icon: <FileCode2 size={20} /> },
      { name: 'HTML5', color: '#e34f26', icon: <Code size={20} /> },
      { name: 'CSS3', color: '#1572b6', icon: <Layout size={20} /> },
      { name: 'Bootstrap', color: '#7952b3', icon: <Wind size={20} /> },
      { name: 'React Router', color: '#ca4245', icon: <GitBranch size={20} /> },
    ]
  },
  {
    title: 'Backend',
    icon: <Terminal size={24} />,
    color: '#EAB308',
    skills: [
      { name: 'Core Java', color: '#5382a1', icon: <FileCode2 size={20} /> },
      { name: 'REST APIs', color: '#4caf50', icon: <Terminal size={20} /> },
      { name: 'Spring Boot (Learning)', color: '#6db33f', icon: <Monitor size={20} /> },
      { name: 'MySQL', color: '#4479a1', icon: <Settings size={20} /> },
    ]
  },
  {
    title: 'Tools',
    icon: <Wrench size={24} />,
    color: '#22C55E',
    skills: [
      { name: 'Git', color: '#f05032', icon: <GitBranch size={20} /> },
      { name: 'GitHub', color: '#6e7681', icon: <FaGithub size={20} /> },
      { name: 'VS Code', color: '#007acc', icon: <Settings size={20} /> },
      { name: 'Eclipse', color: '#2c2255', icon: <Code size={20} /> },
    ]
  },
  {
    title: 'Currently Learning',
    icon: <Atom size={24} />,
    color: '#8B5CF6',
    skills: [
      { name: 'Spring Boot', color: '#6db33f', icon: <FileCode2 size={20} /> },
      { name: 'Spring MVC', color: '#6db33f', icon: <Layout size={20} /> },
      { name: 'Hibernate/JPA', color: '#59666c', icon: <Monitor size={20} /> },
      { name: 'MySQL', color: '#4479a1', icon: <Settings size={20} /> },
    ]
  }
];
