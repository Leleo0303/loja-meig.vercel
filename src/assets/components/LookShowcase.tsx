import React from 'react';

// Renomeei os vídeos de forma simples para você colocar o mesmo nome nos seus arquivos no VSCode
const videoLooks = [
  {
    id: 1,
    title: "Arrume-se Comigo: Look Leve e Estiloso",
    src: "/assets/video-arrumese-comigo.mp4",
    tag: "Verão ☀️"
  },
  {
    id: 2,
    title: "Mood do Dia: O Poder de uma Blusinha",
    src: "/assets/video-mood-dia.mp4",
    tag: "Essenciais ✨"
  },
  {
    id: 3,
    title: "Inspirações Meig para o Fim de Ano",
    src: "/assets/video-looks-fim-de-ano.mp4",
    tag: "Festas 💗"
  }
];

export const LookShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF8FB] border-t border-[#F7D7E1]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center md:text-left mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#FF7EB6] font-semibold">Provador Meig</span>
          <h2 className="font-serif text-3xl text-[#2C2C2C] mt-2">Looks Reais, Estilo Único</h2>
          <p className="text-xs text-[#2C2C2C]/60 mt-1">Clique para dar o play e ver o caimento perfeito de cada peça</p>
        </div>

        {/* Grid de Vídeos - No mobile vira scroll horizontal automático, no desktop divide em 3 colunas */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none">
          {videoLooks.map((video) => (
            <div 
              key={video.id} 
              className="min-w-[80vw] sm:min-w-[40vw] md:min-w-0 bg-white border border-[#F7D7E1]/40 rounded-2xl overflow-hidden shadow-sm snap-center flex flex-col group"
            >
              {/* Container do Vídeo mantendo a proporção de smartphone (9:16) */}
              <div className="relative aspect-[9/16] bg-black overflow-hidden">
                <video 
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                >
                  <source src={video.src} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                
                {/* Tag flutuante charmosa */}
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-[#2C2C2C] text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-sm">
                  {video.tag}
                </span>
              </div>

              {/* Informações do look abaixo do vídeo */}
              <div className="p-4 bg-white flex-grow flex flex-col justify-between">
                <h3 className="font-sans text-sm font-medium text-[#2C2C2C] leading-snug">
                  {video.title}
                </h3>
                <span className="text-[11px] text-[#FF7EB6] font-medium mt-2 block">
                  Provador Meig ୨୧
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};