'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/translations';

interface ServicesSectionProps {
  locale: Locale;
}

const servicesData = {
  en: {
    title: 'Almahy Legal Service',
    services: [
      {
        title: 'LEGAL SERVICES',
        description: 'Comprehensive legal support for individuals and businesses, including consultations, drafting, review, and strategic legal guidance across key practice areas.',
        image: '/assets/services/legal.webp',
        url: '/legal-services'
      },
      {
        title: 'CORPORATE SERVICES',
        description: 'Business setup, restructuring, governance advisory, and compliance assistance tailored for startups, SMEs, and established organizations in the UAE.',
        image: '/assets/services/corporate.webp',
        url: '/corporate-services'
      },
      {
        title: 'NOTARY PUBLIC SERVICES',
        description: 'Support with notarization workflows, document attestation preparation, and guidance to ensure submissions meet required legal standards.',
        image: '/assets/services/notory.webp',
        url: '/notary-public-services'
      },
      {
        title: 'ACCOUNTING SERVICES',
        description: 'Gulf Star Accounting provides accounting services through qualified professional accountants with extensive experience in the various activities of companies, and the success of any institution depends on the effectiveness of its accounting and financial system, and the competent professional accountant is the cornerstone of this system',
        image: '/assets/services/accounting.webp',
        url: '/accounting-services'
      },
      {
        title: 'SECOND PASSPORT',
        description: 'Advisory support for second passport and citizenship pathways, including eligibility review, document readiness, and process coordination.',
        image: '/assets/services/passport.webp',
        url: '/second-passport'
      },
      {
        title: 'EXPERT REPORTS',
        description: 'Preparation of clear, structured expert reports and technical legal documentation to support disputes, claims, and court-related proceedings.',
        image: '/assets/services/reports.webp',
        url: '/expert-reports'
      }
    ]
  },
  ar: {
    title: 'خدماتنا',
    services: [
      {
        title: 'الخدمات القانونية',
        description: 'دعم قانوني شامل للأفراد والشركات، يشمل الاستشارات والصياغة والمراجعة ووضع الاستراتيجيات القانونية في مختلف المجالات.',
        image: '/assets/services/legal.webp',
        url: '/legal-services'
      },
      {
        title: 'خدمات الشركات',
        description: 'تأسيس الشركات وإعادة الهيكلة والحوكمة والامتثال بما يتناسب مع الشركات الناشئة والمؤسسات الصغيرة والمتوسطة والشركات الكبرى في الإمارات.',
        image: '/assets/services/corporate.webp',
        url: '/corporate-services'
      },
      {
        title: 'خدمات الكاتب العدل',
        description: 'مساندة في إجراءات التوثيق وتجهيز معاملات التصديق على المستندات والتأكد من توافقها مع المتطلبات القانونية.',
        image: '/assets/services/notory.webp',
        url: '/notary-public-services'
      },
      {
        title: 'خدمات المحاسبة',
        description: 'توفر شركة الخليج ستار للمحاسبة خدمات محاسبية من خلال محاسبين محترفين مؤهلين يتمتعون بخبرة واسعة في مختلف أنشطة الشركات، ونجاح أي مؤسسة يعتمد على فعالية نظامها المحاسبي والمالي، والمحاسب المحترف المختص هو حجر الزاوية في هذا النظام',
        image: '/assets/services/accounting.webp',
        url: '/accounting-services'
      },
      {
        title: 'الجواز الثاني',
        description: 'استشارات متخصصة لمسارات الحصول على جواز سفر ثانٍ أو جنسية ثانية، بما يشمل مراجعة الأهلية وتجهيز المستندات ومتابعة الإجراءات.',
        image: '/assets/services/passport.webp',
        url: '/second-passport'
      },
      {
        title: 'تقارير الخبرة',
        description: 'إعداد تقارير خبرة فنية وقانونية واضحة ومنظمة لدعم النزاعات والمطالبات والإجراءات القضائية.',
        image: '/assets/services/reports.webp',
        url: '/expert-reports'
      }
    ]
  }
};

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const content = servicesData[locale];

  return (
    <section className="w-full relative">
      {/* Background Section */}
      <div 
        className="relative w-full py-24 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=600&fit=crop")'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#F8E48B'}}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#BF9C4A'}}></div>
        </div>

        <div className="relative px-4 md:px-8">
          <div className="max-w-[1250px] mx-auto">
            {/* Title with decorative elements */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-5 py-2 backdrop-blur-sm rounded-full mb-6" style={{backgroundColor: 'rgba(248, 228, 139, 0.1)', border: '1px solid rgba(248, 228, 139, 0.2)'}}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#F8E48B'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-sm" style={{color: '#F8E48B'}}>
                  {locale === 'en' ? 'What We Offer' : 'ما نقدمه'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {content.title}
              </h2>
              <div className="flex justify-center mt-6">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 rounded" style={{backgroundColor: '#F8E48B'}}></div>
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#F8E48B'}}></div>
                  <div className="h-1 w-12 rounded" style={{backgroundColor: '#F8E48B'}}></div>
                </div>
              </div>
            </div>

            {/* Services Cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {content.services.map((service, index) => (
                <Link
                  key={index}
                  href={`/${locale}${service.url}`}
                  className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl block"
                  style={{
                    '--shadow-color': 'rgba(191, 156, 74, 0.2)'
                  } as React.CSSProperties}
                >
                  {/* Image Container with Overlay */}
                  <div className="relative w-full h-[240px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" style={{backgroundColor: '#BF9C4A'}}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />}
                        {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                        {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                        {index > 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />}
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7">
                    {/* Title with accent */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-1 h-8 rounded-full flex-shrink-0" style={{backgroundColor: '#F8E48B'}}></div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight transition-colors duration-300" style={{color: '#181818'}} onMouseEnter={(e) => {e.currentTarget.style.color = '#BF9C4A'}} onMouseLeave={(e) => {e.currentTarget.style.color = '#181818'}}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-300" style={{color: '#F2D56D'}} onMouseEnter={(e) => {e.currentTarget.style.color = '#BF9C4A'}} onMouseLeave={(e) => {e.currentTarget.style.color = '#F2D56D'}}>
                      <span>{locale === 'en' ? 'Learn More' : 'اعرف المزيد'}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-1 w-0 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-500"></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
