import React from 'react';
import styles from './styles.module.css';


interface BingeProps {
  time: number
}

const Binge: React.FC<BingeProps> = ({ time }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Your remaining time is:</p>
      <p className={styles.textTimeRemaining}>{`${time} hours`}</p>
      <button onClick={() => {}} className={styles.button}>Next Episode</button>
    </div>
  );
};

export default Binge;
