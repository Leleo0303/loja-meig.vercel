import React from 'react';

interface CartProps {
  onBackToMain: () => void;
  onGoToCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ onBackToMain, onGoToCheckout }) => {
  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] font-sans antialiased pt-20 pb-24 md:pb-16">
      {/* Top Bar integrada fixa e compacta no mobile */}
      <header className="fixed top-0 w-full z-50 bg-[#fcf9f8]/90 backdrop-blur-xl border-b border-[#dfbec8]/30 shadow-sm">
        <div className="flex justify-between items-center px-4 py-3 w-full max-w-7xl mx-auto">
          <button onClick={onBackToMain} className="text-[#b7046c] hover:scale-105 transition-transform flex items-center gap-1 font-medium text-xs md:text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Voltar
          </button>
          <h1 className="font-serif text-xl md:text-2xl tracking-tighter text-[#b7046c] italic">MEIG OUTFIT</h1>
          <div className="w-12"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Lista de Itens do Carrinho */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="font-serif text-xl md:text-2xl text-[#1c1b1b]">Sua Sacola</h2>
              <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase text-[#584048]">2 Itens</span>
            </div>

            {/* Item 1 - Layout adaptável (lado a lado mesmo em telas menores se couber) */}
            <div className="bg-white/70 backdrop-blur-md border border-[#dfbec8]/30 rounded-xl p-3 md:p-6 flex gap-3 md:gap-6 items-center shadow-sm">
              <div className="w-20 h-28 md:w-28 md:h-36 rounded-lg overflow-hidden shrink-0 bg-[#f6f3f2]">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500" alt="Vibrant Pink Coordinate Set" />
              </div>
              <div className="flex-grow flex flex-col justify-between h-28 md:h-36 w-full">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-sans font-semibold text-xs md:text-base text-[#b7046c] line-clamp-2 md:line-clamp-none leading-tight">Vibrant Pink Coordinate Set</h3>
                    <p className="text-[10px] md:text-xs text-[#584048] mt-0.5">Tam: M | Cor: Fuchsia</p>
                  </div>
                  <button className="text-[#8b7078] hover:text-red-500 shrink-0 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between items-end mt-2">
                  <div className="flex items-center border border-[#dfbec8] rounded-full p-0.5 bg-white/50 scale-90 md:scale-100 origin-left">
                    <button className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs hover:text-[#b7046c]">-</button>
                    <span className="w-6 text-center text-[11px] md:text-xs font-bold">1</span>
                    <button className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs hover:text-[#b7046c]">+</button>
                  </div>
                  <p className="font-serif text-sm md:text-lg font-bold text-[#1c1b1b]">R$ 189,00</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white/70 backdrop-blur-md border border-[#dfbec8]/30 rounded-xl p-3 md:p-6 flex gap-3 md:gap-6 items-center shadow-sm">
              <div className="w-20 h-28 md:w-28 md:h-36 rounded-lg overflow-hidden shrink-0 bg-[#f6f3f2]">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500" alt="Sheer Organza Overlay" />
              </div>
              <div className="flex-grow flex flex-col justify-between h-28 md:h-36 w-full">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-sans font-semibold text-xs md:text-base text-[#b7046c] line-clamp-2 md:line-clamp-none leading-tight">Sheer Organza Overlay</h3>
                    <p className="text-[10px] md:text-xs text-[#584048] mt-0.5">Tam: S | Cor: Pearl White</p>
                  </div>
                  <button className="text-[#8b7078] hover:text-red-500 shrink-0 p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between items-end mt-2">
                  <div className="flex items-center border border-[#dfbec8] rounded-full p-0.5 bg-white/50 scale-90 md:scale-100 origin-left">
                    <button className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs hover:text-[#b7046c]">-</button>
                    <span className="w-6 text-center text-[11px] md:text-xs font-bold">1</span>
                    <button className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-xs hover:text-[#b7046c]">+</button>
                  </div>
                  <p className="font-serif text-sm md:text-lg font-bold text-[#1c1b1b]">R$ 75,00</p>
                </div>
              </div>
            </div>

          </div>

          {/* Resumo do Pedido - Fica fixo embaixo no Mobile ou segue o padrão na lateral no desktop */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 mt-4 lg:mt-0 mb-6 lg:mb-0">
            <div className="bg-white/70 backdrop-blur-md border border-[#dfbec8]/40 rounded-xl p-4 md:p-6 shadow-md flex flex-col gap-4">
              <h2 className="font-serif text-lg md:text-xl text-[#1c1b1b]">Resumo da Compra</h2>
              <div className="space-y-2.5 text-xs md:text-sm">
                <div className="flex justify-between text-[#584048]">
                  <span>Subtotal</span>
                  <span>R$ 264,00</span>
                </div>
                <div className="flex justify-between text-[#584048]">
                  <span>Frete</span>
                  <span className="text-[#b7046c] font-bold">GRÁTIS</span>
                </div>
                <div className="border-t border-[#dfbec8]/30 pt-3 flex justify-between items-center">
                  <span className="font-serif text-base md:text-lg">Total</span>
                  <span className="font-serif text-lg md:text-xl font-bold text-[#b7046c]">R$ 264,00</span>
                </div>
              </div>

              <div className="relative mt-1">
                <input className="w-full bg-white border border-[#dfbec8] rounded-full px-4 py-2 text-[11px] uppercase tracking-wider focus:border-[#b7046c] transition-all outline-none" placeholder="CUPOM DE DESCONTO" type="text"/>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b7046c] font-bold text-[11px] hover:opacity-70">APLICAR</button>
              </div>

              {/* Botão de ação principal fixado na base do mobile para facilitar o clique com o polegar */}
              <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#dfbec8]/30 p-3 lg:static lg:p-0 lg:bg-transparent lg:border-none z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.03)] lg:shadow-none">
                <button 
                  onClick={onGoToCheckout}
                  className="w-full py-3.5 md:py-4 rounded-full text-white font-bold text-xs tracking-widest uppercase shadow-lg shadow-[#ff4fa3]/20 bg-gradient-to-r from-[#b7046c] to-[#ff4fa3] hover:scale-[1.01] active:scale-95 transition-all block text-center"
                >
                  Ir para o Checkout
                </button>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};