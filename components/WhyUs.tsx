
import React from 'react';
import { Award, Truck, DollarSign, Headphones } from 'lucide-react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      title: "Uncompromising Quality",
      description: "Every product we sell undergoes rigorous testing to meet international safety and durability standards."
    },
    {
      icon: <Truck className="w-8 h-8 text-amber-500" />,
      title: "Site-Ready Delivery",
      description: "Our logistics team ensures your materials arrive at your site exactly when you need them, preventing downtime."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-amber-500" />,
      title: "Value Pricing",
      description: "Direct-from-manufacturer sourcing allows us to offer premium materials at competitive wholesale prices."
    },
    {
      icon: <Headphones className="w-8 h-8 text-amber-500" />,
      title: "Expert Consultation",
      description: "Our onsite technical team provides advice on plumbing layouts and material selection for your specific needs."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">Professional Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-8 leading-tight">
              Why Professionals Trust <span className="text-amber-500">IZU-GOLDEN</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://ik.imagekit.io/4lndq5ke52/plumbing/wc1.jpeg?auto=format&fit=crop&q=80&w=1200" 
                alt="Contractor working"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-multiply"></div>
            </div>
            
            {/* Experience Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-amber-100 text-amber-600 p-3 rounded-full">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">10+</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 italic">
                "We don't just sell materials; we build the foundations of your future homes."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
