import { useState, useEffect, useRef } from 'react';
import { motion } from "motion/react";
import ButtonPrimary from '../tourism/ButtonPrimary';
import ButtonSecondary from '../general/ButtonSecondary';

const Journey = () => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    observer.disconnect(); // Stop observing once triggered
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(currentRef);

        return () => {
            observer.disconnect();
        };
    }, []); // Empty array means it sets up once and avoids messy re-triggers

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
        <section id="journey" className="bg-offwhite py-20 lg:py-28 overflow-hidden">
            <motion.div 
                ref={ref} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
            >
                <p className="text-black/75 font-sans text-sm sm:text-base uppercase tracking-widest mb-4">
                    Trusted With The Journey
                </p>
                <div className="font-serif font-semibold text-blue text-6xl sm:text-8xl lg:text-9xl tracking-tight mb-6">
                    <span>{count.toLocaleString()}</span>+ travelers
                </div>
                <p className="text-black/75 font-sans max-w-2xl text-base sm:text-lg leading-relaxed mt-4">
                    The same trust that guides our Hajj and Umrah pilgrims extends to every international trip we help arrange.
                </p>
            </motion.div>

            <motion.div
                ref={ref} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mx-4 sm:mx-6 lg:mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 py-16 text-center flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-between gap-12 bg-blue mt-36"            
            >
                <p className="font-serif font-semibold text-white text-4xl tracking-tight">Have somewhere specific in mind?</p>

                <div className="flex flex-col sm:flex-col lg:flex-row md:flex-row gap-4">
                    <ButtonPrimary text="Start Planning" href="/tourism/#plan-trip" />
                    <ButtonSecondary text="Talk to Us" href="/contact" />
                </div>
            </motion.div>
        </section>
    );
};

export default Journey;