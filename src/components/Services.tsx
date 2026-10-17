import {
  Smartphone,
  Battery,
  Monitor,
  Cpu,
  Droplets,
  Camera,
  Settings,
  Headphones,
  HardDrive,
  Zap,
  Shield,
  Wifi,
  Phone,
  ArrowRight,
  Wrench,
  CircuitBoard,
} from "lucide-react";

const featuredServices = [
  {
    icon: Monitor,
    title: "Screen Replacement",
    slug: "screen-replacement-behala",
    description:
      "Cracked or broken screen? Replacement displays for Samsung, iPhone, Vivo, Oppo, Realme & more.",
    gradient: "from-orange-600/90 to-red-700/90",
    price: "₹800+",
    tag: "Most Popular",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    slug: "battery-replacement-behala",
    description:
      "Phone draining fast? New battery fitted, with a battery health check.",
    gradient: "from-green-600/90 to-emerald-700/90",
    price: "₹500+",
    tag: "Quick Fix",
  },
  {
    icon: Cpu,
    title: "Motherboard Repair",
    slug: "dead-phone-motherboard-repair-behala",
    description:
      "Expert chip-level repair for dead phones, restart issues, and network problems.",
    gradient: "from-purple-600/90 to-indigo-700/90",
    price: "₹1,000+",
    tag: "Advanced",
  },
  {
    icon: Droplets,
    title: "Water Damage Repair",
    slug: "water-damage-phone-repair-behala",
    description:
      "Dropped in water? Ultrasonic cleaning and micro-soldering to save your device.",
    gradient: "from-cyan-600/90 to-blue-700/90",
    price: "₹800+",
    tag: "Emergency",
  },
];

const otherServices = [
  { icon: Settings, title: "Software & OS Fix", color: "text-amber-500", bg: "bg-amber-500/10" },
  { icon: Camera, title: "Camera Repair", color: "text-pink-500", bg: "bg-pink-500/10" },
  { icon: Wifi, title: "Charging Port Fix", color: "text-orange-500", bg: "bg-orange-500/10" },
  { icon: Headphones, title: "Speaker & Mic Fix", color: "text-teal-500", bg: "bg-teal-500/10" },
  { icon: HardDrive, title: "Data Recovery", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { icon: Smartphone, title: "Back Panel Replace", color: "text-slate-400", bg: "bg-slate-500/10" },
  { icon: Zap, title: "Fast Charging Fix", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: Shield, title: "Accessories & Guards", color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#1a2230] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-full dot-pattern opacity-30" />
      {/* Floating mobile parts */}
      <div className="absolute top-[10%] right-[5%] animate-float-slow opacity-10">
        <Wrench size={36} className="text-primary" />
      </div>
      <div className="absolute bottom-[15%] left-[3%] animate-float opacity-10" style={{ animationDelay: "1.5s" }}>
        <CircuitBoard size={32} className="text-accent" />
      </div>
      <div className="absolute top-[50%] right-[8%] animate-float-slow opacity-8" style={{ animationDelay: "0.8s" }}>
        <Cpu size={28} className="text-green-400" />
      </div>
      <div className="absolute bottom-[30%] right-[15%] animate-float opacity-[0.06]" style={{ animationDelay: "2s" }}>
        <Smartphone size={40} className="text-primary-light" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white/90">
            Complete Mobile <span className="gradient-text">Repair Solutions</span>
          </h2>
          <p className="text-[#5a6a7e] mt-4">
            From screen cracks to motherboard issues — we fix everything.
            All brands, all models, one stop solution.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featuredServices.map((service) => (
            <div
              key={service.title}
              className="group relative bg-[#161e2a] rounded-2xl overflow-hidden card-hover card-glow shimmer-effect tool-cursor border border-[rgba(255,255,255,0.06)]"
            >
              {/* Gradient accent on top */}
              <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />

              <div className="p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <service.icon size={26} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-xl text-white/90 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#4a5a6e] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-black text-lg">{service.price}</span>
                  <a
                    href={`/${service.slug}`}
                    className="flex items-center gap-1 text-sm font-semibold text-[#8494a7] hover:text-primary group-hover:text-primary transition-colors group-hover:gap-2"
                  >
                    Details &amp; price <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.03] to-transparent rounded-tl-[3rem]" />
            </div>
          ))}
        </div>

        {/* Other Services */}
        <div className="bg-[#161e2a] rounded-2xl border border-[#1e2738] p-8 shadow-sm">
          <h3 className="font-bold text-lg text-white/90 mb-6 text-center">
            More Services We Offer
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherServices.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1e2738] transition-colors group cursor-pointer"
              >
                <div className={`w-10 h-10 ${service.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <service.icon size={18} className={service.color} />
                </div>
                <span className="text-sm font-semibold text-[#8494a7] group-hover:text-white/90">
                  {service.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[#161e2a] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[rgba(255,255,255,0.06)] neon-border">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center animate-pulse-glow">
              <Phone size={26} className="text-primary" />
            </div>
            <div>
              <p className="font-bold text-lg text-white/90">Issue not listed?</p>
              <p className="text-[#8494a7]">We fix that too! Free diagnosis on every phone.</p>
            </div>
          </div>
          <a
            href="tel:+918981572938"
            className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 whitespace-nowrap"
          >
            089815 72938
          </a>
        </div>
      </div>
    </section>
  );
}
