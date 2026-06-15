import React from 'react';
import { products } from '../../data/mockData';

export const Products: React.FC = () => {
  const handleWhatsAppRedirect = (productName: string) => {
    const message = encodeURIComponent(`Olá! Quero saber mais detalhes sobre a peça: ${productName}`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-white px-6 max-w-7xl mx-auto">
      <div className="text-center md:text-left mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-[#FF7EB6] font-semibold">Nossa Curadoria</span>
        <h2 className="font-serif text-3xl text-[#2C2C2C] mt-2">Peças Exclusivas</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col bg-white">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FFF8FB] mb-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-[#2C2C2C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="flex flex-col flex-grow px-1">
              <span className="text-[10px] uppercase tracking-widest text-[#2C2C2C]/40 font-semibold mb-1">
                {product.category}
              </span>
              <h3 className="font-sans text-sm font-medium text-[#2C2C2C] mb-1 group-hover:text-[#FF7EB6] transition-colors">
                {product.name}
              </h3>
              <p className="font-sans text-sm text-[#2C2C2C]/80 font-semibold mb-3">
                R$ {product.price}
              </p>
              
              <button 
                onClick={() => handleWhatsAppRedirect(product.name)}
                className="mt-auto w-full border border-[#F7D7E1] text-[#2C2C2C] text-xs uppercase tracking-widest font-semibold py-3 rounded-xl bg-[#FFF8FB] hover:bg-[#F7D7E1] hover:text-[#2C2C2C] transition-all duration-300 text-center"
              >
                Quero no WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};