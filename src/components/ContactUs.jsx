import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Calendar,
  CheckCircle2 
} from 'lucide-react';
import { faqs } from '../data/contentData';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Wedding & Reception',
    date: '',
    location: '',
    budget: '₹50,000 - ₹1,00,000',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Jumpclicks Photography! I'm interested in booking a ${formData.service} shoot around ${formData.date || 'upcoming dates'} in ${formData.location || 'India'}. My name is ${formData.name || 'there'}. Can we discuss availability?`;
    window.open(`https://wa.me/918856002272?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#090b13] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-amber-300 mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOKINGS & CONSULTATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let’s Connect & Create Memories
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Dates for wedding and celebration seasons fill quickly. Send us a message or connect directly on WhatsApp to check availability.
          </p>
        </div>

        {/* Main Grid: Form + Quick Connect */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Booking Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 border border-white/10 bg-white/[0.02] shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">Booking Inquiry</h3>
                <p className="text-xs text-slate-400 mt-0.5">We typically respond within a few hours</p>
              </div>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                ● Calendar Open for 2026 / 2027
              </span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white">Inquiry Received!</h4>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our team will review your dates and contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Ping Us on WhatsApp for Faster Reply</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Photography Type *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Wedding & Reception">Wedding & Reception</option>
                      <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                      <option value="Bridal & Groom Portraits">Bridal & Groom Portraits</option>
                      <option value="Maternity & Baby Shoot">Maternity & Baby Shoot</option>
                      <option value="Birthday & Milestone Event">Birthday & Milestone Event</option>
                      <option value="Commercial / Other">Commercial / Other</option>
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      City / Venue Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nagpur, Mumbai, Pune..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Budget Preference
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Under ₹35,000">Under ₹35,000</option>
                    <option value="₹35,000 - ₹75,000">₹35,000 - ₹75,000</option>
                    <option value="₹75,000 - ₹1,50,000">₹75,000 - ₹1,50,000</option>
                    <option value="₹1,50,000 - ₹3,00,000">₹1,50,000 - ₹3,00,000 (Grand Multi-Day)</option>
                    <option value="₹3,00,000+">₹3,00,000+ (Destination Wedding)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Requirements & Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the ceremonies, number of days, venue, or any specific preferences..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-xl shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Booking Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Connect & Studio Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="rounded-3xl p-6 sm:p-7 border border-emerald-500/30 bg-emerald-950/20 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Instant WhatsApp Connect</h4>
                  <p className="text-xs text-emerald-300">Quickest way to check availability & rates</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Have questions or need a quick answer? Connect directly with our team on WhatsApp.
              </p>

              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Chat with Us on WhatsApp</span>
              </button>
            </div>

            {/* Studio Details */}
            <div className="rounded-3xl p-6 sm:p-7 border border-white/10 bg-white/[0.02] space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                Studio Details
              </h4>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">+91 88560 02272</div>
                    <div className="text-[11px] text-slate-400">Available 10:00 AM – 9:00 PM IST</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">contact@jumpclicks.com</div>
                    <div className="text-[11px] text-slate-400">General & Shoot Inquiries</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Pan-India Availability</div>
                    <div className="text-[11px] text-slate-400">Studio based in Maharashtra • Travel Nationwide</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Working Days</div>
                    <div className="text-[11px] text-slate-400">Monday to Sunday</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-medium text-amber-400 uppercase tracking-widest">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Common Questions About Our Photography
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
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
