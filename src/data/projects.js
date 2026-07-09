import portfolioImg from '../assets/images/projects/portfolio.png';
import mahivImg from '../assets/images/projects/mahiv.png';
import cricketImg from '../assets/images/projects/cricket.png';
import employeeImg from '../assets/images/projects/employee.png';
import pmsImg from '../assets/images/projects/pms.png';
import colorImg from '../assets/images/projects/color.png';
import tipImg from '../assets/images/projects/tip.png';
import guessImg from '../assets/images/projects/guess.png';

export const categories = ['All', 'React', 'JavaScript', 'HTML/CSS'];

export const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    desc: 'Engineered a modern, responsive personal portfolio with a scalable React architecture, featuring reusable components, custom CSS Modules for encapsulated styling, and React Router for seamless single-page navigation.',
    highlight: 'Component-Based Architecture',
    tech: ['React', 'JavaScript', 'Bootstrap', 'React Router'],
    category: 'React',
    accentColor: '#F97316',
    image: portfolioImg,
    github: 'https://github.com/Prem1545/prem-portfolio',
    live: '/',
    projectType: '💻 Personal Project',
    featured: true
  },
  {
    id: 2,
    title: 'Mahiv Architects',
    desc: 'Developed a professional, production-ready architecture firm website with a focus on responsive UI, modern design principles, and smooth cross-device accessibility to showcase real-world client services.',
    highlight: 'Mobile First Responsive Design',
    tech: ['React', 'JavaScript', 'Bootstrap'],
    category: 'React',
    accentColor: '#22C55E',
    image: mahivImg,
    github: 'https://github.com/Prem1545/Mahiv-Architects',
    live: 'https://mahiv-architects.vercel.app/',
    projectType: '🏢 Client Project'
  },
  {
    id: 3,
    title: 'Indian Cricket Players Directory',
    desc: 'Architected a dynamic player directory featuring comprehensive search, filtering, and sorting algorithms. Integrated REST API concepts and implemented dynamic routing for detailed player profiles.',
    highlight: 'REST API Integration',
    tech: ['React', 'React Router', 'REST API', 'Bootstrap'],
    category: 'React',
    accentColor: '#EAB308',
    image: cricketImg,
    github: 'https://github.com/Prem1545/Indian-Cricket-Players-Directory',
    live: 'https://indian-cricket-players-directory-nz.vercel.app/',
    projectType: '💻 Personal Project'
  },
  {
    id: 4,
    title: 'Employee Directory',
    desc: 'Built a responsive employee management application featuring stateful search, filtering, and sorting capabilities. Utilized reusable React components and React Router to ensure scalable architecture.',
    highlight: 'CRUD Operations & State Management',
    tech: ['React', 'React Router', 'REST API', 'Bootstrap'],
    category: 'React',
    accentColor: '#3B82F6',
    image: employeeImg,
    github: 'https://github.com/Prem1545/employee-directory-react',
    live: 'https://employee-directory-react-zxfk.vercel.app/',
    projectType: '📚 Learning Project'
  },
  {
    id: 5,
    title: 'PMS Website',
    desc: 'Designed a modern Project Management System landing page emphasizing semantic HTML structure, CSS layout techniques, and DOM manipulation to deliver a clean, professional user experience.',
    highlight: 'Semantic HTML & CSS Layouts',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    category: 'HTML/CSS',
    accentColor: '#14B8A6',
    image: pmsImg,
    github: 'https://github.com/Prem1545/PMS-Website',
    live: 'https://pms-website-omega.vercel.app/index.html',
    projectType: '📚 Learning Project'
  },
  {
    id: 6,
    title: 'Color Picker',
    desc: 'Created an interactive utility application demonstrating robust state management in React, allowing users to instantly generate, preview, and copy hex color values via a responsive UI.',
    highlight: 'React Hooks & State Management',
    tech: ['React', 'CSS'],
    category: 'React',
    accentColor: '#8B5CF6',
    image: colorImg,
    github: 'https://github.com/Prem1545/color-picker',
    live: 'https://color-picker-alpha-self.vercel.app/',
    projectType: '📚 Learning Project'
  },
  {
    id: 7,
    title: 'Tip Calculator',
    desc: 'Developed a dynamic calculator tool focusing on core JavaScript logic, event handling, and DOM manipulation to calculate real-time tip percentages and total bills.',
    highlight: 'DOM Manipulation & Event Handling',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'JavaScript',
    accentColor: '#EC4899',
    image: tipImg,
    github: 'https://github.com/Prem1545/tip-calculator',
    live: 'https://tip-calculator-dun-gamma.vercel.app/',
    projectType: '📚 Learning Project'
  },
  {
    id: 8,
    title: 'Guess The Number Game',
    desc: 'Programmed an interactive browser-based game implementing JavaScript game logic, state tracking, and direct DOM manipulation for instant user feedback and score tracking.',
    highlight: 'Game Logic & State Tracking',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'JavaScript',
    accentColor: '#f43f5e',
    image: guessImg,
    github: 'https://github.com/Prem1545/guess-the-number-game',
    live: 'https://guess-the-number-game-coral.vercel.app/',
    projectType: '📚 Learning Project'
  },
];
