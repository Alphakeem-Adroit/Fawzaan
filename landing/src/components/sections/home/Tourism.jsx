import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import uae from '../../../assets/uae.jpg';
import europe from '../../../assets/europe.jpg';
import uk from '../../../assets/uk.png';
import canada from '../../../assets/canada.jpg';
import us from '../../../assets/us.jpg';
import ButtonPrimary from '../general/ButtonPrimary';
import SectionTextCenter from '../general/SectionTextCenter';

const Tourism = () => {
    const scrollRef = useRef(null);

    const destinations = [
        { name: "UAE", image: uae },
        { name: "Europe", image: europe },
        { name: "United Kingdom", image: uk },
        { name: "Canada", image: canada },
        { name: "United States", image: us },
    ];

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
        }
    };

    return (
        <section id="tourism" className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header with Controlled Width Container */}
                <div className="mb-16 max-w-3xl mx-auto text-center">
                    <SectionTextCenter 
                        title="Explore Our Global Destinations" 
                        description="Discover breathtaking international locations tailored with premium hospitality, seamless visa processing, and unforgettable tour experiences." 
                    />
                </div>

                {/* Horizontal Scrollable Destinations Container */}
                <div 
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {destinations.map((destination, index) => (
                        <a 
                            key={index}
                            href={destination.href}
                            className="relative group overflow-hidden rounded-3xl h-130 sm:h-140 w-75 sm:w-87.5 md:w-100 shrink-0 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer block snap-start"
                        >
                            {/* Full Image Background */}
                            <img 
                                src={destination.image} 
                                alt={destination.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            {/* Black down-to-up linear overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300" />

                            {/* Left-Aligned Large Serif Text */}
                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start justify-end">
                                <h3 className="font-serif font-bold text-white text-3xl sm:text-4xl text-left tracking-tight">
                                    {destination.name}
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom CTA and Navigation Arrows */}
                <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-6">
                    <ButtonPrimary text="Get Started With Tourism" href="/tourism" />

                    <div className="flex items-center gap-4">
                        <button 
                            onClick={scrollLeft}
                            aria-label="Previous destination"
                            className="w-12 h-12 rounded-full border-2 border-blue flex items-center justify-center text-blue hover:bg-blue hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={scrollRight}
                            aria-label="Next destination"
                            className="w-12 h-12 rounded-full border-2 border-blue flex items-center justify-center text-blue hover:bg-blue hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Tourism;