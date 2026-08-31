import { motion } from "motion/react";
import ButtonPrimary from '../general/ButtonPrimary';

const CTA = () => {
  return (
    <section id="cta" className="bg-offwhite py-20 lg:py-28 overflow-hidden">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
        >
            <p className="text-black/75 font-sans text-sm sm:text-base uppercase tracking-widest mb-4">
                We're Ready When You Are
            </p>
            <div className="font-serif font-semibold text-blue text-6xl sm:text-8xl lg:text-9xl tracking-tight mb-6 max-w-5xl">
                <h2>Ready to plan your next journey?</h2>
            </div>
            <p className="text-black/75 font-sans max-w-2xl text-base sm:text-lg leading-relaxed mt-4">
                Tell us where you're headed and we'll help you build the trip — speak to our team directly, 24 hours a day.
            </p>

            <div className="mt-12">
                <ButtonPrimary text="Contat us for your journey" href="/contact" />
            </div>
        </motion.div>
    </section>
  );
};

export default CTA;