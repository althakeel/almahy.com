'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Logo from '../assets/logo/logo.png';
import { translations, Locale } from '@/lib/translations';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const isEnServicesPage = pathname === '/en/services';
  const isTurkiyePage = pathname?.includes('/second-passport/turkiye');
  const isValidLoc = locale === 'en' || locale === 'ar';
  const lang = isValidLoc ? (locale as Locale) : 'en';
  const t = translations[lang];

  const switchLanguage = (newLocale: Locale) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll state for background opacity
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 z-50 flex justify-center w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div
        className={`
          w-full max-w-[1250px] px-4 md:px-8 transition-all duration-300
          border border-white/20
          shadow-xl text-white
          rounded-b-[18px]
          bg-gradient-to-r from-[#181c24] via-[#23273a] to-[#181c24]
          backdrop-blur-2xl bg-opacity-60
        `}
        style={{ WebkitBackdropFilter: 'blur(16px) saturate(140%)', backdropFilter: 'blur(16px) saturate(140%)' }}
      >
        <div className="flex items-center justify-between py-2 md:py-2.5">
          {/* Logo always on the left */}
          <Link
            href={`/${lang}`}
            className={`flex items-center gap-2 md:gap-3 cursor-pointer ${lang === 'ar' ? 'order-1' : 'order-1'}`}
          >
            <Image src={Logo} alt="Gulf Star Logo" width={150} height={100} className="object-contain md:w-[150px] md:h-[55px]" priority />
          </Link>

          {/* Center: Navigation Links */}
          <div className={`hidden md:flex items-center gap-6 lg:gap-10 order-2 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <Link href={`/${lang}`} className="text-sm font-medium text-white transition-colors whitespace-nowrap" style={{color: 'white'}} onMouseEnter={(e) => e.currentTarget.style.color = '#F8E48B'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
              {t.home}
            </Link>
            <Link href={`/${lang}/services`} className="text-sm font-medium text-white transition-colors whitespace-nowrap" style={{color: 'white'}} onMouseEnter={(e) => e.currentTarget.style.color = '#F8E48B'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
              {t.ourServices}
            </Link>
            <Link href={`/${lang}/pricing-table`} className="text-sm font-medium text-white transition-colors whitespace-nowrap" style={{color: 'white'}} onMouseEnter={(e) => e.currentTarget.style.color = '#F8E48B'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
              {t.pricing}
            </Link>
            <Link href={`/${lang}/about`} className="text-sm font-medium text-white transition-colors whitespace-nowrap" style={{color: 'white'}} onMouseEnter={(e) => e.currentTarget.style.color = '#F8E48B'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
              {t.whoAreWe}
            </Link>
            <Link href={`/${lang}/contact`} className="text-sm font-medium text-white transition-colors whitespace-nowrap" style={{color: 'white'}} onMouseEnter={(e) => e.currentTarget.style.color = '#F8E48B'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
              {t.contactUs}
            </Link>
          </div>

          {/* Right: Button and Language Switcher */}
          <div className={`flex items-center gap-2 md:gap-4 ${lang === 'ar' ? 'order-3' : 'order-3'}`}>
            <div className="hidden md:flex items-center rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur">
              <button
                onClick={() => switchLanguage('en')}
                className={`relative overflow-hidden px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  lang === 'en'
                    ? 'text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                style={
                  lang === 'en'
                    ? {
                        background: 'linear-gradient(180deg, #F8DC71 0%, #E7BC3A 56%, #D49D1F 100%)',
                        boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.55), inset 0 -2px 0 rgba(120,78,0,0.35), 0 2px 8px rgba(0,0,0,0.35)',
                      }
                    : undefined
                }
                aria-label="Switch to English"
              >
                {lang === 'en' ? (
                  <span className="pointer-events-none absolute left-[8%] top-[2px] h-[45%] w-[84%] rounded-full bg-white/35 blur-[1px]" />
                ) : null}
                <span className="relative z-10">EN</span>
              </button>
              <button
                onClick={() => switchLanguage('ar')}
                className={`relative overflow-hidden px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  lang === 'ar'
                    ? 'text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                style={
                  lang === 'ar'
                    ? {
                        background: 'linear-gradient(180deg, #F8DC71 0%, #E7BC3A 56%, #D49D1F 100%)',
                        boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.55), inset 0 -2px 0 rgba(120,78,0,0.35), 0 2px 8px rgba(0,0,0,0.35)',
                      }
                    : undefined
                }
                aria-label="Switch to Arabic"
              >
                {lang === 'ar' ? (
                  <span className="pointer-events-none absolute left-[8%] top-[2px] h-[45%] w-[84%] rounded-full bg-white/35 blur-[1px]" />
                ) : null}
                <span className="relative z-10">AR</span>
              </button>
            </div>

            <Link 
              href="https://wa.me/97142648831?text=Hello%2C%20I%20would%20like%20to%20get%20a%20consultation%20for%20accounting%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold px-4 md:px-7 py-2.5 md:py-3 rounded-full text-xs md:text-sm transition-all flex items-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl"
              style={{backgroundColor: '#F8E48B', color: '#181818'}}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F2D56D'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F8E48B'}
            >
              <span>👤</span>
              <span className="hidden xs:inline md:inline">{lang === 'en' ? 'GET A CONSULTATION' : 'احجز استشارة'}</span>
              <span className="inline xs:hidden md:hidden">{lang === 'en' ? 'Consult' : 'استشارة'}</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-lg border-t -mx-4 -mr-4 px-4" style={{backgroundColor: `rgba(24, 24, 24, ${isScrolled ? 0.95 : 0.85})`, borderTopColor: `rgba(128, 128, 128, ${isScrolled ? 1 : 0.5})`}}>
            <div className="py-3 space-y-2">
              <Link
                href={`/${lang}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-white rounded transition-colors"
                style={{}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {t.home}
              </Link>
              <Link
                href={`/${lang}/services`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-white rounded transition-colors"
                style={{}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {t.ourServices}
              </Link>
              <Link
                href={`/${lang}/pricing-table`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-white rounded transition-colors"
                style={{}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {t.pricing}
              </Link>
              <Link
                href={`/${lang}/about`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-white rounded transition-colors"
                style={{}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {t.whoAreWe}
              </Link>
              <Link
                href={`/${lang}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-white rounded transition-colors"
                style={{}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.3)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {t.contactUs}
              </Link>
              <div className={`flex gap-2 pt-2 border-t ${isScrolled ? 'border-gray-700' : 'border-gray-700/50'}`}>
                <button
                  onClick={() => {
                    switchLanguage('en');
                    setMobileMenuOpen(false);
                  }}
                  className={`relative overflow-hidden flex-1 px-2 py-2 text-xs font-semibold rounded transition-all ${
                    lang === 'en'
                      ? 'text-gray-900 shadow-md'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                  style={
                    lang === 'en'
                      ? {
                          background: 'linear-gradient(180deg, #F8DC71 0%, #E7BC3A 56%, #D49D1F 100%)',
                          boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -2px 0 rgba(120,78,0,0.35)',
                        }
                      : undefined
                  }
                >
                  {lang === 'en' ? (
                    <span className="pointer-events-none absolute left-[8%] top-[2px] h-[45%] w-[84%] rounded-full bg-white/30 blur-[1px]" />
                  ) : null}
                  <span className="relative z-10">EN</span>
                </button>
                <button
                  onClick={() => {
                    switchLanguage('ar');
                    setMobileMenuOpen(false);
                  }}
                  className={`relative overflow-hidden flex-1 px-2 py-2 text-xs font-semibold rounded transition-all ${
                    lang === 'ar'
                      ? 'text-gray-900 shadow-md'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                  style={
                    lang === 'ar'
                      ? {
                          background: 'linear-gradient(180deg, #F8DC71 0%, #E7BC3A 56%, #D49D1F 100%)',
                          boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -2px 0 rgba(120,78,0,0.35)',
                        }
                      : undefined
                  }
                >
                  {lang === 'ar' ? (
                    <span className="pointer-events-none absolute left-[8%] top-[2px] h-[45%] w-[84%] rounded-full bg-white/30 blur-[1px]" />
                  ) : null}
                  <span className="relative z-10">AR</span>
                </button>
              </div>
              <button className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-4 py-2 rounded text-sm transition-colors mt-2">
                {lang === 'en' ? 'GET A CONSULTATION' : 'احجز استشارة'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}