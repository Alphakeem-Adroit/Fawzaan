import { useRef } from 'react';
import { motion } from 'framer-motion';

const Support = () => {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-offwhite py-16"          
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <p className="font-serif font-semibold w-full md:w-1/2 text-blue text-3xl sm:text-4xl tracking-tight">
                    Wherever your journey takes you, Al-Fawzaan handles the complexity — you focus on the trip.
                </p>

                <div className="flex flex-col items-center md:items-start gap-1">
                    <p className="font-serif font-semibold text-blue text-4xl tracking-tight">24/7</p>
                    <p className="font-sans text-black">Support</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Support;