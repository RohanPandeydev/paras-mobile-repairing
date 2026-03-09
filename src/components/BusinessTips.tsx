import {
  TrendingUp,
  Instagram,
  Youtube,
  MapPin,
  Gift,
  Users,
  Megaphone,
  ShoppingBag,
  ArrowUpRight,
  Wrench,
  Cpu,
  Zap,
} from "lucide-react";

const tips = [
  {
    icon: Instagram,
    title: "Start Instagram & Facebook",
    description:
      "Post before/after repair reels. Screen replacement videos go viral! Use #MobileRepairKolkata #BehalaRepair",
    priority: "High",
    color: "from-pink-600/90 to-purple-700/90",
  },
  {
    icon: Youtube,
    title: "Create YouTube Shorts",
    description:
      "Satisfying repair videos build trust and attract customers from across Kolkata.",
    priority: "High",
    color: "from-red-600/90 to-red-800/90",
  },
  {
    icon: MapPin,
    title: "Optimize Google Business",
    description:
      "Add photos weekly, respond to reviews, ask every happy customer for a Google review. Your #1 free marketing tool.",
    priority: "High",
    color: "from-blue-600/90 to-blue-800/90",
  },
  {
    icon: Gift,
    title: "Referral Program",
    description:
      '"Refer a friend, both get ₹100 off" — word of mouth is powerful in Behala!',
    priority: "Medium",
    color: "from-amber-600/90 to-orange-700/90",
  },
  {
    icon: Users,
    title: "Loyalty Card System",
    description:
      "Every 5th repair gets 20% off or free screen guard. Keeps customers coming back.",
    priority: "Medium",
    color: "from-emerald-600/90 to-green-700/90",
  },
  {
    icon: Megaphone,
    title: "Local Area Marketing",
    description:
      "Flex banners near Balanand Hospital. Pamphlets in nearby housing societies with offers.",
    priority: "Medium",
    color: "from-indigo-600/90 to-violet-700/90",
  },
  {
    icon: ShoppingBag,
    title: "Sell Accessories & Refurbished",
    description:
      "Stock popular accessories and sell quality refurbished phones for steady income.",
    priority: "Medium",
    color: "from-teal-600/90 to-cyan-700/90",
  },
  {
    icon: TrendingUp,
    title: "Pickup & Delivery Service",
    description:
      "Free pickup within 3-5 km for repairs above ₹1000. Convenience wins customers.",
    priority: "Low",
    color: "from-gray-500/90 to-gray-700/90",
  },
];

export default function BusinessTips() {
  return (
    <section className="py-20 bg-[#0d1117] relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-15" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      {/* Floating mobile parts */}
      <div className="absolute top-[12%] right-[6%] animate-float opacity-10">
        <Wrench size={32} className="text-primary" />
      </div>
      <div className="absolute bottom-[18%] left-[4%] animate-float-slow opacity-[0.08]" style={{ animationDelay: "1.5s" }}>
        <Cpu size={28} className="text-accent" />
      </div>
      <div className="absolute top-[45%] left-[6%] animate-float opacity-[0.06]" style={{ animationDelay: "0.8s" }}>
        <Zap size={24} className="text-yellow-400" />
      </div>
      {/* Rotating gear */}
      <div className="absolute top-[30%] right-[3%] animate-spin-slow opacity-[0.05]">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Growth Tips</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white/90">
            How to <span className="gradient-text">Grow Your Business</span>
          </h2>
          <p className="text-[#8494a7] mt-4">
            Actionable strategies to attract more customers and increase revenue.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-[#161e2a] rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] card-hover group neon-border relative overflow-hidden"
            >
              {/* Priority badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                    tip.priority === "High"
                      ? "bg-red-500/20 text-red-400 border border-red-500/30"
                      : tip.priority === "Medium"
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                        : "bg-gray-500/20 text-[#8494a7] border border-gray-500/30"
                  }`}
                >
                  {tip.priority}
                </span>
              </div>

              <div className="flex gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${tip.color} rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <tip.icon size={22} className="text-white" />
                </div>
                <div className="flex-1 pr-16">
                  <h3 className="font-bold text-white/90 mb-1.5 group-hover:text-primary transition-colors flex items-center gap-1">
                    {tip.title}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </h3>
                  <p className="text-sm text-[#8494a7] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
