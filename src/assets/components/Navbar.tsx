import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react'; // Certifica-te de que tens o lucide-react instalado

interface NavbarProps {
  onOpenCart: () => void;
  onOpenExplorar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onOpenExplorar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (action: () => void) => {
    action();
    setIsOpen(false); // Fecha o menu móvel após o clique
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFF8FB]/80 backdrop-blur-md border-b border-[#F7D7E1]/30 px-4 md:px-6 py-2.5 flex justify-between items-center transition-all duration-300">
        
        {/* LOGO */}
        <div 
          onClick={() => window.location.reload()} 
          className="flex flex-col items-start justify-center cursor-pointer group"
        >
          <span className="font-serif text-2xl md:text-4xl italic tracking-[0.12em] text-[#2C2C2C] font-normal transition-all duration-300 group-hover:text-[#FF7EB6]">
            Meig
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.25em] text-[#2C2C2C]/70 -mt-1 font-light block select-none">
            outfit ୨୧
          </span>
        </div>
        
        {/* MENU DE NAVEGAÇÃO DE LUXO (DESKTOP) */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wider text-[#2C2C2C]/80">
          <li onClick={() => window.location.reload()} className="hover:text-[#FF7EB6] transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF7EB6] hover:after:w-full after:transition-all after:duration-300">Início</li>
          <li onClick={onOpenExplorar} className="hover:text-[#FF7EB6] transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF7EB6] hover:after:w-full after:transition-all after:duration-300">Coleções</li>
          <li onClick={onOpenExplorar} className="hover:text-[#FF7EB6] transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF7EB6] hover:after:w-full after:transition-all after:duration-300">Looks</li>
          <li className="hover:text-[#FF7EB6] transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF7EB6] hover:after:w-full after:transition-all after:duration-300">Produtos</li>
          <li className="hover:text-[#FF7EB6] transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#FF7EB6] hover:after:w-full after:transition-all after:duration-300">Sobre</li>
        </ul>

        {/* BOTÕES DA DIREITA (SACOLA + HAMBÚRGUER NO MOBILE) */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Botão Shop Now (Desktop) / Ícone de Sacola (Mobile) */}
          <button 
            onClick={onOpenCart}
            className="hidden md:block bg-[#F7D7E1] text-[#2C2C2C] text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:bg-[#2C2C2C] hover:text-[#FFF8FB] transition-all duration-500 shadow-sm border border-transparent"
          >
            Shop Now
          </button>

          <button 
            onClick={onOpenCart}
            className="block md:hidden p-2 text-[#2C2C2C] hover:text-[#FF7EB6] transition-colors"
            aria-label="Carrinho"
          >
            <ShoppingBag size={22} />
          </button>

          {/* Botão Hambúrguer (Apenas Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden p-2 text-[#2C2C2C] hover:text-[#FF7EB6] transition-colors z-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MENU LATERAL RESPONSIVO (MOBILE DRAWER) */}
      <div className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />
      
      <div className={`fixed top-0 right-0 h-full w-72 bg-[#FFF8FB] z-40 shadow-2xl p-8 pt-24 transition-transform duration-300 ease-in-out transform md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col space-y-6 text-base font-medium tracking-widest text-[#2C2C2C]/90 uppercase">
          <li onClick={() => handleNavigation(() => window.location.reload())} className="border-b border-[#F7D7E1]/30 pb-2 cursor-pointer hover:text-[#FF7EB6]">
            Início
          </li>
          <li onClick={() => handleNavigation(onOpenExplorar)} className="border-b border-[#F7D7E1]/30 pb-2 cursor-pointer hover:text-[#FF7EB6]">
            Coleções
          </li>
          <li onClick={() => handleNavigation(onOpenExplorar)} className="border-b border-[#F7D7E1]/30 pb-2 cursor-pointer hover:text-[#FF7EB6]">
            Looks
          </li>
          <li className="border-b border-[#F7D7E1]/30 pb-2 text-[#2C2C2C]/40 cursor-not-allowed">
            Produtos
          </li>
          <li className="border-b border-[#F7D7E1]/30 pb-2 text-[#2C2C2C]/40 cursor-not-allowed">
            Sobre
          </li>
        </ul>
        
        <div className="mt-12 text-center text-xs tracking-widest text-[#2C2C2C]/40 font-light">
          Meig Outfit ୨୧
        </div>
      </div>
    </>
  );
};