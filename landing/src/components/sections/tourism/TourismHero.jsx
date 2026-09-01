import { motion } from "motion/react";
import Navbar from '../general/Navbar';
import HeroTextLeft from '../general/HeroTextLeft';
import ButtonPrimary from '../general/ButtonPrimary';
import ButtonSecondary from '../general/ButtonSecondary';
import sky from '../../../assets/sky.png';
import europe_2 from '../../../assets/europe_2.jpg';
import united_kingdom from '../../../assets/united_kingdom.png';
import dubai from '../../../assets/dubai.png';
import united_state from '../../../assets/united_state.jpg';

const TourismHero = () => {
    return (
        <motion.header 
            className="bg-cover bg-center bg-no-repeat relative min-h-screen flex flex-col justify-between overflow-hidden"
            style={{ backgroundImage: `url(${sky})`, backgroundSize: "200% 200%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        > 
            {/* SkyBlue Overlay */}
            <div className="absolute inset-0 bg-skyblue/40 z-0" />

            <Navbar />

            {/* Main Content Area */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-28 md:pb-56 lg:pt-32 lg:pb-24 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 my-auto">
                
                {/* Text and Buttons Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex flex-col items-start text-left justify-start"
                >
                    <div className="w-full text-left">
                        <HeroTextLeft 
                            title="See more of the world." 
                            description="From the UAE to Europe, the United Kingdom, Canada and the United States — we help you plan international journeys around your destination, schedule and preferences." 
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-left justify-left gap-4 mt-12 w-full max-w-sm sm:max-w-none">
                        <div className="w-full sm:w-auto">
                            <ButtonPrimary text="Plan Your Trip" href="/tourism/#plan-trip" />
                        </div>
                        <div className="w-full sm:w-auto">
                            <ButtonSecondary text="Explore Destinations" href="/tourism/#destinations" />
                        </div>
                    </div>
                </motion.div>

                {/* Images Section:
                    - Mobile: 2x2 grid box below text with comfortable side margins
                    - Tablet: Horizontal row of 4 items positioned at the bottom, edge-to-edge (touching left and right frames), zero gaps
                    - Desktop: 2x2 grid box on the right side
                */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:w-1/2 grid grid-cols-2 shadow-2xl md:absolute md:bottom-0 md:left-0 md:right-0 md:flex md:flex-row md:max-w-none md:w-full md:gap-0 lg:static lg:grid lg:grid-cols-2"
                >
                    <div className="aspect-square overflow-hidden md:w-1/4 lg:aspect-square lg:w-auto transform transition-transform duration-700 hover:scale-105">
                        <img src={europe_2} alt="Europe" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square overflow-hidden md:w-1/4 lg:aspect-square lg:w-auto transform transition-transform duration-700 hover:scale-105">
                        <img src={united_kingdom} alt="United Kingdom" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square overflow-hidden md:w-1/4 lg:aspect-square lg:w-auto transform transition-transform duration-700 hover:scale-105">
                        <img src={dubai} alt="Dubai" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square overflow-hidden md:w-1/4 lg:aspect-square lg:w-auto transform transition-transform duration-700 hover:scale-105">
                        <img src={united_state} alt="United State" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

            </div>
        </motion.header>
    );
};

export default TourismHero;