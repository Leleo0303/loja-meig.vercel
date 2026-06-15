import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF8FB] border-t border-[#F7D7E1]/40 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="text-lg font-serif tracking-widest text-[#2C2C2C] font-semibold">
            MEIG<span className="text-[#FF7EB6] font-sans font-light text-xs tracking-normal inline-block ml-1">outfit</span>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-1">© 2026 meig.outfit. Todos os direitos reservados.</p>
        </div>
        
        <div className="flex space-x-6 text-xs uppercase tracking-widest text-[#2C2C2C]/60 font-medium">
          <a href="#" className="hover:text-[#FF7EB6] transition-colors">Políticas</a>
          <a href="#" className="hover:text-[#FF7EB6] transition-colors">Termos</a>
          <a href="#" className="hover:text-[#FF7EB6] transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};