import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Home, LayoutGrid, Info, Star, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
    { name: 'Categories', href: '#categories', icon: <LayoutGrid className="w-4 h-4" /> },
    { name: 'About', href: '#about', icon: <Info className="w-4 h-4" /> },
    { name: 'Testimonials', href: '#testimonials', icon: <Star className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 40);

      let current = '';
      const headerOffset = 150;

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.getBoundingClientRect().top + scrollPos;
          if (scrollPos >= top - headerOffset) {
            current = sectionId;
          }
        }
      }

      if (scrollPos < 100) {
        current = 'home';
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
      return;
    }

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* 1. Branding */}
         <div 
            className="flex flex-col cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <span className={`text-2xl font-montserrat font-extrabold tracking-tighter transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              IZU<span className="text-amber-500 transition-transform group-hover:scale-110 inline-block">-GOLD</span>
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-amber-500 leading-none -mt-1 ml-1 opacity-90 transition-opacity group-hover:opacity-100">
              Sweet Home
            </span>
          </div>

          {/* 2. Desktop Navigation (Center) */}
          <nav className="hidden lg:flex items-center bg-slate-900/5 backdrop-blur-md border border-slate-900/10 rounded-full px-2 py-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
                    isActive 
                      ? 'text-white bg-amber-500 shadow-md' 
                      : isScrolled 
                        ? 'text-slate-600 hover:text-amber-500 hover:bg-slate-200/50' 
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* 3. Action Button (Right) */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={(e) => scrollToSection(e as any, '#contact')}
              className="bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-tighter transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95 flex items-center group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className={`${isScrolled ? 'text-slate-900' : 'text-white'} p-2 hover:bg-amber-500/10 rounded-full transition-colors`}
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Classic Professional Side Drawer */}
      <div 
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Drawer Content */}
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 flex justify-between items-center border-b border-slate-100">
            <span className="text-xl font-montserrat font-extrabold text-slate-900">IZU<span className="text-amber-500">-GOLD</span></span>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-slate-400 hover:text-slate-900 p-2 transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto py-4">
            <nav className="px-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a 
                    key={link.name}
                    href={link.href}
                    className={`flex items-center space-x-4 px-4 py-3.5 rounded-xl font-semibold transition-all ${
                      isActive 
                        ? 'bg-amber-50 text-amber-600' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    <span className={`${isActive ? 'text-amber-500' : 'text-slate-400'}`}>
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-8 px-8 space-y-6">
              <div className="h-px bg-slate-100 w-full"></div>
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Our Office</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span className="text-sm">+234 (0)9051572088</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600">
                    <Mail className="w-4 h-4 text-amber-500" />
                    <span className="text-sm">nnadiizuchukwu6@gmail.com</span>
                  </div>
                  <div className="flex items-start space-x-3 text-slate-600">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm leading-snug">Shop G1 No11/F line building materials mararaba, Nasarawa State.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <button 
              onClick={(e) => scrollToSection(e as any, '#contact')}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest shadow-lg hover:bg-amber-500 hover:text-slate-900 transition-all flex items-center justify-center space-x-2"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
