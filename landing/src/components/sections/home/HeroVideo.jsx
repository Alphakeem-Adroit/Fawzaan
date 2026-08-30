import { motion } from "motion/react";
import Navbar from '../general/Navbar';
import HeroText from '../general/HeroText';
import ButtonPrimary from '../general/ButtonPrimary';
import ButtonSecondary from '../general/ButtonSecondary';
import SaudiAirTakeOff from '../../../assets/SaudiAirTakeOff.mp4';

const Hero = () => {
    return (
        <header className="relative min-h-screen flex flex-col justify-between overflow-hidden"> 
            {/* Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                poster="../../../assets/sky.png" 
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={SaudiAirTakeOff} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* SkyBlue Overlay */}
            <div className="absolute inset-0 bg-navy/80 z-10" />

            <Navbar />

            {/* Main Hero Content with adequate top padding to prevent navbar overlap */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-20 flex flex-col items-center justify-center grow px-4 sm:px-6 lg:px-8 pt-36 pb-24 max-w-6xl mx-auto text-center"
            >
                <HeroText 
                    title="Your journey of faith, made very easy." 
                    description="From preparation to pilgrimage and beyond, we arrange Hajj, Umrah and international travel with personal care, professional service and guidance you can rely on at every step." 
                />

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full max-w-sm sm:max-w-none">
                    <div className="w-full sm:w-auto">
                        <ButtonPrimary text="Explore Hajj/Umrah" href="/#hajj/umrah" />
                    </div>
                    <div className="w-full sm:w-auto">
                        <ButtonSecondary text="Explore Tourism" href="/tourism" />
                    </div>
                </div>
            </motion.div>
        </header>
    );
};

export default Hero;