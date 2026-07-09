import { Award, Code, Layout, Globe, BookOpen } from 'lucide-react';

export const timelineData = [
  {
    title: 'HTML & CSS',
    subtitle: 'Foundation of Web Development',
    date: 'Early Steps',
    desc: 'Mastered semantic HTML5 structures, responsive web layouts, custom animations, CSS variables, and modern flexbox/grid layout models.',
    icon: <Layout size={20} />,
    status: 'completed'
  },
  {
    title: 'Bootstrap',
    subtitle: 'Responsive Templating',
    date: 'Accelerated Layouts',
    desc: 'Learned grid architectures, flex components, pre-designed widgets, and custom theme utility setups to prototype sites rapidly.',
    icon: <Globe size={20} />,
    status: 'completed'
  },
  {
    title: 'JavaScript',
    subtitle: 'Logic & Interactivity',
    date: 'Intermediate Progress',
    desc: 'Deep dived into functional operations, DOM manipulation, asynchronous fetching (Promises, Async/Await), and standard ES6 modules.',
    icon: <Code size={20} />,
    status: 'completed'
  },
  {
    title: 'React Development',
    subtitle: 'Dynamic Interface Design',
    date: 'Advanced Libraries',
    desc: 'Acquired core concepts of React functional architecture, structural component lifecycle hooks (useState, useEffect, useContext), state management, and props passing.',
    icon: <Award size={20} />,
    status: 'completed'
  },
  {
    title: 'Advanced JavaScript Learning',
    subtitle: 'Deeper Mechanics & Optimization',
    date: 'Current Goal',
    desc: 'Focusing on engine mechanisms (closures, event loop, hoisting), advanced hooks (useMemo, useCallback, custom hooks), performance metrics, and clean bundle optimization.',
    icon: <BookOpen size={20} />,
    status: 'current'
  }
];
