import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Send, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const NEWSLETTER_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdKSu9LqLrLFbLGuuACk-uDClYpEZnv7TwEnRo_7-s1y5Lzig/formResponse';

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
        <div className="space-y-6">
            <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <span className="text-3xl font-montserrat font-extrabold tracking-tighter leading-none">IZU<span className="text-amber-500">-GOLD</span></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500 mt-2 ml-1 opacity-90">Sweet Home</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Nigeria's premier destination for high-quality building materials and professional plumbing solutions. Building the foundations of a better future for generations.
            </p>
            <div className="flex space-x-4">
              <button aria-label="Twitter" className="p-2.5 bg-white/5 rounded-xl hover:bg-amber-500 hover:text-slate-900 transition-all border border-white/5"><Twitter className="w-5 h-5" /></button>
              <button aria-label="Facebook" className="p-2.5 bg-white/5 rounded-xl hover:bg-amber-500 hover:text-slate-900 transition-all border border-white/5"><Facebook className="w-5 h-5" /></button>
              <button aria-label="Instagram" className="p-2.5 bg-white/5 rounded-xl hover:bg-amber-500 hover:text-slate-900 transition-all border border-white/5"><Instagram className="w-5 h-5" /></button>
              <button aria-label="LinkedIn" className="p-2.5 bg-white/5 rounded-xl hover:bg-amber-500 hover:text-slate-900 transition-all border border-white/5"><Linkedin className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-amber-500 flex items-center space-x-2">
              <span className="w-4 h-0.5 bg-amber-500"></span>
              <span>Our Portfolio</span>
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#categories" onClick={(e) => scrollToSection(e, '#categories')} className="hover:text-amber-500 hover:translate-x-1 transition-all inline-block">Plumbing & Pipes</a></li>
              <li><a href="#categories" onClick={(e) => scrollToSection(e, '#categories')} className="hover:text-amber-500 hover:translate-x-1 transition-all inline-block">Sanitary Fixtures</a></li>
              <li><a href="#categories" onClick={(e) => scrollToSection(e, '#categories')} className="hover:text-amber-500 hover:translate-x-1 transition-all inline-block">Roofing & Sheets</a></li>
              <li><a href="#categories" onClick={(e) => scrollToSection(e, '#categories')} className="hover:text-amber-500 hover:translate-x-1 transition-all inline-block">Water Management</a></li>
              <li><a href="#products" onClick={(e) => scrollToSection(e, '#products')} className="hover:text-amber-500 hover:translate-x-1 transition-all inline-block">Premium Italian Tiles</a></li>
            </ul>
          </div>

          {/* Useful Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-amber-500 flex items-center space-x-2">
              <span className="w-4 h-0.5 bg-amber-500"></span>
              <span>Quick Access</span>
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-amber-500 hover:translate-x-1 transition-all inline-block">About Company</a></li>
              <li><a href="#products" onClick={(e) => scrollToSection(e, '#products')} className="hover:text-amber-500 hover:translate-x-1 transition-all inline-block">Featured Catalog</a></li>
              <li><a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')} className="hover:text-amber-500 hover:translate-x-1 transition-all inline-block">What Clients Say</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-amber-500 hover:translate-x-1 transition-all inline-block">Visit Showroom</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-amber-500 hover:translate-x-1 transition-all inline-block">Contact Support</a></li>
            </ul>
          </div>

          {/* Interaction & Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-amber-500 flex items-center space-x-2">
              <span className="w-4 h-0.5 bg-amber-500"></span>
              <span>Connect</span>
            </h4>
            <p className="text-slate-400 mb-6 text-xs leading-relaxed uppercase tracking-widest font-bold">Stay Updated</p>
            
            <form 
              action={NEWSLETTER_FORM_URL} 
              method="POST" 
              target="_blank"
              className="flex bg-white/5 border border-white/10 rounded-2xl p-1.5 focus-within:ring-2 focus-within:ring-amber-500/50 transition-all mb-8"
            >
              <input 
                type="email" 
                name="entry.EMAIL"
                placeholder="Work email..." 
                required
                className="bg-transparent border-none px-4 py-2.5 flex-grow outline-none text-sm text-white" 
              />
              <button 
                type="submit"
                className="group bg-amber-500 hover:bg-amber-600 text-slate-900 p-2.5 rounded-xl font-bold transition-all active:scale-95"
              >
                <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <div className="bg-white/5 p-2 rounded-lg"><MapPin className="w-4 h-4 text-amber-500" /></div>
                <span>Shop G1 No11/F line building materials mararaba, Nasarawa State.</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <div className="bg-white/5 p-2 rounded-lg"><Phone className="w-4 h-4 text-amber-500" /></div>
                <span>+234 (0)9051572088</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <div className="bg-white/5 p-2 rounded-lg"><Mail className="w-4 h-4 text-amber-500" /></div>
                <span>nnadiizuchukwu6@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>© {new Date().getFullYear()} IZU-GOLD Building Materials. Crafted for Excellence.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;