import { ChevronRight } from "lucide-react";

// Answer-first questions people ask Google, voice assistants and AI search.
// Every answer uses only owner-confirmed facts; the same list feeds the FAQPage JSON-LD.
const faqs = [
  {
    q: "Where is Paras Mobile Repairing located?",
    a: "151, Diamond Harbour Road (D.H. Road), Behala, Kolkata 700034 — near Balananda Hospital. We serve customers from Behala, Thakurpukur, Sarsuna, Parnasree, Taratala and Joka.",
  },
  {
    q: "What are the shop timings?",
    a: "Open 7 days a week, 10 AM to 10 PM.",
  },
  {
    q: "Which phones do you repair?",
    a: "All brands — iPhone, Samsung, Vivo, Oppo, Realme, Redmi/Xiaomi, OnePlus, Motorola and other Android phones.",
  },
  {
    q: "How much does mobile screen replacement cost in Behala?",
    a: "Our standard range is ₹800 – ₹2,500 for most LCD phones, ₹2,000 – ₹6,000 for AMOLED phones and ₹2,500 – ₹12,000 for iPhones. The exact price is told after a free check-up.",
  },
  {
    q: "Is the phone check-up free?",
    a: "Yes. Every phone gets a free check-up, and you get the exact price before any repair starts. Nothing is repaired until you agree.",
  },
  {
    q: "Do you give a warranty on repairs?",
    a: "Yes. Every repair has a warranty of at least 15 days; the exact period depends on the repair and is written on your bill.",
  },
  {
    q: "Can I get a repair price on WhatsApp?",
    a: "Yes. WhatsApp a photo of your phone and its model name to 89815 72938 and we will tell you the price range before you come.",
  },
  {
    q: "Can I watch my phone being repaired?",
    a: "Yes, you can watch your phone being repaired at the shop.",
  },
  {
    q: "Is Paras an authorised service centre?",
    a: "No. Paras is an independent mobile repair shop with 10+ years of experience and 5000+ phones repaired. It is not an authorised service centre of any phone brand.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[#121820]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-bold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-black text-white/90 mt-2">
            Mobile Repair in Behala — <span className="gradient-text">Questions Answered</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="bg-[#161e2a] border border-[#1e2738] rounded-xl p-5 group">
              <summary className="font-semibold text-white/90 cursor-pointer list-none flex justify-between gap-4">
                {f.q}
                <ChevronRight size={18} className="text-primary shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <p className="text-[#a3b1c2] mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        {/* Real Hindi and Bengali text in the HTML, so searches in those languages can find the shop.
            translate="no" keeps the language switcher from re-translating it. */}
        <div className="grid md:grid-cols-2 gap-4 mt-10 notranslate" translate="no">
          <div lang="hi" className="bg-[#161e2a] border border-[#1e2738] rounded-xl p-5">
            <h3 className="font-bold text-white/90">बेहाला में मोबाइल रिपेयरिंग</h3>
            <p className="text-[#a3b1c2] mt-2 leading-relaxed">
              स्क्रीन, बैटरी, चार्जिंग पोर्ट, डेड फोन और पानी में गिरे फोन की रिपेयरिंग — सभी ब्रांड, iPhone और Android।
              फ्री चेक-अप, रिपेयर से पहले कीमत बताई जाती है। 151, डी.एच. रोड, बेहाला, बालानंद अस्पताल के पास।
              रोज़ सुबह 10 बजे से रात 10 बजे तक। कॉल / WhatsApp: 89815 72938
            </p>
          </div>
          <div lang="bn" className="bg-[#161e2a] border border-[#1e2738] rounded-xl p-5">
            <h3 className="font-bold text-white/90">বেহালায় মোবাইল রিপেয়ারিং</h3>
            <p className="text-[#a3b1c2] mt-2 leading-relaxed">
              স্ক্রিন, ব্যাটারি, চার্জিং পোর্ট, ডেড ফোন আর জলে পড়া ফোনের রিপেয়ারিং — সব ব্র্যান্ড, iPhone ও Android।
              ফ্রি চেক-আপ, রিপেয়ারের আগেই দাম বলে দেওয়া হয়। ১৫১, ডি.এইচ. রোড, বেহালা, বালানন্দ হাসপাতালের কাছে।
              রোজ সকাল ১০টা থেকে রাত ১০টা। কল / WhatsApp: 89815 72938
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
