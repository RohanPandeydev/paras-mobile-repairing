import { Phone, MapPin, Clock, Heart, Wrench, Cpu, Smartphone } from "lucide-react";
import { SERVICES } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white relative overflow-hidden">
      {/* Circuit pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      {/* Floating mobile parts */}
      <div className="absolute top-[15%] right-[5%] animate-float-slow opacity-[0.06]">
        <Cpu size={28} className="text-primary" />
      </div>
      <div className="absolute bottom-[25%] left-[4%] animate-float opacity-[0.05]" style={{ animationDelay: "1s" }}>
        <Smartphone size={24} className="text-accent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center">
                <Wrench className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-black text-lg text-white/90">PARAS MOBILE</h3>
                <p className="text-[9px] text-primary font-bold tracking-[0.2em] uppercase">
                  Repair & Service Centre
                </p>
              </div>
            </div>
            <p className="text-[#8494a7] text-sm leading-relaxed">
              Mobile repair shop in Behala for 10+ years. Free check-up,
              quality-checked parts, and the price told before every repair.
            </p>
            <p className="text-[#8494a7] text-xs leading-relaxed mt-3">
              Serving Behala, Thakurpukur, Sarsuna, Parnasree, Taratala and Joka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-[#8494a7]">
              {["Home", "Services", "Pricing", "Reviews", "FAQ", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase()}`}
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary/50 rounded-full" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Top Services</h4>
            <ul className="space-y-2.5 text-sm text-[#8494a7]">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <a href={`/${service.slug}`} className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary/50 rounded-full" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-sm text-[#8494a7]">
              <li className="flex gap-2.5">
                <MapPin size={16} className="shrink-0 mt-0.5 text-primary/70" />
                <span>151, Diamond Harbour Rd, Behala, Kolkata - 700034</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="shrink-0 text-primary/70" />
                <a href="tel:+918981572938" className="hover:text-primary transition-colors">
                  089815 72938
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock size={16} className="shrink-0 text-primary/70" />
                <span>Mon-Sun: 10 AM - 10 PM</span>
              </li>
            </ul>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-5 text-sm text-[#8494a7]">
              {[
                { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61595165264713" },
                { label: "Instagram", href: "https://www.instagram.com/pinturao5416/" },
                { label: "YouTube", href: "https://www.youtube.com/@parasmobilebehala" },
              ].map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-4 decoration-primary/40">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(255,255,255,0.06)] mt-12 pt-8 text-center text-sm text-[#8494a7]">
          <p>
            © {new Date().getFullYear()} Paras Mobile Repairing & Service
            Centre. All rights reserved.
          </p>
          <p className="mt-1 text-xs">
            Independent repair shop — not an authorised service centre of any phone brand. Offers: T&amp;C apply, ask at the shop.
          </p>
          <p className="mt-1 flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Kolkata
          </p>
        </div>
      </div>
    </footer>
  );
}
