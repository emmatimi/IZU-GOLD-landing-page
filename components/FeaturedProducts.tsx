
import React, { useState, useMemo } from 'react';
import { Star, ArrowRight, ChevronUp, X, Filter } from 'lucide-react';

interface FeaturedProductsProps {
  selectedCategory?: string | null;
  onClearFilter?: () => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ selectedCategory, onClearFilter }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const allProducts = useMemo(() => [
    {
      name: "Bath-Shower Mixer with Cradle",
      image: "https://ik.imagekit.io/4lndq5ke52/plumbing/Bath-Shower%20Mixer%20with%20Cradle.jpeg?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      category: "Sanitary Fixtures",
      tag: "Premium"
    },
    {
      name: "Venice Ivory Marble Tile",
      image: "https://www.independentceramics.co.nz/wp-content/uploads/2024/08/Venice-range.jpg?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      category: "Roofing Sheets & Tiles",
      tag: "Premium"
    },
    {
      name: "Silent Flow Pumping System",
      image: "https://royal.ps/storage/products/September2021/Rlf63OazELvssCnrrneL.jpg?auto=format&fit=crop&q=80&w=600",
      rating: 4,
      category: "Water Storage & Management",
      tag: "Best Seller"
    },
    {
      name: "Eco-Dual Flush Closet",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojVzon6ZCsRCZPW4f7spQqUVGKFRvteO05Q&s?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      category: "Sanitary Fixtures",
      tag: "Eco-Grade"
    },
    {
      name: "Heavy-Duty PPR Pipe Set",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZWDWsjHzZaQ_xcK4Hm2zd4DpynSaLj5rYg&s?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      category: "Plumbing Pipes & Fittings",
      tag: "Quality"
    },
    {
      name: "Rainfall Shower System",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyktcUgfClWLS8aZgvq_73BqvqvWkDydyFXg&s?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      category: "Sanitary Fixtures",
      tag: "Luxury"
    },
     {
      name: "Rainfall Shower System",
      image: "https://ik.imagekit.io/4lndq5ke52/plumbing/rainfall%20shower.jpeg?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      category: "Sanitary Fixtures",
      tag: "Commercial"
    },
     {
      name: "Double Wash basin",
      image: "https://ik.imagekit.io/4lndq5ke52/plumbing/basin.jpeg?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      category: "Sanitary Fixtures",
      tag: "Luxury"
    },
    {
      name: "Quartz Kitchen Sink",
      image: "https://cdn.shopify.com/s/files/1/0725/9026/2329/files/81Cob5ZbW5L.jpg?v=1752322734?auto=format&fit=crop&q=80&w=600",
      rating: 4,
      category: "Plumbing Accessories",
      tag: "Modern"
    },
    {
      name: "Mosaic Glass Accent Tiles",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrX1IOYefWHPtv-3-K_51CAykoultUcuYVA&s?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      category: "Roofing Sheets & Tiles",
      tag: "Design"
    },
    {
      name: "Surface Water Pumping Machine",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7T2V-cF_Cja8GUc9VcMq26hjOT2U_in5kg&s7?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      category: "Water Storage & Management",
      tag: "Heavy-Duty"
    },
    {
      name: "Aluminium Step Tiles",
      image: "https://toweraluminiumroofingnigeria.com.ng/wp-content/uploads/2018/03/233667374_21_05_2022_02_42_30.png?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      category: "Roofing Sheets & Tiles",
      tag: "Standard"
    },
    {
      name: "HDPE Drainage Pipe 110mm (Slotted)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6SjtXOm2PVauoo5MNzDBfhKHcKffyEwsWw&s?auto=format&fit=crop&q=80&w=600",
      rating: 4,
      category: "Plumbing Pipes & Fittings",
      tag: "Reliable"
    }
  ], []);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return allProducts.slice(0, isExpanded ? allProducts.length : 4);
    return allProducts.filter(p => p.category === selectedCategory);
  }, [selectedCategory, allProducts, isExpanded]);

  return (
    <section id="products" className="py-24 bg-white transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 reveal">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-amber-500"></span>
              <span>{selectedCategory ? 'Filtered View' : 'Premium Selection'}</span>
            </div>
            <h3 className="text-4xl font-montserrat font-bold text-slate-900">
              {selectedCategory ? `${selectedCategory}` : 'Featured Materials Showcase'}
            </h3>
            {selectedCategory && (
              <button 
                onClick={onClearFilter}
                className="mt-2 text-slate-400 hover:text-amber-500 text-sm font-bold flex items-center space-x-1 transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Clear Category Filter</span>
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            {!selectedCategory && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={isExpanded ? "Collapse catalog" : "View the full IZU-GOLD product catalog"}
                className="group flex items-center space-x-3 bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl active:scale-95"
              >
                <span>{isExpanded ? "Show Featured Only" : "Explore Full Catalog"}</span>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            )}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in duration-700">
            {filteredProducts.map((p, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer reveal active"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-5 bg-slate-100 border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-900 px-2 py-1 rounded-md uppercase tracking-widest border border-slate-100 shadow-sm">
                      {p.tag}
                    </span>
                  </div>
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < p.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-200'} transition-transform group-hover:scale-110`} style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <h4 className="font-bold text-slate-900 text-lg leading-tight mb-1 group-hover:text-amber-600 transition-colors">
                  {p.name}
                </h4>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">{p.category}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center justify-center bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
            <Filter className="w-12 h-12 text-slate-300 mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">No products found in this category</h4>
            <p className="text-slate-500 mb-6">We are currently updating our digital catalog for {selectedCategory}.</p>
            <button 
              onClick={onClearFilter}
              className="bg-amber-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-all"
            >
              View All Products
            </button>
          </div>
        )}

        {!selectedCategory && isExpanded && (
          <div className="mt-16 flex justify-center animate-in fade-in slide-in-from-top-4">
             <button 
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-amber-500 font-bold flex items-center space-x-2 transition-colors"
            >
              <span>View Less Products</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
