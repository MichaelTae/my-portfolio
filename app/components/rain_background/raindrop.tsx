import React from 'react';
import './rain.css'
const RainDrop = ({ left, bottom, delay, duration }:{left:number, bottom:number, delay:number, duration:number}) => {
  const styles = {
    left: `${left}%`,
    bottom: `${bottom}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };

  return (
    <div className="drop" style={styles}>
      <div className="stem" style={styles}></div>
    </div>
  );
};

export default RainDrop;
