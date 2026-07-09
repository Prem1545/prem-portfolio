
import styles from './BackgroundAccents.module.css';

const BackgroundAccents = () => {
  return (
    <div className={styles.accentsContainer}>
      <div className={styles.blurCircleOrange} />
      <div className={styles.blurCircleCyan} />
      <div className={styles.diagonalLines} />
      <div className={styles.geometricShape} />
    </div>
  );
};

export default BackgroundAccents;
