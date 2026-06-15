import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF8FB] border-y border-[#F7D7E1]/20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <span className="text-2xl text-[#FF7EB6] font-serif block mb-6">✦</span>
        <p className="font-serif text-2xl md:text-3xl text-[#2C2C2C] leading-relaxed italic">
          "Acreditamos que a roupa certa não apenas veste. Ela comunica. Ela inspira. Ela transforma a forma como você se vê."
        </p>
        <div className="w-12 h-[1px] bg-[#F3C4D4] mx-auto mt-8"></div>
      </div>
    </section>
  );
};