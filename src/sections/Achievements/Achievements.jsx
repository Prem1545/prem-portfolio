import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Trophy } from 'lucide-react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const achievementsList = [
    {
      icon: <Trophy size={36} />,
      title: 'React Projects Completed',
      desc: 'Successfully architected and deployed multiple interactive React applications, implementing state management, lifecycle tracking, and API calls.',
      highlight: '6+ Apps Built',
      color: '#F97316'
    },
    {
      icon: <Zap size={36} />,
      title: 'Responsive Layouts Developed',
      desc: 'Engineered cross-device compatible web pages utilizing advanced layouts (Flexbox, CSS Grid) and clean modular styles.',
      highlight: '100% Mobile Friendly',
      color: '#EAB308'
    },
    {
      icon: <ShieldCheck size={36} />,
      title: 'Advanced React hooks Mastery',
      desc: 'Expertise in building optimized components using useState, useEffect, useContext, and custom hooks to streamline lifecycle operations.',
      highlight: 'Solid Hooks Mastery',
      color: '#F97316'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="achievements" className={`${styles.achievements} section section-alt`}>
      <div className="glow-orb glow-orb-1"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Milestones Met</span>
          <h2 className="section-title">Achievements</h2>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {achievementsList.map((achievement, index) => (
            <motion.div
              key={index}
              className={`${styles.card} glass`}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                borderColor: achievement.color,
                boxShadow: `0 15px 30px -10px ${achievement.color}15, 0 10px 15px -10px ${achievement.color}10`
              }}
            >
              <div className={styles.iconBox} style={{ color: achievement.color, background: `${achievement.color}10` }}>
                {achievement.icon}
              </div>
              <span className={styles.highlight} style={{ color: achievement.color }}>
                {achievement.highlight}
              </span>
              <h3 className={styles.cardTitle}>{achievement.title}</h3>
              <p className={styles.cardDesc}>{achievement.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
