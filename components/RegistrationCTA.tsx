
import React from 'react';
import { REGISTRATION_URL } from '../constants';

const RegistrationCTA = () => {
  return (
    <footer className="sticky bottom-0 z-50 w-full bg-gray-900/70 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-white">Ready to Strengthen Your Family?</h3>
          <p className="text-gray-300 text-sm">Seats are limited. Reserve your spot today!</p>
        </div>
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-full sm:w-auto text-center px-8 py-3 bg-amber-400 text-gray-900 font-bold rounded-lg shadow-lg hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-400 transition-transform transform hover:scale-105"
        >
          Register Now
        </a>
      </div>
    </footer>
  );
};

export default RegistrationCTA;
