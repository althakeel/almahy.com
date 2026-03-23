import { translations, Locale } from "@/lib/translations";
import Image from "next/image";

export default async function AccountingServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isValidLoc = locale === "en" || locale === "ar";
  const lang = isValidLoc ? (locale as Locale) : "en";

  const content = {
    en: {
      heroTitle: "Accounting Services",
      heroSubtitle: "Comprehensive Financial Solutions for Your Business Success",
      mainTitle: "Professional Accounting Solutions",
      mainDesc: "Gulf Star Accounting provides accounting services through qualified professional accountants with extensive experience in the various activities of companies. The success of any institution depends on the effectiveness of its accounting and financial system, and the competent professional accountant is the cornerstone of this system.",
      services: [
        { 
          icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
          title: "Financial Accounting", 
          desc: "Complete financial record keeping, statement preparation, and comprehensive reporting for informed decision-making." 
        },
        { 
          icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          title: "Cost Accounting", 
          desc: "Detailed cost tracking, analysis, and optimization to improve profitability and operational efficiency." 
        },
        { 
          icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
          title: "Tax Accounting", 
          desc: "Expert tax planning, preparation, and compliance services to minimize liabilities and ensure regulatory adherence." 
        },
        { 
          icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
          title: "Payroll Management", 
          desc: "Efficient payroll processing, employee records management, and comprehensive salary administration." 
        },
        { 
          icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
          title: "Accounting Setup", 
          desc: "Custom accounting system implementation and configuration tailored to your business needs." 
        },
        { 
          icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
          title: "Management Accounting", 
          desc: "Strategic financial insights and performance metrics for effective business management and growth." 
        },
        { 
          icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
          title: "Bookkeeping Services", 
          desc: "Accurate daily transaction recording, reconciliation, and organized financial documentation." 
        },
        { 
          icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
          title: "Financial Statements", 
          desc: "Professional preparation of balance sheets, income statements, and cash flow statements." 
        },
      ],
      whyUs: [
        { title: "Certified Experts", desc: "Team of qualified chartered accountants with proven expertise" },
        { title: "Comprehensive Solutions", desc: "End-to-end accounting services tailored to your needs" },
        { title: "Technology Driven", desc: "Modern accounting software and cloud-based solutions" },
        { title: "Compliance Assured", desc: "Full regulatory compliance and audit support" }
      ],
      ctaText: "Schedule Consultation"
    },
    ar: {
      heroTitle: "خدمات المحاسبة",
      heroSubtitle: "حلول مالية شاملة لنجاح أعمالك",
      mainTitle: "حلول محاسبية احترافية",
      mainDesc: "توفر شركة الخليج ستار للمحاسبة خدمات محاسبية من خلال محاسبين محترفين مؤهلين يتمتعون بخبرة واسعة في مختلف أنشطة الشركات. يعتمد نجاح أي مؤسسة على فعالية نظامها المحاسبي والمالي، والمحاسب المحترف المختص هو حجر الزاوية في هذا النظام.",
      services: [
        { icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", title: "المحاسبة المالية", desc: "مسك دفاتر مالية كاملة وإعداد القوائم وإعداد تقارير شاملة لاتخاذ قرارات مستنيرة." },
        { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "محاسبة التكاليف", desc: "تتبع وتحليل وتحسين التكاليف التفصيلية لتحسين الربحية والكفاءة التشغيلية." },
        { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "المحاسبة الضريبية", desc: "خدمات تخطيط وإعداد وامتثال ضريبية متخصصة لتقليل الالتزامات وضمان الالتزام التنظيمي." },
        { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "إدارة الرواتب", desc: "معالجة كشوف المرتبات بكفاءة وإدارة سجلات الموظفين وإدارة الرواتب الشاملة." },
        { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", title: "إعداد المحاسبة", desc: "تنفيذ وتكوين نظام محاسبي مخصص مصمم خصيصًا لاحتياجات عملك." },
        { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "المحاسبة الإدارية", desc: "رؤى مالية استراتيجية ومقاييس أداء للإدارة الفعالة للأعمال والنمو." },
        { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", title: "خدمات مسك الدفاتر", desc: "تسجيل المعاملات اليومية الدقيق والمطابقة والوثائق المالية المنظمة." },
        { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", title: "القوائم المالية", desc: "إعداد احترافي للميزانية العمومية وبيانات الدخل وبيانات التدفق النقدي." },
      ],
      whyUs: [
        { title: "خبراء معتمدون", desc: "فريق من المحاسبين القانونيين المؤهلين ذوي الخبرة المثبتة" },
        { title: "حلول شاملة", desc: "خدمات محاسبية شاملة مصممة حسب احتياجاتك" },
        { title: "مدعوم بالتكنولوجيا", desc: "برامج محاسبية حديثة وحلول قائمة على السحابة" },
        { title: "ضمان الامتثال", desc: "امتثال تنظيمي كامل ودعم التدقيق" }
      ],
      ctaText: "حدد موعد استشارة"
    }
  };

  const pageContent = content[lang];

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&h=500&fit=crop"
          alt="Accounting Services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-800/80"></div>
        
        <div className="relative h-full max-w-[1250px] mx-auto px-4 md:px-8 flex items-center">
          <div className="max-w-2xl pt-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              <span className="text-amber-300 text-sm font-medium">Professional Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {pageContent.heroTitle}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {pageContent.heroSubtitle}
            </p>
            <a
              href="https://wa.me/97142648831?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-2xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {pageContent.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full py-20 px-4 md:px-8 bg-slate-950">
        <div className="max-w-[1250px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {pageContent.mainTitle}
            </h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-20 bg-amber-500 rounded"></div>
            </div>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              {pageContent.mainDesc}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pageContent.services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] rounded-2xl p-6 border border-white/10 hover:border-amber-500 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-3 text-lg group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              {lang === 'en' ? 'Why Choose Gulf Star Accounting?' : 'لماذا تختار الخليج ستار للمحاسبة؟'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageContent.whyUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch CTA Section */}
      <section className="relative w-full h-[450px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1600&h=450&fit=crop"
          alt="Get in touch"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/90"></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {lang === 'en' ? 'Get In Touch Today' : 'تواصل معنا اليوم'}
            </h2>
            <p className="text-slate-200 text-xl mb-10 leading-relaxed">
              {lang === 'en' 
                ? 'Get in touch today and see how smooth, reliable accounting can power your next stage of growth.' 
                : 'تواصل معنا اليوم وشاهد كيف يمكن للمحاسبة السلسة والموثوقة أن تدفع مرحلة النمو القادمة لديك.'}
            </p>
            
            <a
              href="https://wa.me/97142648831?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20accounting%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-12 py-4 rounded-md transition-colors shadow-xl uppercase tracking-widest text-sm"
            >
              {lang === 'en' ? 'GET A QUOTE' : 'احصل على عرض أسعار'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
