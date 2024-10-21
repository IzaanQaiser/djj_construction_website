import React, { useEffect, useState } from 'react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fadeOut = Math.max(1 - scrollY / 500, 0);
    setOpacity(fadeOut);
  }, [scrollY]);

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          filter: 'brightness(0.6)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text-4xl md:text-6xl text-white font-bold mb-4 animate-fade-in-up"
          style={{
            opacity: opacity,
            transform: `translateY(${-scrollY * 0.2}px)`,
          }}
        >
          Transform your space with <br></br>DJJ Construction
        </h1>
        <p
          className="text-xl md:text-2xl text-white max-w-2xl animate-fade-in-up"
          style={{
            opacity: opacity,
            transform: `translateY(${-scrollY * 0.15}px)`,
            animationDelay: '0.2s',
          }}
        >
          Your trusted partner in innovative, sustainable, and high-quality construction solutions for residential and commercial projects.
        </p>
      </div>
    </div>
  );
};

export default Hero;