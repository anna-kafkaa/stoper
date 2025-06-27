import React from 'react';
import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = (ms) => {
    const milliseconds = ms % 1000;
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (value, digits = 2) => value.toString().padStart(digits, '0');
    const padMs = (value) => value.toString().padStart(3, '0').substring(0, 1); // pokazujemy tylko 1 cyfrę milisekund

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${padMs(milliseconds)}`;
  };

  return <div className={styles.time}>{formatTime(time)}</div>;
};

export default FormattedTime;
