
import React, { useState, useMemo } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ExternalLink, Navigation, Check, Copy } from 'lucide-react';

// Centralized business information
const BUSINESS_CONFIG = {
  address: "Shop G1 No11/F line building materials mararaba, Nasarawa State.",
   lat: 9.0494, 
  lng: 7.5936, 
  whatsapp: "2348145531842",
  phones: ["+234 (0)9051572088"],
  email: "nnadiizuchukwu6@gmail.com",
  hours: "Mon - Sat: 8:00 AM - 6:00 PM",
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdKSu9LqLrLFbLGuuACk-uDClYpEZnv7TwEnRo_7-s1y5Lzig/formResponse?usp=pp_url'
};

// Official WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const mapEmbedUrl = useMemo(() => {
    const { lat, lng } = BUSINESS_CONFIG;
    return `https://maps.google.com/maps?q=${lat},${lng}&ll=${lat},${lng}&z=16&output=embed&iwloc=near`;
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
          
          <div className="flex flex-col lg:flex-row">
            {/* Info Side */}
            <div className="lg:w-2/5 bg-slate-900 p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full translate-x-32 -translate-y-32"></div>
              
              <div className="flex justify-between items-center mb-8 relative z-10">
                <h3 className="text-3xl font-montserrat font-bold text-white">Get In Touch</h3>
              </div>

              <p className="text-slate-400 mb-12 relative z-10">
                Ready to start your project? Visit our showroom or contact us for a detailed quotation.
              </p>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-1">Call Us</p>
                    {BUSINESS_CONFIG.phones.map((phone, i) => (
                      <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-xl hover:text-amber-500 transition-colors text-white">{phone}</a>
                    ))}
                  </div>
                </div>

                {/* Updated WhatsApp Item */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#25D366]/10 p-3 rounded-lg text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#25D366] uppercase tracking-wider mb-1">WhatsApp</p>
                    <a 
                      href={`https://wa.me/${BUSINESS_CONFIG.whatsapp}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-xl hover:text-[#25D366] transition-colors text-white"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-1">Email Us</p>
                    <a href={`mailto:${BUSINESS_CONFIG.email}`} className="block text-xl hover:text-amber-500 transition-colors text-white">{BUSINESS_CONFIG.email}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-1">Visit Us</p>
                    <div className="flex items-start justify-between">
                      <p className="text-lg text-white leading-tight">{BUSINESS_CONFIG.address}</p>
                      <button 
                        onClick={handleCopy}
                        className={`p-2 rounded-lg transition-all ${copied ? 'text-green-500' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
                        title="Copy Address"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-1">Hours</p>
                    <p className="text-lg text-white">{BUSINESS_CONFIG.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-3/5 p-12">
              <h4 className="text-2xl font-bold text-slate-900 mb-8">Send Us a Message</h4>
              <form 
                action={BUSINESS_CONFIG.googleFormUrl}
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      name="entry.NAME" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      name="entry.PHONE" 
                      required
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" 
                      placeholder="+234..." 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Required</label>
                  <select 
                    name="entry.SERVICE" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none appearance-none"
                  >
                    <option value="">Select a category</option>
                    <option value="Plumbing Supplies">Plumbing Supplies</option>
                    <option value="Tiling Project">Tiling Project</option>
                    <option value="Water Tank Installation">Water Tank Installation</option>
                    <option value="Bulk Material Supply">Bulk Material Supply</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea 
                    name="entry.MESSAGE" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none h-32" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </div>
          </div>

          <div className="relative w-full h-[450px] bg-slate-100 border-t border-slate-100 group">
            <iframe
              title="IZU-GOLD Office Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={mapEmbedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-700 grayscale-[0.1] group-hover:grayscale-0"
            ></iframe>
            
            <div className="absolute top-6 right-6 z-10">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_CONFIG.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-slate-900 px-6 py-3.5 rounded-full font-bold shadow-2xl hover:bg-amber-500 hover:text-slate-900 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
