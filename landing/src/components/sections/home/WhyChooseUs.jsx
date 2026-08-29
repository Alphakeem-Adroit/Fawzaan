import { motion } from "motion/react";
import SectionTextLeft from '../general/SectionTextLeft';

const WhyChooseUs = () => {
    const reason = [
        { 
            title: "Personal care", 
            description: "Relationships come before transactions — our team stays reachable before, during and after your journey.", 
            evidence: "Evidence: 10,000+ client relationships, ongoing WhatsApp & Telegram support" 
        },
        { 
            title: "Professional service", 
            description: "Every journey is handled with careful planning, from documentation through to travel day.",
            evidence: "Evidence: transparent 6-step booking process" 
        },
        { 
            title: "Spiritual preparations", 
            description: "Pilgrims arrive prepared, not just present — through pre-Hajj and pre-Umrah lectures and seminars.",
            evidence: "Evidence: pre-departure lecture & seminar programme" 
        },
        { 
            title: "Always accessible", 
            description: "Our team operates around the clock, and every listed number is reachable on WhatsApp.",
            evidence: "Evidence: 24-hour support across phone, WhatsApp & office locations" 
        }
    ];

    return (
        <section id="why-choose-us" className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header with 1/3 Width Constraint */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-16 max-w-sm lg:w-1/3"
                >
                    <SectionTextLeft 
                        title="Every claim here is something you can check." 
                    />
                </motion.div>

                {/* Table-like Feature List */}
                <div className="flex flex-col">
                    {reason.map((feature, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="py-8 border-b border-gray-100 first:border-t first:border-gray-100"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start text-left">
                                {/* Title (Spans full row on tablet, column 1 on desktop) */}
                                <div className="sm:col-span-2 lg:col-span-1">
                                    <h3 className="font-serif font-semibold text-xl sm:text-2xl text-black tracking-tight">
                                        {feature.title}
                                    </h3>
                                </div>
                                
                                {/* Description */}
                                <div>
                                    <p className="font-sans text-sm sm:text-base text-black/80 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                                
                                {/* Evidence */}
                                <div>
                                    <p className="font-sans text-sm sm:text-base text-black/75 leading-relaxed">
                                        {feature.evidence}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;