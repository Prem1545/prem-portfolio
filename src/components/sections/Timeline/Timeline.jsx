import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import styles from './Timeline.module.css';

import { timelineData } from '../../../data/timeline';

const Timeline = () => {

  return (
    <section id="timeline" className={`${styles.timeline} section section-alt`}>
      <div className={`${styles.container} container`}>
        <div className="section-header">
          <span className="section-subtitle">My Growth Path</span>
          <h2 className="section-title">Timeline</h2>
        </div>

        <div className={styles.timelineWrapper}>
          <div className={styles.line}></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Node Icon */}
              <div className={`${styles.iconNode} ${item.status === 'current' ? styles.currentNode : ''} glass`}>
                {item.icon}
              </div>

              {/* Detail Card */}
              <div className={`${styles.card} glass`}>
                <div className={styles.cardHeader}>
                  <div className={styles.dateBadge}>
                    <Calendar size={12} /> {item.date}
                  </div>
                  {item.status === 'current' && (
                    <span className={styles.liveTag}>Currently Learning</span>
                  )}
                </div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <h4 className={styles.itemSubtitle}>{item.subtitle}</h4>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
