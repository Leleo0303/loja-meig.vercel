import React, { useEffect } from 'react';

interface OrderConfirmedProps {
  onBackToShop: () => void;
}

export const OrderConfirmed: React.FC<OrderConfirmedProps> = ({ onBackToShop }) => {
  
  // Efeito premium de confete ao concluir o pedido
  useEffect(() => {
    const colors = ['#ff4fa3', '#ffb0cc', '#b7046c', '#f2b5d0', '#ffd8e7'];
    const container = document.body;
    const elements: HTMLDivElement[] = [];
    
    for (let i = 0; i < 60; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = `${Math.random() * 8 + 6}px`;
      confetti.style.height = `${Math.random() * 8 + 6}px`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.top = '-20px';
      confetti.style.left = `${Math.random() * window.innerWidth}px`;
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '999';
      
      // Animação inline de queda elegante
      confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360 + 360}deg)`, opacity: 0 }
      ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'linear',
        fill: 'forwards'
      });
      
      container.appendChild(confetti);
      elements.push(confetti);
    }

    return () => {
      elements.forEach(el => el.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] font-sans antialiased flex flex-col justify-center items-center pt-20 pb-12 relative overflow-hidden">
      {/* Decorações Flutuantes Premium em Gradiente */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-[#ffd8e7] to-[#ffd9e4]/20 opacity-40"></div>
      
      <main className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Lado Esquerdo: Imagem Editorial do Sucesso */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/40">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600" alt="Fashion Meig" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#b7046c]/30 to-transparent"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md border border-[#dfbec8]/30 max-w-[200px]">
            <p className="text-[10px] font-bold text-[#b7046c] uppercase tracking-wider mb-1">Destino de Envio</p>
            <p className="text-[#584048] text-xs leading-snug">Seu endereço cadastrado com sucesso ✨</p>
          </div>
        </div>

        {/* Lado Direito: Texto de Confirmação */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="inline-block px-4 py-1 rounded-full bg-[#fec0db] text-[#7b4b62] font-semibold text-xs uppercase tracking-widest">
              Pedido Confirmado ୨୧
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#b7046c] leading-tight">
              Obrigada,<br/>Fashionista!
            </h2>
            <p className="text-base text-[#584048] max-w-xl leading-relaxed">
              Seu upgrade de estilo está oficialmente a caminho! Recebemos o seu pedido com sucesso e nossa equipe já está preparando o seu pacote Meig com todo amor e cuidado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/60 backdrop-blur-md border border-white/40 p-5 rounded-xl space-y-1 shadow-sm">
              <span className="text-xs font-bold uppercase text-[#b7046c]">Número do Pedido</span>
              <p className="font-serif text-lg font-bold text-[#1c1b1b]">#MEIG-9284710</p>
              <p className="text-[11px] text-[#584048] italic">Enviamos os detalhes para seu e-mail.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-white/40 p-5 rounded-xl space-y-1 shadow-sm">
              <span className="text-xs font-bold uppercase text-[#b7046c]">Previsão de Entrega</span>
              <p className="font-serif text-lg font-bold text-[#1c1b1b]">3 a 5 Dias Úteis</p>
              <p className="text-[11px] text-[#584048] italic">Acompanhe pelo código de rastreamento.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={onBackToShop}
              className="bg-gradient-to-r from-[#b7046c] to-[#ff4fa3] text-white font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-full shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
            >
              Voltar para a Loja
              <span>➔</span>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};