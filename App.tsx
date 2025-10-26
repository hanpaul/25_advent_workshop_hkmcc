
import React from 'react';
import Header from './components/Header';
import EventDetails from './components/EventDetails';
import SpeakerBio from './components/SpeakerBio';
import Agenda from './components/Agenda';
import RegistrationCTA from './components/RegistrationCTA';
import { BACKGROUND_TEXTURE_URL } from './constants';

function App() {
  return (
    <div className="relative text-gray-200 antialiased">
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${BACKGROUND_TEXTURE_URL})` }}
      ></div>
      <div className="relative z-10 bg-gradient-to-b from-[#2a2634] to-[#1e1a27]">
        <Header />
        <main>
          <EventDetails />
          <SpeakerBio />
          <Agenda />
        </main>
        <RegistrationCTA />
      </div>
    </div>
  );
}

export default App;
