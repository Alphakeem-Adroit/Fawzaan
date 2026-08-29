import Navbar from '../general/Navbar';
import HeroText from '../general/HeroText';
import ButtonPrimary from '../general/ButtonPrimary';
import ButtonSecondary from '../general/ButtonSecondary';
import sky from '../../../assets/sky.png';
import fawzaan_air from '../../../assets/fawzaan_air.png';

const Hero = () => {
    return (
        <header 
            className="bg-cover bg-center bg-no-repeat relative min-h-screen flex flex-col justify-between overflow-hidden" 
            style={{ backgroundImage: `url(${sky})` }}
        > 
            {/* SkyBlue Overlay */}
            <div className="absolute inset-0 bg-skyblue/40 z-0" />

            <Navbar />

            {/* Main Hero Content with adequate top padding to prevent navbar overlap */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 sm:px-6 lg:px-8 pt-36 pb-24 max-w-6xl mx-auto text-center">
                <HeroText 
                    title="Your journey of faith, made very easy." 
                    description="From preparation to pilgrimage and beyond, we arrange Hajj, Umrah and international travel with personal care, professional service and guidance you can rely on at every step." 
                />

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
                    <ButtonPrimary text="Explore Hajj/Umrah" href="/#hajj/umrah" />
                    <ButtonSecondary text="Explore Tourism" href="/tourism" />
                </div>
            </div>

            {/* Animated Moving Plane at the bottom (Visible on mobile, tablet & desktop) */}
            <div className="absolute bottom-4 left-0 w-full overflow-hidden pointer-events-none z-10">
                <img 
                    src={fawzaan_air} 
                    alt="Al-Fawzaan Air plane" 
                    className="w-60 sm:w-64 md:w-80 h-auto animate-plane" 
                />
            </div>

            {/* Keyframe Animation for Continuous Plane Movement */}
            <style>{`
                @keyframes flyPlane {
                    0% {
                        transform: translateX(-350px);
                    }
                    100% {
                        transform: translateX(calc(100vw + 350px));
                    }
                }
                .animate-plane {
                    animation: flyPlane 16s linear infinite;
                }
            `}</style>
        </header>
    );
};

export default Hero;