import { Smartphone, Wrench, Cpu } from "lucide-react";

const brands = [
  { name: "Samsung", letter: "S", color: "from-blue-600/90 to-blue-800/90" },
  { name: "iPhone", letter: "", color: "from-gray-500/90 to-gray-800/90" },
  { name: "Vivo", letter: "V", color: "from-blue-500/90 to-blue-700/90" },
  { name: "Oppo", letter: "O", color: "from-green-600/90 to-green-800/90" },
  { name: "Realme", letter: "R", color: "from-yellow-600/90 to-amber-700/90" },
  { name: "OnePlus", letter: "1+", color: "from-red-600/90 to-red-800/90" },
  { name: "Xiaomi", letter: "Mi", color: "from-orange-600/90 to-orange-800/90" },
  { name: "Poco", letter: "P", color: "from-yellow-500/90 to-yellow-700/90" },
  { name: "Motorola", letter: "M", color: "from-indigo-600/90 to-indigo-800/90" },
  { name: "Nothing", letter: "( )", color: "from-gray-600/90 to-gray-900/90" },
  { name: "Pixel", letter: "G", color: "from-green-500/90 to-teal-700/90" },
  { name: "iQOO", letter: "iQ", color: "from-orange-700/90 to-red-800/90" },
];

export default function BrandsWeRepair() {
  return (
    <section className="py-16 bg-[#1a2230] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      {/* Floating mobile parts */}
      <div className="absolute top-[15%] right-[4%] animate-float-slow opacity-10">
        <Smartphone size={32} className="text-primary" />
      </div>
      <div className="absolute bottom-[20%] left-[5%] animate-float opacity-[0.08]" style={{ animationDelay: "1.2s" }}>
        <Wrench size={28} className="text-accent" />
      </div>
      <div className="absolute top-[50%] left-[8%] animate-float-slow opacity-[0.06]" style={{ animationDelay: "0.7s" }}>
        <Cpu size={24} className="text-green-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">All Brands</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white/90">
            We Repair <span className="gradient-text">Every Brand</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div key={brand.name} className="group">
              <div className="bg-[#161e2a] rounded-2xl p-5 text-center card-hover border border-[#1e2738] group-hover:border-primary/30 relative overflow-hidden cursor-pointer">
                {/* Hover background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`relative z-10 w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:scale-110 transition-transform`}>
                  {brand.letter}
                </div>
                <p className="relative z-10 text-sm font-bold text-[#8494a7] group-hover:text-white transition-colors">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#4a5a6e] mt-8 text-sm">
          + All other Android & iOS brands. Your brand not listed? We still fix it!
        </p>
      </div>
    </section>
  );
}
