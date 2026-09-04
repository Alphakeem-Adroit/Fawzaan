import { motion } from "motion/react";
import Navbar from '../general/Navbar';
import ButtonPrimary from '../general/ButtonPrimary';
import ButtonSecondary from '../general/ButtonSecondary';
import sky from '../../../assets/sky.png';
import kabah from '../../../assets/kabah.png';
import nahcon from '../../../assets/nahcon.webp';
import tnanta from '../../../assets/tnanta.png';
import iata from '../../../assets/iata.png';
import hutoaon from '../../../assets/hutoaon.png';

const Hero = () => {
    return (
        <header 
            className="bg-cover bg-center bg-no-repeat relative min-h-screen flex flex-col justify-between overflow-hidden" 
            style={{ backgroundImage: `url(${sky})` }}
        > 
            {/* SkyBlue Overlay  */}
            <div className="absolute inset-0 bg-skyblue/40 z-0" />

            <Navbar />

            {/* Main Hero Content Area - Safely padded from navbar on mobile/tablet */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-36 pb-16 lg:py-0 my-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                
                {/* Left Column: Text and Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex flex-col items-start text-left justify-center gap-6 lg:gap-8"
                >
                    <div className="w-full flex flex-col items-start text-left gap-4">
                        <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none sm:leading-none tracking-tight drop-shadow-md">
                            Your journey of faith, made very easy.
                        </h1>
                        <p className="font-sans font-normal text-white/90 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed drop-shadow">
                            From preparation to pilgrimage and beyond, we arrange Hajj, Umrah and international travel with personal care, professional service and guidance you can rely on at every step.
                        </p>
                    </div>

                    {/* Left-aligned Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full">
                        <div className="w-full sm:w-auto">
                            <ButtonPrimary text="Explore Hajj/Umrah" href="/#hajj/umrah" />
                        </div>
                        <div className="w-full sm:w-auto">
                            <ButtonSecondary text="Explore Tourism" href="/tourism" />
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Scaled 3D Kabah Image & Glassmorphism Logos */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 mt-4 lg:mt-0"
                >
                    {/* Optimized Floating Kabah Image for Desktop Viewport */}
                    <motion.img 
                        src={kabah} 
                        alt="Kabah 3D Graphic" 
                        className="w-64 sm:w-80 lg:w-95 xl:w-110 h-auto drop-shadow-2xl"
                        animate={{ y: [0, -14, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Glassmorphism Accreditation Logos Row */}
                    <div className="flex items-center gap-4 sm:gap-6 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                            <img src={nahcon} alt="NAHCON logo" className="w-full h-full object-contain drop-shadow-sm" />
                        </div>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                            <img src={tnanta} alt="TNANTA logo" className="w-full h-full object-contain drop-shadow-sm" />
                        </div>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                            <img src={iata} alt="IATA logo" className="w-full h-full object-contain drop-shadow-sm" />
                        </div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                            <img src={hutoaon} alt="HUTOAON logo" className="w-full h-full object-contain drop-shadow-sm" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </header>
    );
};

export default Hero;