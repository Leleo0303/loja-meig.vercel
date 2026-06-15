import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#FFF8FB] overflow-hidden pt-16">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F7D7E1] rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F3C4D4] rounded-full blur-[120px] opacity-30"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-[#FF7EB6] font-semibold block mb-4">
          Nova Coleção Sol e Leveza
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-[#2C2C2C] leading-tight mb-6">
          Clássico, moderno e <br />
          <span className="italic font-normal text-[#FF7EB6]">delicadamente.</span>
        </h1>
        <p className="text-sm md:text-base text-[#2C2C2C]/70 font-sans tracking-wide max-w-xl mx-auto mb-10 leading-relaxed">
          Peças escolhidas meticulosamente para valorizar seu estilo com leveza, elegância e a personalidade única que você possui.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-[#2C2C2C] text-white text-xs uppercase tracking-widest font-medium px-8 py-4 rounded-full hover:bg-[#2C2C2C]/90 transition-all duration-300 shadow-lg">
            Explorar Coleção
          </button>
          <button className="w-full sm:w-auto border border-[#2C2C2C]/20 text-[#2C2C2C] text-xs uppercase tracking-widest font-medium px-8 py-4 rounded-full hover:bg-[#F7D7E1]/30 transition-all duration-300">
            Instagram
          </button>
        </div>
      </div>
    </section>
  );
};