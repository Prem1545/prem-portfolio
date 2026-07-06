import React, { useEffect, useState } from 'react';
import styles from './Loader.module.css';

const Loader = ({ finishLoading }) => {
  const [text, setText] = useState('');
  const fullText = 'const developer = new PremKumarMekala();';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          finishLoading();
        }, 800);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <span className={`${styles.dot} ${styles.red}`}></span>
          <span className={`${styles.dot} ${styles.yellow}`}></span>
          <span className={`${styles.dot} ${styles.green}`}></span>
        </div>
        <div className={styles.terminalBody}>
          <span className={styles.prompt}>$ </span>
          <span className={styles.typedText}>{text}</span>
          <span className={styles.cursor}>|</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
