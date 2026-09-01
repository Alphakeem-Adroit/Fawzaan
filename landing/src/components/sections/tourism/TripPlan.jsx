import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTextLeft from "../general/SectionTextLeft";
import ButtonPrimary from '../general/ButtonPrimary';

const TripPlan = () => {
    const [destination, setDestination] = useState('');
    const [travelPeriod, setTravelPeriod] = useState('');
    const [travelers, setTravelers] = useState('');
    
    const [experience, setExperience] = useState('');
    const [purpose, setPurpose] = useState('');

    const experienceOptions = ['Family', 'Couple', 'Individual', 'Group', 'Corporate'];
    const purposeOptions = ['Leisure', 'Family visit', 'Business', 'Cultural', 'Tourism'];

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Hello, I want to plan a trip:%0A- Destination: ${destination}%0A- Travel Period: ${travelPeriod}%0A- Experience Type: ${experience}%0A- Number of Travelers: ${travelers}%0A- Traveling Purpose: ${purpose}`;
        window.open(`https://wa.me/2348068522867?text=${message}`, '_blank');
    };

    return (
        <section id="plan-trip" className="bg-white py-20 lg:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with smooth entrance animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 lg:max-w-xl"
                >
                    <SectionTextLeft 
                        title="Travel your way." 
                        description="Your journey doesn't have to fit a template. Tell us where you want to go, when, and what kind of experience you have in mind — we'll help shape it around you." 
                    />
                </motion.div>

                {/* Form Container with smooth entrance animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="mt-12 bg-offwhite p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-500"
                >
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        
                        {/* Left Column: Destination, Preferred Travel Period, Type of Experience */}
                        <div className="flex flex-col gap-6">
                            {/* Destination */}
                            <div className="flex flex-col gap-2 group">
                                <label className="font-sans text-xs sm:text-sm font-medium text-black/80 group-hover:text-blue transition-colors duration-300">Destination:</label>
                                <select 
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    required 
                                    className="bg-white border border-gray-300 rounded-none px-4 pr-12 py-3 text-sm font-sans outline-none focus:border-blue focus:ring-2 focus:ring-blue/30 hover:border-blue/50 transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px_16px] bg-position-[right_1rem_center] bg-no-repeat"
                                >
                                    <option value="" disabled>Select destination</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Europe">Europe</option>
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                </select>
                            </div>

                            {/* Preferred Travel Period */}
                            <div className="flex flex-col gap-2 group">
                                <label className="font-sans text-xs sm:text-sm font-medium text-black/80 group-hover:text-blue transition-colors duration-300">Preferred Travel Period:</label>
                                <select 
                                    value={travelPeriod}
                                    onChange={(e) => setTravelPeriod(e.target.value)}
                                    required 
                                    className="bg-white border border-gray-300 rounded-none px-4 pr-12 py-3 text-sm font-sans outline-none focus:border-blue focus:ring-2 focus:ring-blue/30 hover:border-blue/50 transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px_16px] bg-position-[right_1rem_center] bg-no-repeat"
                                >
                                    <option value="" disabled>Select travel period</option>
                                    <option value="January - March">January - March</option>
                                    <option value="April - June">April - June</option>
                                    <option value="July - September">July - September</option>
                                    <option value="October - December">October - December</option>
                                    <option value="Flexible / Any time">Flexible / Any time</option>
                                </select>
                            </div>

                            {/* Type of Experience */}
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-xs sm:text-sm font-medium text-black/80">Type of Experience:</label>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {experienceOptions.map((opt) => (
                                        <button
                                            type="button"
                                            key={opt}
                                            onClick={() => setExperience(opt)}
                                            className={`px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-medium transition-all duration-300 transform active:scale-95 border outline-none focus:ring-2 focus:ring-blue/30 ${
                                                experience === opt 
                                                    ? 'bg-linear-to-r from-blue to-black text-white border-transparent shadow-md scale-105' 
                                                    : 'bg-white text-black border-gray-300 hover:border-blue hover:-translate-y-0.5'
                                            }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                                <input type="hidden" name="experience" value={experience} required />
                            </div>
                        </div>

                        {/* Right Column: Number of Travelers, Traveling Purpose, Button */}
                        <div className="flex flex-col gap-6">
                            {/* Number of Travelers */}
                            <div className="flex flex-col gap-2 group">
                                <label className="font-sans text-xs sm:text-sm font-medium text-black/80 group-hover:text-blue transition-colors duration-300">Number of Travelers:</label>
                                <select 
                                    value={travelers}
                                    onChange={(e) => setTravelers(e.target.value)}
                                    required 
                                    className="bg-white border border-gray-300 rounded-none px-4 pr-12 py-3 text-sm font-sans outline-none focus:border-blue focus:ring-2 focus:ring-blue/30 hover:border-blue/50 transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-size-[16px_16px] bg-position-[right_1rem_center] bg-no-repeat"
                                >
                                    <option value="" disabled>Select number</option>
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Traveler' : 'Travelers'}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Traveling Purpose */}
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-xs sm:text-sm font-medium text-black/80">Traveling purpose:</label>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {purposeOptions.map((opt) => (
                                        <button
                                            type="button"
                                            key={opt}
                                            onClick={() => setPurpose(opt)}
                                            className={`px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-medium transition-all duration-300 transform active:scale-95 border outline-none focus:ring-2 focus:ring-blue/30 ${
                                                purpose === opt 
                                                    ? 'bg-linear-to-r from-blue to-black text-white border-transparent shadow-md scale-105' 
                                                    : 'bg-white text-black border-gray-300 hover:border-blue hover:-translate-y-0.5'
                                            }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                                <input type="hidden" name="purpose" value={purpose} required />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 flex justify-start transition-transform duration-300 hover:translate-x-1">
                                <ButtonPrimary text="Plan My Trip" type="submit" />
                            </div>
                        </div>

                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default TripPlan;