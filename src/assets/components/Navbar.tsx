import React from 'react';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenExplorar: () => void; // Adicionada a nova prop para abrir a tela de looks
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenExplorar }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFF8FB]/80 backdrop-blur-md border-b border-[#F7D7E1]/30 px-6 py-2.5 flex justify-between items-center transition-all duration-300">
      
      {/* LOGO - Agora recarrega a tela principal ao clicar */}
      <div 
        onClick={() => window.location.reload()} 
        className="flex flex-col items-start justify-center cursor-pointer group"
      >
        <span className="font-serif text-3xl md:text-4xl italic tracking-[0.12em] text-[#2C2C2C] font-normal transition-all duration-300 group-hover:text-[#FF7EB6]">
          Meig
        </span>
        <span className="text-xs tracking-[0.25em] text-[#2C2C2C]/70 -mt-1 font-light block select-none">
          outfit ୨୧
        </span>
      </div>
      
      {/* MENU DE NAVEGAÇÃO */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wider text-[#2C2C2C]/80">
        <li 
          onClick={() => window.location.reload()} 
          className="hover:text-[#FF7EB6] transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF7EB6] hover:after:w-full after:transition-all after:duration-300"
        >
          Início
        </li>
        <li 
          onClick={onOpenExplorar} 
          className="hover:text-[#FF7EB6] transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF7EB6] hover:after:w-full after:transition-all after:duration-300"
        >
          Coleções
        </li>
        <li 
          onClick={onOpenExplorar} 
          className="hover:text-[#FF7EB6] transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF7EB6] hover:after:w-full after:transition-all after:duration-300"
        >
          Looks
        </li>
        <li className="hover:text-[#FF7EB6] transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF7EB6] hover:after:w-full after:transition-all after:duration-300">
          Produtos
        </li>
        <li className="hover:text-[#FF7EB6] transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF7EB6] hover:after:w-full after:transition-all after:duration-300">
          Sobre
        </li>
      </ul>

      {/* BOTÃO DA SACOLA */}
      <button 
        onClick={onOpenCart}
        className="bg-[#F7D7E1] text-[#2C2C2C] text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-none hover:bg-[#2C2C2C] hover:text-[#FFF8FB] transition-all duration-500 shadow-sm border border-transparent hover:border-[#2C2C2C]"
      >
        Shop Now
      </button>
    </nav>
  );
};