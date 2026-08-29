import { useState, useEffect, useRef } from 'react';

const Journey = () => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let start = 0;
        const end = 10000;
        const duration = 2000; // 2 seconds
        const incrementTime = 20;
        const steps = duration / incrementTime;
        const increment = end / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [hasAnimated]);

    return (
        <section id="journey" className="bg-white py-20 lg:py-28">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <p className="text-black/75 font-sans text-sm sm:text-base uppercase tracking-widest mb-4">
                    The Experience So Far
                </p>
                <div className="font-serif font-semibold text-blue text-6xl sm:text-8xl lg:text-9xl tracking-tight mb-6">
                    <span>{count.toLocaleString()}</span>+ pilgrims
                </div>
                <p className="text-black/75 font-sans max-w-2xl text-base sm:text-lg leading-relaxed mt-4">
                    Thousands of travelers have trusted Al-Fawzaan Makarem International with journeys of faith, family and discovery — this is their proof, not just our claim.
                </p>
            </div>
        </section>
    );
};

export default Journey;