import React from 'react';
import { BANNER_IMAGE_URL, REGISTRATION_URL } from '../constants';

const Header = () => {
  return (
    <header 
      className="relative w-full h-[50vh] bg-no-repeat flex items-center justify-center text-center text-white p-4 animate-scroll-left"
      style={{ 
        backgroundImage: `url(${BANNER_IMAGE_URL})`,
        backgroundSize: '150% auto',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-xl md:text-3xl font-light tracking-widest uppercase text-violet-200">
          Advent Workshop
        </h2>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold my-2 text-violet-300" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          God's Design for the Family
        </h1>
        <p className="text-lg md:text-2xl font-serif text-violet-200 mt-2">
          대림절 워크숍: 가정을 위한 하느님의 설계
        </p>
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-10 py-4 bg-violet-500 text-white font-bold rounded-lg shadow-xl hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-violet-500 transition-transform transform hover:scale-105"
        >
          Register Now
        </a>
      </div>
    </header>
  );
};

export default Header;