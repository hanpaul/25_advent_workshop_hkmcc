import React from 'react';
import { REGISTRATION_URL } from '../constants';

const RegistrationCTA = () => {
  return (
    <footer className="sticky bottom-0 z-50 w-full bg-violet-50/90 backdrop-blur-lg border-t border-violet-200/80 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-violet-900">Invest in Your Family's Foundation</h3>
          <p className="text-gray-600 text-sm">Join us for an inspiring day of growth and fellowship. Register today!</p>
        </div>
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-full sm:w-auto text-center px-8 py-3 bg-violet-500 text-white font-bold rounded-lg shadow-lg hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-violet-50 focus:ring-violet-500 transition-transform transform hover:scale-105"
        >
          Register Now
        </a>
      </div>
    </footer>
  );
};

export default RegistrationCTA;