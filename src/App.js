import React, { useState, useEffect } from 'react';
import FormattedTime from './components/FormattedTime/FormattedTime';
import styles from './App.module.scss';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [startTime, setStartTime] = useState(null);

  const start = () => {
    if (!timer) {
      const start = Date.now() - time;
      setStartTime(start);

      const interval = setInterval(() => {
        setTime(Date.now() - start);
      }, 10); 
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
    setStartTime(null);
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
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;

