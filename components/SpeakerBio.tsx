import React from 'react';
import { SPEAKER_IMAGE_URL } from '../constants';

const SpeakerBio = () => {
  return (
    <section className="py-16 sm:py-24 bg-violet-100/50 border-y border-violet-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-violet-900">Guest Speaker</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-shrink-0">
            <img 
              src={SPEAKER_IMAGE_URL} 
              alt="Dr. Robert Navarra" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl shadow-violet-300/30"
            />
          </div>
          <div className="text-center lg:text-left text-gray-700">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-violet-800">Dr. Robert Navarra</h3>
            <p className="text-md text-gray-500 mt-1">Licensed Marriage and Family Therapist, Master Addiction Counselor</p>
            <div className="mt-4 text-lg leading-relaxed space-y-4">
              <p>
                Dr. Robert Navarra, a Licensed Marriage and Family Therapist with over 40 years of experience, is a renowned expert in relationship counseling. He is a Master Trainer and Consultant for The Gottman Institute, where he presents the acclaimed "Art and Science of Love" weekend workshops for couples both nationally and internationally.
              </p>
              <p>
                Dr. Navarra specializes in helping couples, families, and individuals navigate complex challenges, including co-parenting, affair recovery, and addiction. His approach masterfully integrates the research-based Gottman Method with a Catholic perspective on marriage and family life, providing practical and faith-informed guidance.
              </p>
              <p>
                He has taught in the Graduate Program in Counseling Psychology at Santa Clara University and has co-authored resources for couples, including a chapter on addiction in the revised edition of Dr. John Gottman's "The Seven Principles for Making Marriage Work." We are blessed to have him share his profound wisdom and experience with our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerBio;