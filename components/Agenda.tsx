
import React from 'react';
import { type AgendaItem } from '../types';

const agendaItems: AgendaItem[] = [
  { time: "1:00 PM", title: "Welcome & Introduction", description: "Opening prayer, housekeeping, and overview of the day." },
  { time: "1:30 PM", title: "Talk 1: Theology of the Family", description: "Understanding the family as the domestic church." },
  { time: "2:15 PM", title: "Talk 2: Challenges with Families Today", description: "Interactive discussion on modern-day challenges for families." },
  { time: "3:00 PM", title: "Snack Break", description: "Enjoy fellowship with coffee and light refreshments.", isBreak: true },
  { time: "3:15 PM", title: "Talk 3: Applications on Building Relationships", description: "Practical advice for singles, couples, and parents." },
  { time: "4:00 PM", title: "Wrap Up & Q&A", description: "An opportunity to ask questions and share insights." },
  { time: "4:20 PM", title: "Closing Prayer", description: "Concluding our workshop with a final prayer." },
];

const Agenda = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100">Workshop Agenda</h2>
        </div>
        <div className="relative border-l-2 border-amber-300/30 ml-4">
          {agendaItems.map((item, index) => (
            <div key={index} className="mb-8 ml-8">
              <div className={`absolute -left-[9px] w-4 h-4 rounded-full ${item.isBreak ? 'bg-purple-400' : 'bg-amber-300'}`}></div>
              <p className="text-sm font-semibold text-amber-200">{item.time}</p>
              <h3 className="text-xl font-serif font-bold mt-1 text-gray-100">{item.title}</h3>
              {item.description && <p className="mt-1 text-gray-400">{item.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
