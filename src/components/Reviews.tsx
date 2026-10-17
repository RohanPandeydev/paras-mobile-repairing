import { Star, Quote, ExternalLink, Smartphone, Wrench, Battery } from "lucide-react";

const reviews = [
  {
    name: "Papiya Gupta",
    rating: 5,
    text: "This shop fellow did the repairing work on my redmi phone quite fast and well. Also the charges were reasonable.",
    time: "11 months ago",
    initial: "P",
    color: "from-pink-600/90 to-rose-700/90",
  },
  {
    name: "Krishna Thakur",
    rating: 5,
    text: "One of the best earphone and mobile repairing shop in kolkata.. Amazing work and great service!",
    time: "2 years ago",
    initial: "K",
    color: "from-blue-600/90 to-indigo-700/90",
  },
  {
    name: "Arsalan Dawood",
    rating: 5,
    text: "Nice experience. Cheap and best!",
    time: "2 years ago",
    initial: "A",
    color: "from-emerald-600/90 to-teal-700/90",
  },
  {
    name: "Sayan Dutta",
    rating: 4,
    text: "",
    time: "6 months ago",
    initial: "S",
    color: "from-purple-600/90 to-violet-700/90",
    badge: "Local Guide",
  },
  {
    name: "Rahul Yadav",
    rating: 5,
    text: "",
    time: "2 years ago",
    initial: "R",
    color: "from-amber-600/90 to-orange-700/90",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#1a2230] relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      {/* Floating mobile parts */}
      <div className="absolute top-[10%] left-[4%] animate-float-slow opacity-10">
        <Smartphone size={30} className="text-primary" />
      </div>
      <div className="absolute bottom-[15%] right-[5%] animate-float opacity-[0.08]" style={{ animationDelay: "1s" }}>
        <Wrench size={28} className="text-accent" />
      </div>
      <div className="absolute top-[60%] right-[10%] animate-float-slow opacity-[0.06]" style={{ animationDelay: "2s" }}>
        <Battery size={26} className="text-green-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white/90">
            Real Reviews from <span className="gradient-text">Real Customers</span>
          </h2>

          {/* Rating card */}
          <div className="mt-6 inline-flex items-center gap-5 bg-[#161e2a] rounded-2xl px-8 py-5 shadow-lg border border-[#1e2738]">
            <div className="text-center">
              <p className="text-5xl font-black text-white/90">4.8</p>
              <div className="flex gap-0.5 mt-1 justify-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
            </div>
            <div className="h-14 w-px bg-[#2a3545]" />
            <div className="text-left">
              <p className="font-bold text-white/90">Google Reviews</p>
              <p className="text-sm text-[#5a6a7e]">5 reviews</p>
              <div className="flex gap-1 mt-1">
                <span className="text-[10px] bg-green-500/15 text-green-400 font-bold px-2 py-0.5 rounded-full">4× ★★★★★</span>
                <span className="text-[10px] bg-blue-500/15 text-blue-400 font-bold px-2 py-0.5 rounded-full">1× ★★★★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#161e2a] rounded-2xl p-6 card-hover border border-[#1e2738] relative group overflow-hidden"
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${review.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />

              {/* Quote icon */}
              <Quote size={40} className="text-primary/10 absolute top-4 right-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i <= review.rating ? "fill-primary text-primary" : "text-[#2a3545]"}
                  />
                ))}
              </div>

              {/* Text — star-only Google reviews have no quote; never invent one */}
              {review.text ? (
                <p className="text-[#8494a7] leading-relaxed mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>
              ) : (
                <p className="text-[#5a6a7e] text-sm italic mb-5">Star rating on Google, no written review.</p>
              )}

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[#1e2738] pt-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {review.initial}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-white/90 text-sm">{review.name}</p>
                    {"badge" in review && review.badge && (
                      <span className="text-[10px] bg-blue-500/15 text-blue-400 font-bold px-2 py-0.5 rounded-full">
                        {review.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#4a5a6e]">{review.time} · Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://g.page/r/CcIFu_h6coOuEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#161e2a] text-white/90 px-8 py-3.5 rounded-full font-bold hover:bg-[#1e2738] transition-all shadow-lg hover:scale-105 border border-[#2a3545]"
          >
            <ExternalLink size={18} />
            Review us on Google
          </a>
        </div>
      </div>
    </section>
  );
}
