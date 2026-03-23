import { translations, Locale } from "@/lib/translations";
import Link from "next/link";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";
  const t = translations[lang];

  const services = [
    {
      icon: "⚖️",
      title: "LEGAL SERVICES",
      description:
        "Comprehensive legal support for individuals and businesses, including consultations, drafting, review, and strategic legal guidance across key practice areas.",
    },
    {
      icon: "🏢",
      title: "CORPORATE SERVICES",
      description:
        "Business setup, restructuring, governance advisory, and compliance assistance tailored for startups, SMEs, and established organizations in the UAE.",
    },
    {
      icon: "📝",
      title: "NOTARY PUBLIC SERVICES",
      description:
        "Support with notarization workflows, document attestation preparation, and guidance to ensure submissions meet required legal standards.",
    },
    {
      icon: "📱",
      title: "ACCOUNTING SERVICES",
      description:
        "Gulf Star Accounting provides accounting services through qualified professional accountants with extensive experience in the various activities of companies, and the success of any institution depends on the effectiveness of its accounting and financial system, and the competent professional accountant is the cornerstone of this system.",
    },
    {
      icon: "🌍",
      title: "SECOND PASSPORT",
      description:
        "Advisory support for second passport and citizenship pathways, including eligibility review, document readiness, and process coordination.",
    },
    {
      icon: "📑",
      title: "EXPERT REPORTS",
      description:
        "Preparation of clear, structured expert reports and technical legal documentation to support disputes, claims, and court-related proceedings.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            {t.ourServices}
          </h1>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-amber-400"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="h-1 w-12 bg-amber-400"></div>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t.servicesIntro}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Map service titles to their respective page slugs
            const slug = service.title
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9\-]/g, '');
            return (
              <Link
                key={index}
                href={`/${lang}/${slug}`}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-amber-400/30 transition-shadow border border-gray-700 group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400"
                tabIndex={0}
              >
                <div className="text-5xl mb-4 text-amber-400 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-12 shadow-2xl border border-amber-200/20">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            {t.servicesCTA}
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            {t.servicesCTADesc}
          </p>
          <Link 
            href="https://wa.me/97142648831?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-300 hover:bg-amber-200 text-slate-900 font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg border-2 border-amber-300"
          >
            {t.contactButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
