import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from './assets/components/Navbar';
import { Hero } from './assets/components/Hero';
import { Manifesto } from './assets/components/Manifesto';
import { Collections } from './assets/components/Collections';
import { Inspiration } from './assets/components/Inspiration';
import { Products } from './assets/components/Products';
import { Footer } from './assets/components/Footer';
import { LookShowcase } from './assets/components/LookShowcase';

// Importação das novas telas estruturadas dos seus arquivos
import { Checkout } from './assets/components/Checkout';
import { Cart } from './assets/components/Cart';
import { OrderConfirmed } from './assets/components/OrderConfirmed';
import { ExplorarColecao } from './assets/components/ExplorarColecao';

const App: React.FC = () => {
  // Estados de telas atualizados incluindo a nova tela 'explorar'
  const [currentScreen, setCurrentScreen] = useState<'loader' | 'login' | 'main' | 'cart' | 'checkout' | 'confirmed' | 'explorar'>('loader');
  const [progress, setProgress] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Carregamento do Loader
  useEffect(() => {
    if (currentScreen !== 'loader') return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setCurrentScreen('login'), 400);
          return 100;
        }
        return prev + 3;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [currentScreen]);

  // Inicializador do AOS apenas na tela principal
  useEffect(() => {
    if (currentScreen === 'main') {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
        offset: 120,
      });
    }
  }, [currentScreen]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentScreen('main');
  };

  return (
    <div className="min-h-screen bg-[#FFF8FB] text-[#2C2C2C] font-sans antialiased selection:bg-[#F7D7E1]">
      
      {/* 1. TELA DE CARREGAMENTO */}
      {currentScreen === 'loader' && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF8FB]">
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 bg-[#F7D7E1] rounded-none flex flex-col items-center justify-center shadow-md mb-8 p-6 transform scale-105 transition-all">
              <span className="font-serif text-7xl italic tracking-widest text-[#2C2C2C] select-none">Meig</span>
              <span className="text-2xl text-[#2C2C2C] mt-3 select-none">୨୧</span>
            </div>
            <div className="w-64 h-[3px] bg-[#F7D7E1] rounded-full overflow-hidden">
              <div className="h-full bg-[#2C2C2C] transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-sm tracking-widest text-[#2C2C2C]/60 uppercase mt-4 font-mono">{progress}%</span>
          </div>
        </div>
      )}

      {/* 2. TELA DE LOGIN */}
      {currentScreen === 'login' && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#FFF8FB] px-4">
          <div className="w-full max-w-md bg-white border border-[#F7D7E1] p-8 md:p-10 shadow-sm rounded-none">
            <div className="flex flex-col items-center mb-8">
              <div className="w-28 h-28 bg-[#F7D7E1] rounded-none flex flex-col items-center justify-center p-2 mb-3">
                <span className="font-serif text-3xl italic text-[#2C2C2C]">Meig</span>
                <span className="text-xs tracking-widest text-[#2C2C2C]">୨୧</span>
              </div>
              <h2 className="font-serif text-xl text-[#2C2C2C] tracking-wide mt-2">Acesse sua Conta</h2>
              <p className="text-xs text-[#2C2C2C]/60 mt-1">Insira as suas credenciais para explorar a coleção</p>
            </div>
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium tracking-wider text-[#2C2C2C] uppercase mb-1">E-mail</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-[#FFF8FB] border border-[#F7D7E1] text-sm text-[#2C2C2C] rounded-none focus:outline-none focus:border-[#2C2C2C]" placeholder="seu@email.com" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-medium tracking-wider text-[#2C2C2C] uppercase">Senha</label>
                  <a href="#forgot" className="text-[11px] text-[#2C2C2C]/60 hover:underline">Esqueceu?</a>
                </div>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 bg-[#FFF8FB] border border-[#F7D7E1] text-sm text-[#2C2C2C] rounded-none focus:outline-none focus:border-[#2C2C2C]" placeholder="••••••••" />
              </div>
              <button type="submit" className="w-full bg-[#2C2C2C] text-[#FFF8FB] py-3 text-xs font-medium tracking-widest uppercase rounded-none hover:bg-[#404040] transition-colors pt-3.5">Entrar na Loja</button>
            </form>
          </div>
        </div>
      )}

      {/* 3. LOJA PRINCIPAL */}
      {currentScreen === 'main' && (
        <div className="relative min-h-screen">
          <Navbar 
            onOpenCart={() => setCurrentScreen('cart')} 
            onOpenExplorar={() => setCurrentScreen('explorar')}
          />
          
          <div className="relative w-full h-[90vh] bg-black overflow-hidden flex items-center justify-center">
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover opacity-50">
              <source src="/assets/volta-as-aulas.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8FB] via-transparent to-black/30" />
            
            <div className="relative z-10 text-center px-4 max-w-3xl" data-aos="zoom-out" data-aos-delay="200">
              <span className="text-xs uppercase tracking-[0.4em] text-white bg-black/20 backdrop-blur-sm px-4 py-1.5 inline-block mb-4">Inspirado no seu dia a dia</span>
              <h1 className="font-serif text-4xl md:text-6xl text-white font-light leading-tight tracking-wide drop-shadow-sm">Looks com Personalidade Única</h1>
            </div>
          </div>

          {/* BACKGROUND COM DETALHES FLUTUANTES ESTÉTICOS */}
          <div className="absolute left-6 top-[120vh] text-[#FF7EB6]/20 text-5xl select-none animate-bounce hidden md:block" style={{ animationDuration: '4s' }}>
            DOCE ୨୧
          </div>
          <div className="absolute right-12 top-[180vh] text-[#F7D7E1]/60 text-4xl select-none animate-pulse hidden md:block">
            ✦
          </div>
          <div className="absolute left-10 top-[260vh] text-[#FF7EB6]/20 text-4xl select-none animate-pulse hidden md:block">
            ✦
          </div>
          <div className="absolute right-8 top-[320vh] text-[#F7D7E1] text-5xl select-none animate-bounce hidden md:block" style={{ animationDuration: '5s' }}>
            ୨୧
          </div>

          {/* CONTEÚDO PRINCIPAL COM ANIMAÇÕES PREMIUM ATUALIZADAS */}
          <main className="relative z-20 bg-[#FFF8FB] overflow-hidden">
            <div data-aos="zoom-in" data-aos-duration="1200">
              <Hero onOpenExplorar={() => setCurrentScreen('explorar')} />
            </div>
            
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
              <Manifesto />
            </div>
            
            <div data-aos="fade-up" data-aos-easing="ease-out-back">
              <Collections />
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100">
              <LookShowcase />
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1100">
              <Inspiration />
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200">
              <Products />
            </div>
          </main>
          
          <Footer />
        </div>
      )}

      {/* 4. TELA DE EXPLORAR COLEÇÃO E LOOKS */}
      {currentScreen === 'explorar' && (
        <div className="relative min-h-screen">
          <Navbar 
            onOpenCart={() => setCurrentScreen('cart')} 
            onOpenExplorar={() => setCurrentScreen('explorar')}
          />
          
          <ExplorarColecao />
          
          {/* Botão Flutuante Elegante para Voltar ao Início */}
          <button 
            onClick={() => setCurrentScreen('main')}
            className="fixed bottom-6 right-6 bg-[#2C2C2C] text-white text-xs uppercase tracking-widest font-medium px-6 py-3 rounded-full shadow-xl z-50 hover:bg-[#404040] transition-all transform hover:scale-105"
          >
            ← Voltar para Início
          </button>
          
          <Footer />
        </div>
      )}

      {/* 5. TELA DA SACOLA DE COMPRAS (CARRINHO) */}
      {currentScreen === 'cart' && (
        <Cart 
          onBackToMain={() => setCurrentScreen('main')} 
          onGoToCheckout={() => setCurrentScreen('checkout')} 
        />
      )}

      {/* 6. TELA DE CHECKOUT */}
      {currentScreen === 'checkout' && (
        <Checkout 
          onBackToMain={() => setCurrentScreen('cart')} 
          onConfirmOrder={() => setCurrentScreen('confirmed')} 
        />
      )}

      {/* 7. TELA DE PEDIDO CONFIRMADO 🎉 */}
      {currentScreen === 'confirmed' && (
        <OrderConfirmed 
          onBackToShop={() => setCurrentScreen('main')} 
        />
      )}

    </div>
  );
};

export default App;