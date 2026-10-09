import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { faqs } from '../data/contentData';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Grand Wedding',
    date: '',
    location: '',
    budget: '₹75,000 - ₹1,50,000',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Jumpclicks team! I'm interested in booking a ${formData.service} shoot around ${formData.date || 'upcoming dates'} in ${formData.location || 'India'}. My name is ${formData.name || 'there'}. Can we discuss availability?`;
    window.open(`https://wa.me/919172322302?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-28 bg-[#090b13] border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-pink-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pink-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STARTUP CONSULTATION & BOOKINGS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let’s Engineer Your Vision
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Dates fill fast, especially during peak Indian wedding and brand campaign seasons. Lock in your production slot today.
          </p>
        </div>

        {/* Main Grid: Form + Quick Connect */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          
          {/* Booking Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">Direct Production Inquiry</h3>
                <p className="text-xs text-slate-400 mt-0.5">Average response time: &lt; 2 hours</p>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                ● 2026/2027 Calendar Open
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Inquiry Received!</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. A Jumpclicks creative producer will review your dates and reach out within 2 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Ping Us Instantly on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Service Category *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Grand Wedding">Grand Cinematic Wedding</option>
                      <option value="Pre-Wedding">Pre-Wedding & Destination</option>
                      <option value="Editorial Bridal">Editorial Bridal & Groom</option>
                      <option value="Commercial Brand">Commercial & Fashion Campaign</option>
                      <option value="Maternity & Baby">Maternity & Baby Chronicles</option>
                      <option value="Milestone Event">Milestone Event / Birthday</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Event / Shoot Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Udaipur, Mumbai, Nagpur..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Target Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="Under ₹50,000">Under ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                    <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000 (Royal / Multi-Day)</option>
                    <option value="₹5,00,000+">₹5,00,000+ (Grand Destination Production)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Tell us about your creative vision & requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any details about guest count, venues, specific themes, or drone aerial needs..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Formal Booking Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Connect & Studio Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="bg-gradient-to-br from-emerald-950/70 via-[#0d281e] to-[#071711] rounded-3xl p-6 sm:p-7 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Instant WhatsApp Connect</h4>
                  <p className="text-xs text-emerald-300">Fastest way to check date availability</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Prefer speaking directly with the founders? Tap below to open a direct WhatsApp conversation with our production desk.
              </p>

              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Start WhatsApp Conversation</span>
              </button>
            </div>

            {/* Studio Coordinates */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Studio Telemetry
              </h4>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">+91 91723 22302</div>
                    <div className="text-[11px] text-slate-400">Available 10:00 AM – 9:00 PM IST</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">contact@jumpclicks.com</div>
                    <div className="text-[11px] text-slate-400">Commercial & Press Inquiries</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Pan-India Operations Base</div>
                    <div className="text-[11px] text-slate-400">Headquartered in Maharashtra • Mobile Crews Nationwide</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Standard Turnaround SLA</div>
                    <div className="text-[11px] text-slate-400">48-72h AI Highlights • 15-21d Full Delivery</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Everything You Need to Know About Our Tech Studio
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
