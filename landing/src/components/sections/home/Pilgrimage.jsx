import { ArrowRight } from 'lucide-react';
import kabah_door from '../../../assets/kabah_door.png';
import SectionTextLeft from '../general/SectionTextLeft';
import ButtonPrimary from '../general/ButtonPrimary';

const Pilgrimage = () => {
    const pilgrimageFeatures = [
        { 
            title: "Visa & Documentation", 
            description: "Guided support through requirements and fast-track processing." 
        },
        { 
            title: "Accommodation & Hotels", 
            description: "Comfortable stays close to the Haramain in Makkah and Madinah." 
        },
        { 
            title: "Flight & Transportation", 
            description: "Seamless airline bookings and dedicated air-conditioned transit." 
        },
        { 
            title: "Spiritual & Ground Guidance", 
            description: "Experienced scholars and coordinators guiding every ritual." 
        }
    ];

    return (
        <section id="hajj/umrah" className="bg-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    
                    {/* Left Column: Title, Description & Feature List */}
                    <div className="flex flex-col justify-between gap-16">
                        <div className="flex flex-col gap-16">
                            <SectionTextLeft 
                                title="A Hajj/Umrah experience built for the way you travel." 
                                description="Whether you're travelling alone, with family, or as part of a group, we arrange your Hajj/Umrah journey. Every pilgrimage deserves careful preparation, dependable support and experienced guidance." 
                            />
                            {/* Interactive Feature List */}
                            <div className="flex flex-col">
                                {pilgrimageFeatures.map((feature, index) => (
                                    <div key={index}>
                                        <hr className="border-gray-100" />
                                        <div 
                                            tabIndex={0}
                                            className="group flex items-center justify-between py-6 px-4 rounded-2xl transition-all duration-300 ease-in-out hover:translate-x-2 focus:bg-skyblue/10 focus:translate-x-2 focus:outline-none cursor-pointer"
                                        >
                                            <div className="flex flex-col pr-4">
                                                <h3 className="font-serif font-semibold text-lg sm:text-xl text-black group-hover:text-blue transition-colors">
                                                    {feature.title}
                                                </h3>
                                                <p className="font-sans text-sm sm:text-base text-gray-600 mt-1">
                                                    {feature.description}
                                                </p>
                                            </div>

                                            <div className="shrink-0 p-2 rounded-full text-black transition-all duration-300">
                                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                        {index === pilgrimageFeatures.length - 1 && <hr className="border-gray-100" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <ButtonPrimary text="Start Your Journey" href="/contact" />
                        </div>
                    </div>

                    {/* Right Column: 100% Full Height Image */}
                    <div className="relative w-full h-full min-h-[450px] sm:min-h-[550px] lg:min-h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-navy/5 rounded-3xl transform rotate-2 scale-[0.98] -z-10" />
                        <img 
                            src={kabah_door} 
                            alt="Kabah Door" 
                            className="w-full h-full object-cover rounded-3xl shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pilgrimage;