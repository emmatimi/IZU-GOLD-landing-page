import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const reviews: Testimonial[] = [
    {
      name: "Engr. David Okoro",
      role: "Lead Architect, Horizon Builders",
      content: "IZU-GOLD has been our primary supplier for over 5 years. Their plumbing pipes and water pumps are world-class. Never had a single failure on site.",
      avatar: "https://picsum.photos/seed/david/100/100"
    },
    {
      name: "Mrs. Sarah Jenkins",
      role: "Homeowner",
      content: "The variety of tiles they have is incredible. I was able to get premium Italian designs at a fraction of what other showrooms were charging.",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Chief Musa Ibrahim",
      role: "Real Estate Developer",
      content: "What sets them apart is the expertise. Their staff actually knows plumbing, they don't just sell. The delivery is always on time too.",
      avatar: "https://picsum.photos/seed/musa/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-3">Community Feedback</h2>
          <h3 className="text-4xl font-montserrat font-bold text-slate-900">What Our Partners Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-3xl relative group hover:bg-slate-900 transition-colors duration-500">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-amber-500/20 group-hover:text-amber-500/10" />
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed group-hover:text-slate-300 transition-colors">
                "{r.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover border-2 border-amber-500" />
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-white transition-colors">{r.name}</h4>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;