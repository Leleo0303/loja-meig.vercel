import React, { useState } from 'react';

interface CheckoutProps {
  onBackToMain: () => void;
  onConfirmOrder: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onBackToMain, onConfirmOrder }) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix'>('card');

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] font-sans antialiased pt-20 pb-24 md:pb-16 selection:bg-[#fec0db]">
      <header className="fixed top-0 w-full z-50 bg-[#fcf9f8]/90 backdrop-blur-xl border-b border-[#dfbec8]/30 shadow-sm">
        <nav className="flex justify-between items-center px-4 py-3 w-full max-w-7xl mx-auto">
          <button 
            onClick={onBackToMain}
            className="text-[#b7046c] hover:scale-105 transition-transform flex items-center justify-center p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <h1 className="font-serif text-xl md:text-2xl tracking-tighter text-[#b7046c]">MEIG OUTFIT</h1>
          <div className="text-[#b7046c] p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 md:w-5 h-5">
              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Dados de Envio e Pagamento */}
          <div className="lg:col-span-7 space-y-6">
            
            <section className="bg-white/70 backdrop-blur-md border border-white/30 rounded-xl p-4 md:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#b7046c] text-lg">📦</span>
                <h2 className="font-serif text-lg md:text-xl text-[#1c1b1b]">Informações de Envio</h2>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-full space-y-1">
                  <label className="font-sans font-semibold text-[#584048] uppercase text-[10px] tracking-wider">Nome Completo</label>
                  <input className="w-full bg-white border border-[#dfbec8] rounded-lg px-3 py-2 text-sm focus:border-[#b7046c] outline-none transition-all" placeholder="Alex Rivera" type="text"/>
                </div>
                <div className="col-span-full space-y-1">
                  <label className="font-sans font-semibold text-[#584048] uppercase text-[10px] tracking-wider">Endereço</label>
                  <input className="w-full bg-white border border-[#dfbec8] rounded-lg px-3 py-2 text-sm focus:border-[#b7046c] outline-none transition-all" placeholder="Av. Paulista, 1000" type="text"/>
                </div>
                <div className="space-y-1">
                  <label className="font-sans font-semibold text-[#584048] uppercase text-[10px] tracking-wider">Cidade</label>
                  <input className="w-full bg-white border border-[#dfbec8] rounded-lg px-3 py-2 text-sm focus:border-[#b7046c] outline-none transition-all" placeholder="São Paulo" type="text"/>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-sans font-semibold text-[#584048] uppercase text-[10px] tracking-wider">Estado</label>
                    <input className="w-full bg-white border border-[#dfbec8] rounded-lg px-3 py-2 text-sm focus:border-[#b7046c] outline-none transition-all" placeholder="SP" type="text"/>
                  </div>
                  <div className="space-y-1">
                    <label className="font-sans font-semibold text-[#584048] uppercase text-[10px] tracking-wider">CEP</label>
                    <input className="w-full bg-white border border-[#dfbec8] rounded-lg px-3 py-2 text-sm focus:border-[#b7046c] outline-none transition-all" placeholder="01310-100" type="text"/>
                  </div>
                </div>
              </form>
            </section>

            <section className="bg-white/70 backdrop-blur-md border border-white/30 rounded-xl p-4 md:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#b7046c] text-lg">💳</span>
                <h2 className="font-serif text-lg md:text-xl text-[#1c1b1b]">Forma de Pagamento</h2>
              </div>
              
              {/* Opções de pagamento lado a lado mesmo no menor celular */}
              <div className="grid grid-cols-2 gap-3">
                <div 
                  className={`cursor-pointer border-2 rounded-xl p-3 transition-all ${paymentMethod === 'card' ? 'border-[#b7046c] bg-[#ff4fa3]/5' : 'border-[#dfbec8]'}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base">💳</span>
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${paymentMethod === 'card' ? 'border-[#b7046c]' : 'border-[#dfbec8]'}`}>
                      {paymentMethod === 'card' && <div className="w-2 h-2 bg-[#b7046c] rounded-full"></div>}
                    </div>
                  </div>
                  <p className="font-sans font-semibold text-[#1c1b1b] text-xs">Cartão</p>
                </div>

                <div 
                  className={`cursor-pointer border-2 rounded-xl p-3 transition-all ${paymentMethod === 'pix' ? 'border-[#b7046c] bg-[#ff4fa3]/5' : 'border-[#dfbec8]'}`}
                  onClick={() => setPaymentMethod('pix')}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base">📱</span>
                    <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${paymentMethod === 'pix' ? 'border-[#b7046c]' : 'border-[#dfbec8]'}`}>
                      {paymentMethod === 'pix' && <div className="w-2 h-2 bg-[#b7046c] rounded-full"></div>}
                    </div>
                  </div>
                  <p className="font-sans font-semibold text-[#1c1b1b] text-xs">Pix</p>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="mt-4 space-y-3">
                  <div className="space-y-1">
                    <label className="font-sans font-semibold text-[#584048] uppercase text-[10px] tracking-wider">Número do Cartão</label>
                    <input className="w-full bg-white border border-[#dfbec8] rounded-lg px-3 py-2 text-sm focus:border-[#b7046c] outline-none" placeholder="0000 0000 0000 0000" type="text"/>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-sans font-semibold text-[#584048] uppercase text-[10px] tracking-wider">Validade</label>
                      <input className="w-full bg-white border border-[#dfbec8] rounded-lg px-3 py-2 text-sm focus:border-[#b7046c] outline-none" placeholder="MM/AA" type="text"/>
                    </div>
                    <div className="space-y-1">
                      <label className="font-sans font-semibold text-[#584048] uppercase text-[10px] tracking-wider">CVV</label>
                      <input className="w-full bg-white border border-[#dfbec8] rounded-lg px-3 py-2 text-sm focus:border-[#b7046c] outline-none" placeholder="123" type="text"/>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'pix' && (
                <div className="mt-4 p-4 bg-[#fec0db]/10 rounded-xl text-center border border-[#dfbec8]/20">
                  <p className="text-xs text-[#584048]">O código QR Pix será gerado após a confirmação.</p>
                </div>
              )}
            </section>
          </div>

          {/* Resumo lateral / inferior */}
          <aside className="lg:col-span-5 w-full mt-4 lg:mt-0 mb-6 lg:mb-0">
            <div className="bg-white/70 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-sm space-y-4">
              <h2 className="font-serif text-lg text-[#1c1b1b]">Resumo do Pedido</h2>
              
              <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#f6f3f2]">
                    <img alt="Blazer Rosa" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=150" />
                  </div>
                  <div className="flex-grow text-xs">
                    <p className="font-semibold text-[#1c1b1b] line-clamp-1">Editorial Pink Blazer</p>
                    <p className="text-[#584048]">Tam: M | R$ 249,00</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#dfbec8]/30 pt-3 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#584048]">Subtotal</span>
                  <span>R$ 434,00</span>
                </div>
                <div className="flex justify-between font-serif text-base pt-2 border-t border-[#dfbec8]/20">
                  <span>Total</span>
                  <span className="text-[#b7046c] font-bold">R$ 434,00</span>
                </div>
              </div>

              <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#dfbec8]/30 p-3 lg:static lg:p-0 lg:bg-transparent lg:border-none z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.03)] lg:shadow-none">
                <button 
                  onClick={onConfirmOrder}
                  className="w-full py-3.5 rounded-full text-white font-bold text-xs tracking-widest uppercase bg-gradient-to-r from-[#ff4fa3] to-[#b7046c] active:scale-[0.98] transition-all"
                >
                  Confirmar Pedido
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};