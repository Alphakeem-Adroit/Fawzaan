import Navbar from '../components/sections/general/Navbar';
import Footer from '../components/sections/home/Footer';
import HeroText from '../components/sections/general/HeroText';
import SectionTextLeft from '../components/sections/general/SectionTextLeft';
import { MessageCircle, Mail, Clock, Info, MapPin } from 'lucide-react';
import sky from '../assets/sky.png';

const Contact = () => {
    return (
        <main className="bg-white min-h-screen flex flex-col justify-between">
            <header className="relative bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${sky})` }}>
                <div className="absolute inset-0 bg-linear-to-b from-blue-950/20 via-blue-900/20 to-blue-950/10 z-0"></div>
                <div className="relative z-10">
                    <Navbar />
                    <div className="pt-48 pb-24">
                        <HeroText 
                            title="Speak With Our Travel Team" 
                            description="Whether you are planning Hajj, preparing for Umrah, or looking for your next international adventure, our team is available to help you understand your options and take the next step with confidence." 
                        />
                    </div>
                </div>
            </header>

            {/* Contact Information Section */}
            <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <SectionTextLeft 
                    title="We're Here to Help" 
                    description="Have a question about a package, documentation, pricing, travel arrangements, or your booking? Reach out through any of our available channels." 
                />

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
                    
                    {/* Phone / WhatsApp Card */}
                    <div className="bg-skyblue rounded-3xl p-6 sm:p-8 flex flex-col shadow-lg">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">Phones</h3>
                            </div>

                            <ul className="flex flex-col gap-3 font-sans">
                                {[
                                    { num: "+234 806 852 2867", link: "https://wa.me/2348068522867" },
                                    { num: "+234 701 535 7229", link: "https://wa.me/2347015357229" },
                                    { num: "+234 810 066 1207", link: "https://wa.me/2348100661207" },
                                    { num: "+234 703 977 4806", link: "https://wa.me/2347039774806" },
                                    { num: "+225 056 654 3285", link: "https://wa.me/2250566543285" },
                                    { num: "+225 055 504 2468", link: "https://wa.me/2250555042468" },
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <a 
                                            href={item.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-white font-medium text-sm sm:text-base hover:underline transition-all block py-1"
                                        >
                                            {item.num}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Info Box */}
                        <div className="mt-8 bg-offwhite rounded-2xl p-4 flex items-start gap-3 shadow-inner">
                            <Info className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                            <small className="font-sans text-xs text-black leading-relaxed">
                                Click on any of the listed numbers to message us on WhatsApp. You can also call us directly.
                            </small>
                        </div>
                    </div>

                    {/* Email and Business Hours Container Column */}
                    <div className="flex flex-col gap-8">
                        {/* Email Card */}
                        <div className="bg-skyblue rounded-3xl p-6 sm:p-8 flex flex-col shadow-lg">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">E-mail</h3>
                                </div>
                                <p className="font-sans text-gray-200 text-xs sm:text-sm mb-4">Send us your inquiries anytime and we will respond promptly.</p>
                            </div>
                            <div className="mt-2">
                                <a 
                                    href="mailto:al-fawzaanislamici@gmail.com" 
                                    className="font-sans text-white font-medium text-xs sm:text-sm break-all hover:underline block"
                                >
                                    al-fawzaanislamici@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Business Hours Card */}
                        <div className="bg-skyblue rounded-3xl p-6 sm:p-8 flex flex-col shadow-lg">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">Business Hours</h3>
                                </div>
                                <p className="font-sans text-gray-200 text-xs sm:text-sm">Our support and booking lines are open around the clock.</p>
                            </div>
                            <div className="mt-4">
                                <p className="font-serif text-white text-lg sm:text-xl font-semibold">24 hours</p>
                                <p className="font-sans text-gray-200 text-xs sm:text-sm font-medium mt-0.5">Every day</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Office Locations Section */}
                <div className="mt-24">
                    <SectionTextLeft title="Our Office Locations" />

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start">
                        {[
                            {
                                city: "1. Awo, Osun State",
                                address: "Al-Fawzaan Permanent Site, Opposite National Directorate of Employment, Along Iragberi Road, Awo, Osun State, Nigeria."
                            },
                            {
                                city: "2. Osogbo, Osun State",
                                address: "Office 17 & 18, Juliannah Shopping Complex, Station Road, Osogbo, Osun State, Nigeria."
                            },
                            {
                                city: "3. Ilorin, Kwara State",
                                address: "Office 14, Charis Shopping Complex, Post Office, Ilorin, Kwara State, Nigeria."
                            },
                            {
                                city: "4. Ede, Osun State",
                                address: "Floor 3, Atapa, Station Road, Ede, Osun State, Nigeria."
                            },
                            {
                                city: "5. Ejigbo, Osun State",
                                address: "Office C6 & C7, Laba Shopping Complex, Opposite Ejigbo Local Government Secretariat, Ejigbo, Osun State, Nigeria."
                            },
                            {
                                city: "6. Abidjan, Côte d’Ivoire",
                                address: "Floor 1, Close to Ansarudeen Central Mosque, College Saint Bernard Street, Bromacouté, Adjamé, Abidjan, Côte d’Ivoire."
                            }
                        ].map((office, idx) => (
                            <div key={idx} className="bg-skyblue rounded-3xl p-6 sm:p-8 flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-1">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">{office.city}</h3>
                                    </div>
                                    <p className="font-sans text-gray-200 text-xs sm:text-sm leading-relaxed mt-2">
                                        {office.address}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Contact;