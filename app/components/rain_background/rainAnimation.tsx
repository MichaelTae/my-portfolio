import React, { useState, useEffect } from 'react';
import RainDrop from './raindrop';
import './rain.css'
const RainAnimation = () => {
  const [drops, setDrops] = useState<any>([]);

  const makeItRain = () => {
    let increment = 0;
    let newDrops = [];

    while (increment < 100) {
      let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      increment += randoFiver;

      newDrops.push({
        left: increment,
        bottom: (randoFiver + randoFiver - 1 + 100),
        delay: 0.1 * randoHundo,
        duration: 0.02 * randoHundo
      });
    }

    setDrops(newDrops);
  }

  useEffect(() => {
    makeItRain();
  }, []);

  return (
    <div className="rain">
      {drops.map((drop: React.JSX.IntrinsicAttributes & { left: any; bottom: any; delay: any; duration: any; }, index: React.Key | null | undefined) => (
        <RainDrop key={index} {...drop} />
      ))}
    </div>
  );
};

export default RainAnimation;
