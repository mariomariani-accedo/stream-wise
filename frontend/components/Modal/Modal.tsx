import React from 'react';
import styles from './styles.module.css';


interface ModalProps {
  onClick: () => void
}

const Modal: React.FC<ModalProps> = ({onClick}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.text}>You are about to complete your time limit</h1>
        <p className={styles.text}>Your remaining time for today:</p>
        <p className={styles.textTimeRemaining}>5 minutes</p>
        <div className={styles.buttonsContainer}>
          <a href="/calendar" className={styles.textCalendar}>Check your calendar</a>
          <button onClick={onClick} className={styles.button}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
