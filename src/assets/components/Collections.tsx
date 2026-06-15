import React from 'react';
import { collections } from '../../data/mockData';

export const Collections: React.FC = () => {
  return (
    <section className="py-20 bg-white px-6 max-w-7xl mx-auto">
      <h2 className="font-serif text-3xl text-[#2C2C2C] mb-12 text-center md:text-left">
        Linhas Editoriais
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {collections.map((collection) => (
          <div key={collection.id} className="group relative overflow-hidden bg-[#FFF8FB] rounded-2xl cursor-pointer">
            <div className="h-[500px] w-full overflow-hidden">
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
            {/* Overlay Editorial */}
            <div className="absolute inset-0 bg-gradient-to-t Jacks from-[#2C2C2C]/60 via-transparent to-transparent flex flex-col justify-end p-8">
              <h3 className="font-serif text-4xl text-white tracking-widest mb-2 group-hover:translate-x-2 transition-transform duration-500">
                {collection.title}
              </h3>
              <p className="text-white/80 text-sm font-sans tracking-wide max-w-sm">
                {collection.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};