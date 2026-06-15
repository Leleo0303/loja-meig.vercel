import React, { useState } from 'react';

// Exemplo de dados das roupas/looks
const LOOKS_DATA = [
  { id: 1, nome: 'Vestido Linho Sol', categoria: 'vestidos', preco: 'R$ 189,90', imagem: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60' },
  { id: 2, nome: 'Conjunto Alfaiataria Leve', categoria: 'conjuntos', preco: 'R$ 249,90', imagem: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&auto=format&fit=crop&q=60' },
  { id: 3, nome: 'Blusa Romântica Off-White', categoria: 'blusas', preco: 'R$ 119,90', imagem: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&auto=format&fit=crop&q=60' },
  // Adicione mais itens aqui conforme necessário
];

export const ExplorarColecao: React.FC = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todos');

  // Filtra os looks com base na categoria selecionada
  const looksFiltrados = categoriaAtiva === 'todos' 
    ? LOOKS_DATA 
    : LOOKS_DATA.filter(look => look.categoria === categoriaAtiva);

  return (
    <section className="min-h-screen bg-[#FFF8FB] pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Tela */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-[#2C2C2C] mb-2">Nossos Looks</h2>
          <p className="text-sm text-[#2C2C2C]/60 font-sans tracking-wide">Explore peças selecionadas para criar combinações únicas</p>
        </div>

        {/* Barra de Filtros */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {['todos', 'vestidos', 'conjuntos', 'blusas'].map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaAtiva(categoria)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 border ${
                categoriaAtiva === categoria
                  ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]'
                  : 'bg-white text-[#2C2C2C] border-[#2C2C2C]/10 hover:bg-[#F7D7E1]/20'
              }`}
            >
              {categoria === 'todos' ? 'Ver Todos' : categoria}
            </button>
          ))}
        </div>

        {/* Grade de Cards de Roupas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {looksFiltrados.map((look) => (
            <div key={look.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative overflow-hidden aspect-[3/4] bg-[#F7D7E1]/10">
                <img 
                  src={look.imagem} 
                  alt={look.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] uppercase tracking-widest text-[#FF7EB6] font-semibold block mb-1">
                  {look.categoria}
                </span>
                <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">{look.nome}</h3>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-sans font-medium text-[#2C2C2C]">{look.preco}</span>
                  <button className="text-xs uppercase tracking-wider text-[#FF7EB6] font-medium hover:text-[#2C2C2C] transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};