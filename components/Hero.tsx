import React from 'react';
import { ShoppingBag, PhoneCall, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden bg-slate-900">
      {/* Immersive Background with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://ik.imagekit.io/4lndq5ke52/plumbing/faucet.jpg?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Bathroom Interior"
            className="w-full h-full object-cover opacity-40 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        
        {/* Floating Decorative Orbs */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full animate-[float_12s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Badge Reveal */}
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full mb-8 opacity-0 animate-[fade-in-down_0.8s_ease-out_forwards]">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">The Gold Standard in Building</span>
          </div>
          
          {/* Headline Reveal */}
          <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold text-white leading-tight mb-6 opacity-0 animate-[slide-in-left_1s_cubic-bezier(0.22,1,0.36,1)_forwards_0.2s]">
            Build with the <span className="text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">Gold Standard</span> Quality.
          </h1>
          
          {/* Subtext Reveal */}
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed opacity-0 animate-[slide-in-left_1s_cubic-bezier(0.22,1,0.36,1)_forwards_0.4s]">
            From luxury Italian tiles to high-performance pumping machines,and other plumbing materuials, IZU-GOLD provides the essential materials to transform your blueprints into masterpieces.
          </p>
          
          {/* CTA Reveal */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-[fade-in-up_1s_ease-out_forwards_0.6s]">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-[shimmer_0.75s_ease-out]"></div>
              <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Browse Full Collection</span>
              <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-md transition-all active:scale-95"
            >
              <PhoneCall className="w-5 h-5 text-amber-500 group-hover:scale-110 transition-transform" />
              <span>Contact Experts</span>
            </button>
          </div>

          {/* Stats Section Reveal */}
          <div className="mt-16 flex items-center space-x-8 text-white/60 opacity-0 animate-[fade-in_1s_ease-out_forwards_0.8s]">
            <div>
              <p className="text-3xl font-bold text-white">5k+</p>
              <p className="text-xs uppercase tracking-widest font-semibold text-slate-400">Projects Supplied</p>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div>
              <p className="text-3xl font-bold text-white">12+</p>
              <p className="text-xs uppercase tracking-widest font-semibold text-slate-400">Global Partners</p>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-xs uppercase tracking-widest font-semibold text-slate-400">Quality Verified</p>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          100% { transform: skewX(-25deg) translateX(250%); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  );
};

export default Hero;
