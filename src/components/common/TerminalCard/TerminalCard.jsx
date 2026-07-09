
import styles from './TerminalCard.module.css';

const TerminalCard = ({ title = 'bash', children }) => {
  return (
    <div className={`${styles.terminal} glass`}>
      <div className={styles.terminalHeader}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.red}`}></span>
          <span className={`${styles.dot} ${styles.yellow}`}></span>
          <span className={`${styles.dot} ${styles.green}`}></span>
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.terminalBody}>
        {children}
      </div>
    </div>
  );
};

export default TerminalCard;
