import { Check, Phone, Star, Wrench, Battery, Monitor, Cpu } from "lucide-react";

const pricingData = [
  {
    category: "Screen Replacement",
    icon: "🖥️",
    gradient: "from-orange-600/90 to-red-700/90",
    items: [
      { name: "Basic LCD (Vivo, Oppo, Realme)", price: "₹800 - ₹2,500" },
      { name: "AMOLED (Samsung, OnePlus)", price: "₹2,000 - ₹6,000" },
      { name: "iPhone Screen (All Models)", price: "₹2,500 - ₹12,000" },
      { name: "Tempered Glass", price: "₹100 - ₹500" },
    ],
  },
  {
    category: "Battery & Charging",
    icon: "🔋",
    gradient: "from-green-600/90 to-emerald-700/90",
    items: [
      { name: "Battery (Android)", price: "₹500 - ₹1,500" },
      { name: "Battery (iPhone)", price: "₹1,200 - ₹3,000" },
      { name: "Charging Port Repair", price: "₹300 - ₹800" },
      { name: "Fast Charging IC", price: "₹500 - ₹1,500" },
    ],
  },
  {
    category: "Software & Data",
    icon: "💾",
    gradient: "from-amber-600/90 to-orange-700/90",
    items: [
      { name: "Software / Flashing", price: "₹300 - ₹800" },
      { name: "Virus Removal", price: "₹200 - ₹500" },
      { name: "Data Recovery", price: "₹500 - ₹2,000" },
      { name: "FRP / Pattern Unlock", price: "₹300 - ₹1,000" },
    ],
  },
  {
    category: "Advanced Repair",
    icon: "🔧",
    gradient: "from-purple-600/90 to-violet-700/90",
    items: [
      { name: "Motherboard Repair", price: "₹1,000 - ₹5,000" },
      { name: "Water Damage", price: "₹800 - ₹3,000" },
      { name: "Camera Replacement", price: "₹500 - ₹3,000" },
      { name: "Speaker / Mic", price: "₹300 - ₹1,000" },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-15" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      {/* Floating mobile parts */}
      <div className="absolute top-[8%] left-[3%] animate-float opacity-10">
        <Battery size={34} className="text-green-400" />
      </div>
      <div className="absolute bottom-[12%] right-[4%] animate-float-slow opacity-10" style={{ animationDelay: "1.3s" }}>
        <Monitor size={30} className="text-primary" />
      </div>
      <div className="absolute top-[55%] right-[6%] animate-float opacity-[0.07]" style={{ animationDelay: "0.6s" }}>
        <Cpu size={26} className="text-accent" />
      </div>
      {/* Rotating gear */}
      <div className="absolute top-[20%] right-[12%] animate-spin-slow opacity-[0.05]">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white/90">
            Transparent & <span className="gradient-text">Affordable</span>
          </h2>
          <p className="text-[#8494a7] mt-4">
            No hidden charges. Exact quotes before repair. Prices vary by model.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {pricingData.map((category) => (
            <div
              key={category.category}
              className="bg-[#161e2a] rounded-2xl border border-[rgba(255,255,255,0.06)] overflow-hidden card-hover neon-border"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${category.gradient} px-6 py-5 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center gap-3 relative z-10">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-white font-bold text-lg">{category.category}</h3>
                </div>
              </div>

              {/* Items */}
              <div className="p-6">
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-center group/item">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span className="text-sm text-[#8494a7] group-hover/item:text-white/90 transition-colors">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-primary whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/20 to-amber-500/20 border border-primary/30 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-10" />
          <div className="relative z-10">
            <div className="flex justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-white/90 font-bold text-xl">
              Call for Exact Quote!
            </p>
            <p className="text-[#8494a7] text-sm mt-1 mb-5">
              Final price depends on your phone model and exact issue.
            </p>
            <a
              href="tel:+918981572938"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
            >
              <Wrench size={20} />
              Get Free Diagnosis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
