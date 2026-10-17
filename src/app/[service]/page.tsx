import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { SERVICES, serviceBySlug } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

type Props = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = serviceBySlug((await params).service);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/${s.slug}` },
    openGraph: { title: s.title, description: s.description, url: `/${s.slug}`, images: ["/og-image.png"] },
  };
}

const STEPS = [
  { t: "Free check-up", d: "Bring the phone or WhatsApp a photo. We find the fault first." },
  { t: "Price before repair", d: "You get the exact price. Nothing starts until you agree." },
  { t: "Repair at the shop", d: "We tell you the expected time before we start." },
  { t: "Warranty on the bill", d: "At least 15 days; the exact period is written on your bill." },
];

export default async function ServicePage({ params }: Props) {
  const s = serviceBySlug((await params).service);
  if (!s) notFound();

  const url = `${SITE_URL}/${s.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.name,
      serviceType: s.name,
      description: s.description,
      url,
      areaServed: "Behala, Kolkata",
      provider: { "@id": `${SITE_URL}/#shop` },
      offers: s.prices.map((p) => ({ "@type": "Offer", name: p.item, description: p.price, priceCurrency: "INR" })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: s.name, item: url },
      ],
    },
  ];
  const related = s.related.map(serviceBySlug).filter((r) => r !== undefined);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-[#0d1117] text-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-[#8494a7] mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">{s.name}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-black leading-tight text-white/95">{s.h1}</h1>
          <p className="text-lg text-[#a3b1c2] mt-5 leading-relaxed">{s.intro}</p>

          <div className="flex flex-wrap gap-3 mt-7">
            <a href="tel:+918981572938" className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-full font-bold">
              <Phone size={16} /> Call 089815 72938
            </a>
            <a
              href={`https://wa.me/918981572938?text=${encodeURIComponent(`Hi Paras, I need ${s.name.toLowerCase()}. Model: `)}`}
              className="flex items-center gap-2 border border-green-500/40 text-green-400 px-6 py-3 rounded-full font-bold"
            >
              <MessageCircle size={16} /> WhatsApp a photo for price
            </a>
          </div>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-white/90">Bring your phone if…</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {s.problems.map((p) => (
                <li key={p} className="flex gap-3 bg-[#161e2a] border border-[#1e2738] rounded-xl p-4 text-[#c3cdd8]">
                  <Check size={18} className="text-primary shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-white/90">{s.name} price in Behala</h2>
            <div className="mt-5 bg-[#161e2a] border border-[#1e2738] rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <tbody>
                  {s.prices.map((p) => (
                    <tr key={p.item} className="border-b border-[#1e2738] last:border-0">
                      <td className="p-4 text-[#c3cdd8]">{p.item}</td>
                      <td className="p-4 text-right font-bold text-primary whitespace-nowrap">{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#8494a7] mt-3">
              Standard price ranges. The exact price depends on your model and is told after the free check-up.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-white/90">How it works</h2>
            <ol className="mt-5 grid sm:grid-cols-2 gap-4">
              {STEPS.map((st, i) => (
                <li key={st.t} className="bg-[#161e2a] border border-[#1e2738] rounded-xl p-5">
                  <span className="text-primary font-black text-2xl">{i + 1}</span>
                  <p className="font-bold text-white/90 mt-1">{st.t}</p>
                  <p className="text-sm text-[#a3b1c2] mt-1">{st.d}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-white/90">Questions</h2>
            <div className="mt-5 space-y-3">
              {s.faqs.map((f) => (
                <details key={f.q} className="bg-[#161e2a] border border-[#1e2738] rounded-xl p-5 group">
                  <summary className="font-semibold text-white/90 cursor-pointer list-none flex justify-between gap-4">
                    {f.q}
                    <ChevronRight size={18} className="text-primary shrink-0 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-[#a3b1c2] mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-14 bg-[#161e2a] border border-[#1e2738] rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white/90">Visit the shop</h2>
            <p className="text-[#a3b1c2] mt-2 leading-relaxed">
              Paras Mobile Repairing &amp; Service Centre — 151, Diamond Harbour Road, Behala, near Balananda Hospital,
              Kolkata 700034. Open 7 days, 10 AM – 10 PM. Serving Behala, Thakurpukur, Sarsuna, Parnasree, Taratala and Joka.
            </p>
            <p className="text-xs text-[#8494a7] mt-3">
              Independent repair shop — not an authorised service centre of any phone brand. Offers: T&amp;C apply.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-xl font-bold text-white/90">Other repairs</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {related.map((r) => (
                <a key={r.slug} href={`/${r.slug}`} className="border border-[#2a3545] hover:border-primary text-[#c3cdd8] hover:text-primary px-4 py-2 rounded-full text-sm">
                  {r.name} in Behala
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
