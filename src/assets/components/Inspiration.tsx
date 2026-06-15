import React from 'react';
import { inspirationCards } from '../../data/mockData';

export const Inspiration: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF8FB] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#FF7EB6] font-semibold">Moodboard</span>
          <h2 className="font-serif text-3xl text-[#2C2C2C] mt-2">Inspire-se no Daily Look</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {inspirationCards.map((card) => (
            <div key={card.id} className="bg-white p-4 rounded-3xl shadow-sm border border-[#F7D7E1]/20 hover:shadow-md transition-shadow duration-300">
              <div className="h-80 rounded-2xl overflow-hidden mb-4">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-[#FF7EB6] font-bold">{card.tag}</span>
              <h3 className="font-serif text-lg text-[#2C2C2C] mt-1">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};