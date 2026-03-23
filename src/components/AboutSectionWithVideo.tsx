"use client";
import { useState, useRef } from "react";

interface AboutSectionWithVideoProps {
  t: any;
  isRTL: boolean;
}

export default function AboutSectionWithVideo({ t, isRTL }: AboutSectionWithVideoProps) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  return (
    <section className="w-full flex justify-center pt-1 py-24 px-4 md:px-0 bg-white">
      {/* Modal for YouTube video */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setShowVideo(false)}>
          <div className="bg-black rounded-2xl shadow-lg overflow-hidden relative w-[90vw] max-w-2xl aspect-video" onClick={e => e.stopPropagation()}>
            <iframe
              ref={videoRef}
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/RDLS01Qs4Ok?si=udvZIHdWIztKqztG&autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
            <button className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-2" onClick={() => setShowVideo(false)}>
              <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
            </button>
          </div>
        </div>
      )}
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-0 items-stretch bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
        {/* Left: 50% circular image with play button and testimonial below */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-50 py-12 px-6 gap-8">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white flex items-center justify-center">
            <img src="/assets/videotump.webp" alt="Video thumbnail" className="object-cover w-full h-full" />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition"
              onClick={() => setShowVideo(true)}
              aria-label="Play video"
            >
              <span className="bg-white/90 rounded-full p-5 shadow-xl border-2 border-gray-200">
                <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#fff"/><polygon points="15,13 25,18 15,23" fill="#b49a87"/></svg>
              </span>
            </button>
          </div>
          <blockquote className="text-[#b49a87] italic text-base max-w-xs text-center flex flex-col items-center gap-2 font-serif" style={{ direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'center' }}>
            {/* <svg className="w-7 h-7 mx-auto" fill="none" stroke="#b49a87" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4z"/></svg> */}
            <span>
              {t.aboutTestimonial}
            </span>
          </blockquote>
        </div>
        {/* Right: 50% About content, vertically centered */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-8 items-start px-8 py-16 relative">
          {/* About Us image and label */}
          <div className="flex items-center gap-4 mb-2">
            {/* <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80" alt="Legal Team" className="w-24 h-16 object-cover rounded-xl shadow" /> */}
            <span className="text-xs font-semibold tracking-widest text-[#b49a87] uppercase">{t.aboutUsLabel || 'About Us'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-normal text-[#222] mb-2 leading-tight" style={{ direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left' }}>{t.aboutHeadline}</h2>
          <hr className="w-20 border-t-2 border-[#b49a87] mb-4" />
          <p className="text-gray-700 text-lg leading-relaxed mb-2 max-w-2xl font-serif" style={{ direction: isRTL ? 'rtl' : 'ltr', textAlign: isRTL ? 'right' : 'left' }}>
            {t.aboutDescription}
          </p>
          {/* Call to action card, floating at the bottom right */}
       
        </div>
      </div>
    </section>
  );
}