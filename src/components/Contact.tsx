import { MapPin, Phone, Clock, Navigation, MessageCircle, Smartphone, Wrench, Wifi } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#1a2230] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      {/* Floating mobile parts */}
      <div className="absolute top-[8%] right-[5%] animate-float-slow opacity-10">
        <Smartphone size={32} className="text-primary" />
      </div>
      <div className="absolute bottom-[12%] left-[4%] animate-float opacity-[0.08]" style={{ animationDelay: "1.2s" }}>
        <Wrench size={28} className="text-accent" />
      </div>
      <div className="absolute top-[50%] left-[6%] animate-float-slow opacity-[0.06]" style={{ animationDelay: "0.5s" }}>
        <Wifi size={24} className="text-primary-light" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white/90">
            Visit Us <span className="gradient-text">Today</span>
          </h2>
          <p className="text-[#5a6a7e] mt-4">
            Diamond Harbour Road, Behala — near Balanand Hospital. Easy to find!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#2a3545] h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5!2d88.3202662!3d22.5067602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bd2c60c2661%3A0xae83727af8bb05c2!2sPARAS%20MOBILE%20REPAIRING%20AND%20SERVICE%20CENTRE!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paras Mobile Repairing Location"
            />
          </div>

          {/* Contact Cards */}
          <div className="space-y-5">
            {/* Address */}
            <div className="bg-[#161e2a] rounded-2xl p-6 flex gap-4 card-hover border border-[#1e2738] group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <MapPin size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white/90 mb-1">Address</h3>
                <p className="text-[#8494a7] text-sm">
                  151, Diamond Harbour Rd, near Balanand Hospital,
                  Gholeshapur, Behala, Kolkata, West Bengal 700034
                </p>
                <a
                  href="https://www.google.com/maps/place/PARAS+MOBILE+REPAIRING+AND+SERVICE+CENTRE/@22.5067602,88.3202662,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary text-sm font-bold mt-2 hover:underline"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#161e2a] rounded-2xl p-6 flex gap-4 card-hover border border-[#1e2738] group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white/90 mb-1">Phone</h3>
                <a href="tel:+918981572938" className="text-2xl font-black text-primary hover:underline">
                  089815 72938
                </a>
                <p className="text-sm text-[#5a6a7e] mt-1">Call for instant quote</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#161e2a] rounded-2xl p-6 flex gap-4 card-hover border border-[#1e2738] group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white/90 mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/918981572938?text=Hi%20Paras%20Mobile!%20I%20need%20help%20with%20my%20phone."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 font-bold hover:underline"
                >
                  Chat with us on WhatsApp
                </a>
                <p className="text-sm text-[#5a6a7e] mt-1">Send damage photos for quick quote</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#161e2a] rounded-2xl p-6 flex gap-4 card-hover border border-[#1e2738] group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <Clock size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white/90 mb-2">Business Hours</h3>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between gap-8">
                    <span className="text-[#5a6a7e]">Mon - Sun</span>
                    <span className="font-bold text-white/90">10 AM - 10 PM</span>
                  </div>
                </div>
                <p className="text-xs text-primary font-bold mt-2">Open 7 days a week!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
