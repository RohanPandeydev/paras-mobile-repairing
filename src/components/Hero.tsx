import {
  Phone,
  Shield,
  Clock,
  Star,
  ChevronDown,
  Wrench,
  CheckCircle,
  Cpu,
  Battery,
  Wifi,
  Zap,
} from "lucide-react";
import PhoneAssembly from "./PhoneAssembly";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-28"
    >
      {/* Animated background elements - floating repair parts */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

        {/* Circuit board pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-30" />

        {/* Floating tool icons */}
        <div className="absolute top-[15%] left-[5%] animate-float-slow opacity-20">
          <Wrench size={40} className="text-primary" />
        </div>
        <div className="absolute top-[25%] right-[8%] animate-float opacity-15" style={{ animationDelay: "1s" }}>
          <Cpu size={35} className="text-cyan-400" />
        </div>
        <div className="absolute bottom-[30%] left-[12%] animate-float-slow opacity-15" style={{ animationDelay: "2s" }}>
          <Battery size={30} className="text-green-400" />
        </div>
        <div className="absolute bottom-[20%] right-[15%] animate-float opacity-20" style={{ animationDelay: "0.5s" }}>
          <Wifi size={28} className="text-primary-light" />
        </div>
        <div className="absolute top-[60%] left-[25%] animate-float-slow opacity-10" style={{ animationDelay: "1.5s" }}>
          <Zap size={32} className="text-yellow-400" />
        </div>

        {/* Rotating gear */}
        <div className="absolute top-[10%] right-[20%] animate-spin-slow opacity-10">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-primary-light font-semibold">4.8★ on Google</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] animate-fade-in-up">
              We Fix What
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-amber-400">
                Others Can&apos;t
              </span>
            </h2>

            <p className="text-lg text-gray-400 mt-6 max-w-xl animate-fade-in-up delay-200 opacity-0 leading-relaxed">
              Behala&apos;s most trusted mobile repair centre. From cracked screens
              to dead motherboards — we bring your phone back to life with
              <span className="text-primary font-semibold"> genuine parts</span> and
              <span className="text-cyan-400 font-semibold"> expert hands</span>.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 mt-8 animate-fade-in-up delay-300 opacity-0">
              {[
                { icon: Clock, label: "30 Min Fix", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
                { icon: Shield, label: "Warranty", color: "text-primary", bg: "bg-primary/10 border-primary/20" },
                { icon: Wrench, label: "10+ Years", color: "text-cyan-400", bg: "bg-cyan-400/10 border-cyan-400/20" },
              ].map((badge) => (
                <div key={badge.label} className={`flex items-center gap-2 ${badge.bg} border rounded-full px-4 py-2`}>
                  <badge.icon size={16} className={badge.color} />
                  <span className="text-sm font-semibold text-white">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up delay-400 opacity-0">
              <a
                href="tel:+918981572938"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-primary/30 animate-pulse-glow"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/918981572938?text=Hi%20Paras%20Mobile!%20I%20need%20help%20with%20my%20phone."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:border-primary/50"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.723-6.016-1.95l-.42-.316-2.651.889.889-2.651-.316-.42A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Animated Phone Assembly */}
          <div className="hidden lg:flex justify-center">
            <PhoneAssembly />
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#1a2230" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <a href="#services" className="text-primary/50 bounce-down block">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
