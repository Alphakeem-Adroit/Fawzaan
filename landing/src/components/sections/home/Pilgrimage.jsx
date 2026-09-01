import { motion } from "motion/react";
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
        <section id="hajj/umrah" className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    
                    {/* Left Column: Title, Description & Feature List */}
                    <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col justify-between gap-16"
                    >
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
                                            className="group flex items-center justify-between py-6 px-4 transition-all duration-300 ease-in-out hover:translate-x-2 focus:translate-x-2 focus:outline-none cursor-pointer"
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
                        
                        <div className="w-1/2">
                            <ButtonPrimary text="Start Your Journey" href="/contact" />
                        </div>
                    </motion.div>

                    {/* Right Column: 100% Full Height Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative w-full h-full min-h-112.5 sm:min-h-137.5 lg:min-h-full flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-navy/5 rounded-3xl transform rotate-2 scale-[0.98] -z-10" />
                        <img 
                            src={kabah_door} 
                            alt="Kabah Door" 
                            className="w-full h-full object-cover rounded-3xl shadow-2xl"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Pilgrimage;