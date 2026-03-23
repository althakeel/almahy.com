"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { translations, Locale } from "@/lib/translations";

import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import ServicesSection from "@/components/ServicesSection";
import GoogleReviews from "@/components/GoogleReviews";
import Stats from "@/components/Stats";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import AboutSectionWithVideo from "@/components/AboutSectionWithVideo";

export default function Home() {
  const params = useParams();
  const locale = params?.locale as string;

  const lang: Locale = locale === "ar" ? "ar" : "en";
  const isRTL = lang === "ar";
  const t = translations[lang];

  /* ---------------- Hero Headlines ---------------- */

  const heroHeadlines =
    lang === "ar"
      ? [
          ["النصيحة القانونية", "مكالمة هاتفية عند الحاجة", "دائمًا في خدمتك."],
          ["عدالتك، مهمتنا", "إرشاد قانوني خبير", "في كل خطوة."],
          ["شركة محاماة موثوقة", "38 عامًا من التميز", "في الخدمات القانونية."],
          ["نتائج تهمك", "مكرسون لقضيتك", "بكل نزاهة."],
        ]
      : [
          ["The Legal Advice", "Need Phone Call", "Away."],
          ["Your Justice, Our Mission", "Expert Legal Guidance", "Every Step."],
          ["Trusted Law Firm", "38 Years of Excellence", "In Legal Services."],
          ["Results That Matter", "Dedicated to Your Case", "With Integrity."],
        ];


  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let fadeOutTimer: NodeJS.Timeout | undefined;
    let headlineTimer: NodeJS.Timeout | undefined;
    if (fade) {
      // After 3400ms, start fade out
      fadeOutTimer = setTimeout(() => setFade(false), 3400);
    } else {
      // After 600ms fade out, change headline and fade in
      headlineTimer = setTimeout(() => {
        setHeadlineIdx((prev) => (prev + 1) % heroHeadlines.length);
        setFade(true);
      }, 600);
    }
    return () => {
      if (fadeOutTimer) clearTimeout(fadeOutTimer);
      if (headlineTimer) clearTimeout(headlineTimer);
    };
  }, [fade, headlineIdx]);

  const currentHeadline = heroHeadlines[headlineIdx].join('\n');

  /* ---------------- 38 Years Counter ---------------- */

  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const end = 38;

    const interval = setInterval(() => {
      i++;
      setCount(i);

      if (i === end) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- Hero Background Slider ---------------- */

  const heroImages = [
   "/assets/bannerSlider/image.png",
      "/assets/bannerSlider/main3.webp",
    "/assets/bannerSlider/6.webp",
    "/assets/bannerSlider/image.png",
  ];
  const [bgIdx, setBgIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- Component ---------------- */

  return (
    <div dir={isRTL ? "rtl" : "ltr"} lang={lang} className="w-full">

      {/* HERO SECTION */}

      <section
        className="relative w-full h-[80vh] min-h-[750px] md:min-h-[600px] max-h-[1200px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url("${heroImages[bgIdx]}")`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto flex items-center px-6 md:px-20 w-full">

          {/* Left Badge */}

          <div className="hidden md:flex flex-col items-center mr-16 select-none">

            <div className="relative w-28 h-28 flex flex-col items-center justify-center">
              <span className="absolute inset-0 rounded-full border-2 border-dashed border-[#bfa08a] animate-spin"></span>

              <span className="text-2xl md:text-4xl font-serif text-[#bfa08a] leading-none z-10">{count}</span>
              <span className="text-sm md:text-base text-white/80 leading-none z-10">{isRTL ? "سنة" : "Years"}</span>
            </div>

            <div className="flex flex-col items-center mt-4">
              <span className="w-[2px] h-8 bg-white"></span>
            </div>

            <span
              className="text-white/80 text-xs md:text-base tracking-widest mt-2 md:mt-2 ml-2 md:ml-0"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                letterSpacing: "0.1em",
                fontFamily: "inherit",
                fontWeight: 400,
              }}
            >
              {isRTL ? "الخدمات القانونية" : "Legal Services"}
            </span>

          </div>

          {/* Text */}

          <div className="flex-1 flex flex-col justify-center items-start text-left w-full md:ml-6 ml-0" style={{gap: '5px', height: '260px'}}>

            <span className={`uppercase text-[#bfa08a] text-xs font-semibold mb-2 tracking-widest${isRTL ? ' mb-4' : ''}`}>
              {isRTL ? "دَع المحكمة لنا" : "Leave Court To Us"}
            </span>

            <h1
              className={`text-3xl md:text-5xl font-serif font-bold text-white mt-4 whitespace-pre-line max-w-4xl flex items-center transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
              style={{ width: "100%", height: "220px" }}
            >
              {currentHeadline}
            </h1>

            <div className="flex flex-row items-center mb-2 md:mb-3 w-full">
              <div className="w-1 h-8 md:h-12 bg-[#bfa08a] mr-2 md:mr-4" />
              <p className="text-white/90 text-base xs:text-lg md:text-xl font-normal max-w-full md:max-w-4xl w-full" style={{textShadow: '0 1px 8px rgba(0,0,0,0.18)'}}>
                {isRTL
                  ? "نحن منارة خبرتك القانونية، حيث تتحول القضايا الصعبة إلى انتصارات. واجه التحديات القانونية بثقة بينما نتولى نحن التعقيدات."
                  : "We stand as your beacon of legal mastery, where daunting issues are transformed into victories. Navigate legal challenges with confidence while we handle the complexities."
                }
              </p>
            </div>

            <Link
              href="#about"
              className={`inline-flex items-center gap-2 font-bold py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-2xl shadow-lg bg-[#222] text-white text-base md:text-lg tracking-wide group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#bfa08a]/40 border border-[#bfa08a] hover:bg-[#bfa08a] hover:text-[#222] hover:scale-105 hover:shadow-2xl w-fit justify-center mx-auto ${isRTL ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}
              style={{ minWidth: 0, letterSpacing: '0.04em', boxShadow: '0 4px 24px 0 rgba(191, 160, 138, 0.12)' }}
            >
              <span className="text-xl font-extrabold transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">+</span>
              <span className="transition-colors duration-300">{isRTL ? "اعرف المزيد" : "Learn More"}</span>
            </Link>

          </div>

          </div>
        </div>
      </section>

      {/* Other Sections */}

      <ClientLogosMarquee locale={lang} />

      <AboutSectionWithVideo
        t={{
          aboutTestimonial: t.aboutTestimonial,
          aboutUsLabel: t.aboutUsLabel,
          aboutHeadline: t.aboutHeadline,
          aboutDescription: t.aboutDescription,
        }}
        isRTL={isRTL}
      />

      <ServicesSection locale={lang} />

      <Stats locale={lang} />

      <GoogleReviews locale={lang} />

      <FAQ locale={lang} />

      <CTA locale={lang} />

    </div>
  );
}