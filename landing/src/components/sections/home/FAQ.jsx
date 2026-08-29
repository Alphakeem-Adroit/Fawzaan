import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import man from '../../../assets/man.jpg';
import SectionTextLeft from '../general/SectionTextLeft';

const FAQ = () => {
    const FAQFeatures = [
        { 
            question: "How much does Hajj or Umrah cost?", 
            answer: "Pricing depends on exchange rates, Saudi government policy, accommodation and the package you select. Request current pricing and our team will confirm the exact figure for your chosen package." 
        },
        { 
            question: "What documents do I need?", 
            answer: "Your international passport and vaccination documentation are required as part of Step 4 of the booking process. Our team will confirm the complete list for your journey." 
        },
        { 
            question: "Can I pay in installments", 
            answer: "Speak with our team about payment structure for your selected package." 
        },
        { 
            question: "Do you arrange visas, flights and accommodation?", 
            answer: "Yes — arrangements are included as part of your selected package. Full inclusions are confirmed at registration." 
        }
    ];

    // Initialize all items as open (true) by default
    const [openStates, setOpenStates] = useState(
        new Array(FAQFeatures.length).fill(true)
    );

    const toggleAccordion = (index) => {
        setOpenStates((prev) => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    return (
        <section id="faq" className="bg-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    
                    {/* Left Column: Title, Description & Feature List */}
                    <div className="flex flex-col justify-between gap-16">
                        <div className="flex flex-col gap-16">
                            <SectionTextLeft 
                                title="Common questions, answered plainly." 
                            />
                            {/* Interactive FAQ List */}
                            <div className="flex flex-col">
                                {FAQFeatures.map((feature, index) => {
                                    const isOpen = openStates[index];
                                    return (
                                        <div key={index}>
                                            <hr className="border-gray-100" />
                                            <div 
                                                onClick={() => toggleAccordion(index)}
                                                tabIndex={0}
                                                className="group flex items-center justify-between py-6 px-4 rounded-2xl transition-all duration-300 ease-in-out hover:translate-x-2 focus:translate-x-2 focus:outline-none cursor-pointer"
                                            >
                                                <div className="flex flex-col pr-4 flex-1">
                                                    <h3 className="font-serif font-semibold text-lg sm:text-xl text-black group-hover:text-blue transition-colors">
                                                        {feature.question}
                                                    </h3>
                                                    
                                                    {/* Animated Smooth Collapse/Expand Wrapper */}
                                                    <div 
                                                        className={`grid transition-all duration-300 ease-in-out ${
                                                            isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'
                                                        }`}
                                                    >
                                                        <div className="overflow-hidden">
                                                            <p className="font-sans text-sm sm:text-base text-gray-600">
                                                                {feature.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="shrink-0 p-2 rounded-full text-black transition-all duration-300">
                                                    {isOpen ? (
                                                        <Minus className="w-5 h-5 text-blue transition-transform duration-300" />
                                                    ) : (
                                                        <Plus className="w-5 h-5 transition-transform duration-300" />
                                                    )}
                                                </div>
                                            </div>
                                            {index === FAQFeatures.length - 1 && <hr className="border-gray-100" />}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                    </div>

                    {/* Right Column: 100% Full Height Image */}
                    <div className="relative w-full h-full min-h-[450px] sm:min-h-[550px] lg:min-h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-navy/5 rounded-3xl transform rotate-2 scale-[0.98] -z-10" />
                        <img 
                            src={man} 
                            alt="A pilgrim" 
                            className="w-full h-full object-cover rounded-3xl shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;