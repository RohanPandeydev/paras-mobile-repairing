import {
  Shield,
  Clock,
  BadgeCheck,
  IndianRupee,
  Eye,
  Wrench,
  Award,
  Users,
  Smartphone,
  ThumbsUp,
  Battery,
  Cpu,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Quick Repairs",
    description:
      "Simple repairs are often done while you wait. We tell you the expected time before we start.",
    accent: "from-green-600/90 to-emerald-700/90",
    number: "01",
  },
  {
    icon: BadgeCheck,
    title: "Quality-Checked Parts",
    description:
      "Every part is checked before fitting. We tell you which part goes in and its price before the repair.",
    accent: "from-blue-600/90 to-indigo-700/90",
    number: "02",
  },
  {
    icon: IndianRupee,
    title: "Affordable & Transparent",
    description:
      "Fair pricing with zero hidden charges. Exact cost told before repair starts.",
    accent: "from-amber-600/90 to-orange-700/90",
    number: "03",
  },
  {
    icon: Shield,
    title: "Warranty on Repairs",
    description:
      "Every repair comes with a warranty of at least 15 days. The exact period depends on the repair and is written on your bill.",
    accent: "from-purple-600/90 to-violet-700/90",
    number: "04",
  },
  {
    icon: Eye,
    title: "Repair in Front of You",
    description:
      "Watch your phone being repaired. Full transparency — nothing to hide.",
    accent: "from-cyan-600/90 to-teal-700/90",
    number: "05",
  },
  {
    icon: Wrench,
    title: "10+ Years Experience",
    description:
      "From basic fixes to advanced chip-level soldering. Decade of expertise.",
    accent: "from-red-600/90 to-rose-700/90",
    number: "06",
  },
];

const stats = [
  { icon: Smartphone, value: "5000+", label: "Phones Repaired" },
  { icon: Users, value: "All", label: "Brands Repaired" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: ThumbsUp, value: "4.8★", label: "Google Rating" },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 bg-[#121820] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
      {/* Floating mobile parts */}
      <div
        className="absolute top-[12%] left-[4%] animate-float opacity-10"
        style={{ animationDelay: "0.5s" }}
      >
        <Battery size={34} className="text-green-400" />
      </div>
      <div
        className="absolute bottom-[20%] right-[6%] animate-float-slow opacity-10"
        style={{ animationDelay: "1s" }}
      >
        <Cpu size={30} className="text-primary" />
      </div>
      <div
        className="absolute top-[60%] left-[7%] animate-float opacity-[0.07]"
        style={{ animationDelay: "2s" }}
      >
        <Zap size={28} className="text-yellow-400" />
      </div>
      {/* Rotating gear */}
      <div className="absolute bottom-[10%] left-[15%] animate-spin-slow opacity-[0.06]">
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary"
        >
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white/90">
            Why Behala Chooses <span className="gradient-text">Paras</span>
          </h2>
          <p className="text-[#8494a7] mt-4">
            We don&apos;t just fix phones — we build trust. Here&apos;s why
            Behala chooses Paras Mobile.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-[#161e2a] rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] card-hover group relative overflow-hidden neon-border tool-cursor"
            >
              {/* Number watermark */}
              <span className="absolute top-3 right-4 text-5xl font-black text-white/[0.03] group-hover:text-primary/10 transition-colors">
                {reason.number}
              </span>

              <div className="flex gap-4 relative z-10">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${reason.accent} rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <reason.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white/90 mb-1.5 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#8494a7] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-[#161e2a] rounded-2xl p-8 border border-[rgba(255,255,255,0.06)] neon-border group card-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon size={28} className="text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-black text-white/90">
                {stat.value}
              </p>
              <p className="text-sm text-[#8494a7] mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
