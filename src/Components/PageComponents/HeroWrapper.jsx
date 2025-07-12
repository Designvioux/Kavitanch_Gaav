import React, { useEffect, useState } from 'react';
import Hero from '../Hero-Section.jsx';
import HeroTwo from './Home-Two';

const HeroWrapper = () => {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePage(prev => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActivePage(index);
  };

  return (
    <>
      {activePage === 0 ? (
        <Hero onDotClick={handleDotClick} activeDot={activePage} />
      ) : (
        <HeroTwo onDotClick={handleDotClick} activeDot={activePage} />
      )}
    </>
  );
};

export default HeroWrapper;
