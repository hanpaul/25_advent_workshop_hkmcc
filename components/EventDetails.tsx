import React from 'react';
import { CalendarIcon, ClockIcon, LocationIcon } from './icons';

// Fix: Define props type for DetailCard separately to resolve TypeScript error.
type DetailCardProps = {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
};

const DetailCard = ({ icon, title, children }: DetailCardProps) => (
    <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 transform hover:scale-105 transition-transform duration-300">
        <div className="text-amber-300 mb-4">{icon}</div>
        <h3 className="font-bold text-lg text-amber-200">{title}</h3>
        <div className="text-gray-300 mt-1">{children}</div>
    </div>
);

const EventDetails = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100">"Above all, love each other deeply..."</h2>
            <p className="text-lg text-gray-400 mt-2">1 Peter 4:8</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DetailCard icon={<CalendarIcon className="h-10 w-10" />} title="Date">
                <p>Saturday, December 6th</p>
            </DetailCard>
            <DetailCard icon={<ClockIcon className="h-10 w-10" />} title="Time">
                <p>1:00 PM - 4:30 PM</p>
            </DetailCard>
            <DetailCard icon={<LocationIcon className="h-10 w-10" />} title="Location">
                <p>Holy Korean Martyrs Catholic Church</p>
                <p className="text-sm">1523 McLaughlin Ave, San Jose, CA</p>
            </DetailCard>
        </div>
        <div className="text-center mt-16 text-gray-300 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif font-semibold text-amber-200 mb-8">What You Will Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                    <h4 className="font-bold text-xl text-amber-100 mb-2">For Married Couples</h4>
                    <p className="text-gray-300">
                        Discover key ways to improve your spousal relationship from a Catholic perspective. Move beyond being 'roommates' and learn to build a thriving, faith-centered partnership.
                    </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                    <h4 className="font-bold text-xl text-amber-100 mb-2">For Parents</h4>
                    <p className="text-gray-300">
                        Gain insights on how to raise healthy and faith-filled children. Understand how to navigate modern challenges like high expectations, devices, and screen time.
                    </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg border border-white/10">
                    <h4 className="font-bold text-xl text-amber-100 mb-2">For Singles</h4>
                    <p className="text-gray-300">
                        Learn how to build God-centered relationships in all aspects of your life—friendships, dating, and with parents.
                    </p>
                </div>
            </div>
            <p className="mt-8 text-lg text-gray-400">
                This workshop is for all English-speaking adults: singles, married couples, parents, and empty nesters. Join us for an afternoon of growth and fellowship.
            </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;