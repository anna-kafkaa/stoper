import React, { useState, useEffect } from 'react';
import FormattedTime from './components/FormattedTime/FormattedTime';
import styles from './App.module.scss';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (!timer) {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1);
      setTimer(interval);
    }
  };

  const stop = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div className={styles.app}>
      <FormattedTime time={time} />
      <div className={styles.buttons}>
        <button onClick={start}>START</button>
        <button onClick={stop}>STOP</button>
        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default App;
