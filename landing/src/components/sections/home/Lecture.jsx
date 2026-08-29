import { motion } from "motion/react";
import { ArrowRight } from 'lucide-react';
import lecture from '../../../assets/lecture.jpg';
import SectionTextLeft from '../general/SectionTextLeft';
import ButtonPrimary from '../general/ButtonPrimary';

const Lecture = () => {
    const pilgrimageFeatures = [
        { 
            title: "Pre-Hajj lectures", 
            description: "Structured preparation sessions before departure." 
        },
        { 
            title: "Pre-Umrah seminars", 
            description: "Guidance tailored to first-time and returning pligrims." 
        },
        { 
            title: "Live pilgrimage guidance", 
            description: "Support while you are on the ground in the Kingdom" 
        },
        { 
            title: "WhatsApp & Telegram updates", 
            description: "Direct channels for real-time communication." 
        }
    ];

    return (
        <section id="lecture" className="bg-offwhite py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    
                    {/* Left Column: Title, Description & Feature List */}
                    <div className="flex flex-col justify-between gap-16">
                        <div className="flex flex-col gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <SectionTextLeft 
                                    title="We don't just arrange your journey. We prepare you for it." 
                                    description="Pilgrimage is more than logistics. Before you travel, and throughout the journey, our guidance is built into the experience — not offered as an afterthought." 
                                />
                            </motion.div>
                            
                            {/* Interactive Feature List */}
                            <div className="flex flex-col">
                                {pilgrimageFeatures.map((feature, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                    >
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
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        >
                            <ButtonPrimary text="Start Your Journey" href="/contact" />
                        </motion.div>
                    </div>

                    {/* Right Column: 100% Full Height Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="relative w-full h-full min-h-112.5 sm:min-h-137.5 lg:min-h-full flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-navy/5 rounded-3xl transform rotate-2 scale-[0.98] -z-10" />
                        <img 
                            src={lecture} 
                            alt="Organizaing preparatory lecture for pilgrim" 
                            className="w-full h-full object-cover rounded-3xl shadow-2xl"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Lecture;