import React, { useEffect, useState } from 'react';

const CircularProgress = ({ targetValue, label }) => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const speed = 100;

    const interval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev < targetValue) {
          const newValue = prev + 1;
          document.documentElement.style.setProperty(`--progress-value-${label}`, `${(newValue / 100) * 360}deg`);
          return newValue;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [targetValue, label]);

  return (
    <div className="rating">
      <div className="circular-progress" style={{ background: `conic-gradient(#06a77d var(--progress-value-${label}), #ededed 0deg)` }}>
        <h2>
          <span className="counter" data-target={targetValue}>{progressValue}</span>
          <sup>%</sup>
          <br />{label}
        </h2>
      </div>
    </div>
  );
};

export default CircularProgress;
