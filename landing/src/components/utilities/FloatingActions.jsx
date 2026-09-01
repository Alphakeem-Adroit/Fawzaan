import { useState, useEffect } from 'react';
import { Headphones, ChevronUp } from 'lucide-react';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end pointer-events-auto">
      <div className="flex items-center flex-col justify-center gap-4">
        {/* Floating Animated Chevron Up (Scroll to Top) - Glassmorphism */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full shadow-lg border border-white/40 flex items-center justify-center transition-all duration-300 hover:bg-white/40 hover:shadow-xl hover:scale-110 cursor-pointer animate-bounce"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 text-blue" />
          </button>
        )}

        {/* Floating Contact Us Button - Glassmorphism */}
        <a
          href="/contact"
          className="bg-blue/70 backdrop-blur-md text-white px-2 py-5 rounded-full shadow-xl border border-white/20 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:bg-blue/90 hover:scale-105 hover:shadow-2xl cursor-pointer"
          aria-label="Contact us"
        >
          <Headphones className="w-6 h-6 text-white" />
          <span className="text-sm font-sans tracking-tight leading-none">
            Chat us
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingActions;