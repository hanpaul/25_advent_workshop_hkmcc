import React from 'react';
import Header from './components/Header';
import EventDetails from './components/EventDetails';
import SpeakerBio from './components/SpeakerBio';
import Agenda from './components/Agenda';
import RegistrationCTA from './components/RegistrationCTA';

function App() {
  return (
    <div className="relative text-gray-800 antialiased">
      <div className="relative z-10">
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