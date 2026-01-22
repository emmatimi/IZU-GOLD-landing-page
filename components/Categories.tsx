
import React, { useState, useEffect, useRef } from 'react';
import { 
  Droplets, 
  ShowerHead, 
  Layers, 
  Waves, 
  ChevronDown,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Ruler,
  Package,
  Info
} from 'lucide-react';


const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

interface ProductPreview {
  name: string;
  description: string;
  image: string;
}

interface CategoryItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  products: ProductPreview[];
}

interface CategoriesProps {
  onSelectCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  const categories: CategoryItem[] = [
    {
      id: "plumbing",
      title: "Plumbing Pipes & Fittings",
      description: "High-grade PPR, PVC, and galvanized pipes with precision connectors for leak-proof systems.",
      icon: <Droplets className="w-10 h-10" />,
      products: [
        { 
          name: "PVC Tubes", 
          description: "ELightweight, corrosion-resistant pipes used for efficient plumbing and waste drainage. They are easy to install and offer long-lasting, leak-proof performance.",
          image: "https://www.phtopindustry.com/wp-content/uploads/2024/08/Standard-pvc-pipe-sizes-4.jpg?auto=format&fit=crop&q=80&w=600"
        },
        { 
          name: "Heavy-Duty UPVC Fittings", 
          description: "Precision-molded connectors designed for maximum leak resistance and long-term chemical durability.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMCn0rf_TWSBtkUt5vGSqU6fuSbozljXluQ&s?auto=format&fit=crop&q=80&w=600"
        }
      ]
    },
    {
      id: "sanitary",
      title: "Sanitary Fixtures",
      description: "Elegant bathroom suites, ceramic basins, and water-efficient closets from world-renowned designers.",
      icon: <ShowerHead className="w-10 h-10" />,
      products: [
         { 
          name: "Smart Wall-Hung Closet", 
          description: "Space-saving design featuring dual-flush technology, soft-close antimicrobial seat, and nano-glaze finish.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1S72e7tPnlvlw-xyF5JhysKVw5UvjxLoBg&s?auto=format&fit=crop&q=80&w=600"
        },
        { 
          name: "Sanitary wares & fittings", 
          description: "Space-saving design featuring dual-flush technology, soft-close antimicrobial seat, and nano-glaze finish.",
          image: "https://cleaneat.ng/wp-content/uploads/2022/02/sanitarywares.jpg?auto=format&fit=crop&q=80&w=600"
        },
        { 
          name: "Thermostatic Rainfall Set", 
          description: "Luxury shower system with precise temperature control and air-injection technology for a natural rain feel.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEol5erFVR3eu0xp0J3mx-uGlnVwsGVAREcw&s?auto=format&fit=crop&q=80&w=600"
        }
      ]
    },
    {
      id: "roofing",
      title: "Roofing Sheets & Tiles",
      description: "Premium stone-coated roofing tiles and long-span aluminium sheets that combine beauty with durability.",
      icon: <Layers className="w-10 h-10" />,
      products: [
        { 
          name: "Alluminium roofs", 
          description: "Rust-proof and lightweight sheets ideal for reflecting heat and resisting coastal corrosion. They provide a modern look with minimal maintenance requirements.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBNNzuPWEjNIJwQEZgMiEBbSjDg-Hp5lzCQ&s?auto=format&fit=crop&q=80&w=600"
        },
            { 
          name: "Stone Coated roof", 
          description: "Durable steel tiles with a stone finish that combine high-end aesthetics with extreme weather resistance. They offer the beauty of traditional shingles with the strength of metal.",
          image: "https://s.alicdn.com/@sc04/kf/H5717bd6f28ae4fa4b35f02ce81da576bt/Shingle-Tile-Prime-Quality-Galvalume-Steel-Substrate-Roofing-Sheet-Stone-Metal-Coated-Roof-Tile-for-Villa-and-Apartment.jpg?auto=format&fit=crop&q=80&w=600"
        },
        { 
          name: "Stone-Coated Bond Tile", 
          description: "Aluzinc steel base with natural stone chips. Fire-resistant, sound-dampening, and high-wind rated.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9x8Pgh7T5SdZ4ikEq41vYgLxcgSGD4_i1g&s?auto=format&fit=crop&q=80&w=600"
        },
        { 
          name: "Ceramic Tiles", 
          description: "Hard-wearing, water-resistant surfaces perfect for adding style and cleanliness to floors and walls. They are easy to maintain and come in diverse decorative designs.",
          image: "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2024/10/14130155/different-types-of-ceramic-tile-designs.jpg?auto=format&fit=crop&q=80&w=600"
        }
      ]
    },
    {
      id: "water",
      title: "Water Management",
      description: "Robust overhead tanks and high-performance pumps to guarantee consistent supply.",
      icon: <Waves className="w-10 h-10" />,
      products: [
        { 
          name: "Deep well Submersible Borehole water pump", 
          description: "A high-efficiency motor designed to stay underwater and push water from deep boreholes to the surface. It is the core component for reliable, independent water access.",
          image: "https://atwinengineering.com/wp-content/uploads/2025/01/1.0hp-Deep-Well-Pumps-Submersible-Borehole-Water-Pump.webp?auto=format&fit=crop&q=80&w=600"
        },
           { 
          name: "Water Storage Tank", 
          description: "Large, UV-protected containers used to store water for consistent pressure and backup supply. They ensure you have water available even during pump maintenance or power cuts.",
          image: "https://cleaneat.ng/wp-content/uploads/2022/02/gp-tank-price-jumia.jpg?auto=format&fit=crop&q=80&w=600"
        },
        { 
          name: "Anti-Algae Storage Tank", 
          description: "Triple-layer UV-stabilized plastic construction. Designed to keep water cool and free from bacteria.",
          image: "https://www.butylproducts.co.uk/wp-content/uploads/2016/03/Tanks-with-Aniti-Algae-Covers_2_tinyP.jpg?auto=format&fit=crop&q=80&w=600"
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.category-card-trigger');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="categories" ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal active">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-3">Materials Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-4 tracking-tight">Structured Supply Categories</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Explore our curated inventory of high-performance materials. Expand any category to view our flagship products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {categories.map((cat, idx) => (
            <div 
              key={cat.id} 
              data-index={idx}
              className={`category-card-trigger transition-all duration-1000 ease-out bg-white rounded-[3rem] p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100 group ${
                visibleItems[idx] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-95 pointer-events-none'
              } ${expandedIndex === idx ? 'ring-2 ring-amber-500/20 shadow-2xl z-10' : 'hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]'}`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 text-center md:text-left">
                <div className={`p-6 rounded-3xl shrink-0 transition-all duration-500 ${expandedIndex === idx ? 'bg-amber-500 text-white shadow-xl scale-110' : 'bg-slate-50 text-slate-900 group-hover:bg-amber-50 group-hover:text-amber-600'}`}>
                  {cat.icon}
                </div>
                <div>
                  <h4 className="text-3xl font-montserrat font-bold text-slate-900 mb-3 leading-tight">
                    {cat.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="w-full">
                <button 
                  onClick={() => handleToggle(idx)}
                  className={`w-full flex items-center justify-between px-8 py-5 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] transition-all duration-300 border ${
                    expandedIndex === idx 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                      : 'bg-white text-slate-800 border-slate-200 hover:border-amber-400 hover:text-amber-600 shadow-sm'
                  }`}
                >
                  <span>{expandedIndex === idx ? 'Close Catalog' : 'Show Products'}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${expandedIndex === idx ? 'rotate-180' : ''}`} />
                </button>

                <div 
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    expandedIndex === idx 
                      ? 'max-h-[1500px] opacity-100 mt-10 visible' 
                      : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="space-y-10">
                    <div className="grid grid-cols-1 gap-8">
                      {cat.products.map((prod, pIdx) => (
                        <div key={pIdx} className="flex flex-col md:flex-row gap-6 group/prod bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                          <div className="w-full md:w-40 h-40 shrink-0 rounded-2xl overflow-hidden shadow-md">
                            <img 
                              src={prod.image} 
                              alt={prod.name} 
                              className="w-full h-full object-cover group-hover/prod:scale-110 transition-transform duration-500" 
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h5 className="text-xl font-bold text-slate-900 mb-2 group-hover/prod:text-amber-600 transition-colors">
                              {prod.name}
                            </h5>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium">
                              {prod.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                          href={`https://wa.me/2348001234567?text=Hello IZU-GOLD, I am interested in more details regarding ${cat.title}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-grow flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-black py-5 rounded-2xl uppercase text-xs tracking-[0.2em] shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all"
                        >
                          <WhatsAppIcon className="w-5 h-5" />
                          <span>Contact for More Details</span>
                        </a>
                        <a 
                          href="tel:+2349051572088"
                          className="flex items-center justify-center p-5 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all active:scale-[0.98]"
                        >
                          <PhoneCall className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-6">
                        Site-Ready Inventory • Lagos-Wide Delivery • Certified Quality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Indicators */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700">
          <div className="flex items-center justify-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-amber-500" />
            <span className="text-xs font-black uppercase tracking-widest">Certified</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Ruler className="w-6 h-6 text-amber-500" />
            <span className="text-xs font-black uppercase tracking-widest">Precision</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Package className="w-6 h-6 text-amber-500" />
            <span className="text-xs font-black uppercase tracking-widest">Wholesale</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Info className="w-6 h-6 text-amber-500" />
            <span className="text-xs font-black uppercase tracking-widest">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
