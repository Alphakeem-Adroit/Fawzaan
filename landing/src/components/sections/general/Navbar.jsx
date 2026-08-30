import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import company_logo from '../../../assets/company_logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'Hajj/Umrah', to: '/#hajj/umrah' },
        { name: 'Tourism', to: '/tourism' },
        { name: 'Why Us', to: '/#why-choose-us' },
        { name: 'FAQ', to: '/#faq' },
        { name: 'Contact', to: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    return (
        <>
            {/* Main Navbar */}
            <nav 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
                    isScrolled ? 'bg-white py-3 shadow-md' : 'bg-transparent py-5'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    
                    {/* Brand Container (Logo & Company Name) */}
                    <Link to="/" className="flex items-center gap-4 focus:outline-none">
                        <img 
                            src={company_logo} 
                            alt="Al-Fawzaan Makarem International Travels & Tours Ltd Logo" 
                            className="w-12 h-12 md:w-16 md:h-16 object-contain"
                        />
                        
                        <div className={`hidden md:flex flex-col transition-colors duration-300 ${isScrolled ? 'text-navy' : 'text-white'}`}>
                            <small className="font-sans text-[10px] tracking-widest uppercase opacity-80 mb-0.5">
                                RC: 1958315
                            </small>
                            <h1 className="font-serif text-xl lg:text-xl font-bold leading-none tracking-tight">
                                Al‑Fawzaan Makarem
                            </h1>
                            <p className="font-sans text-sm lg:text-sm font-medium">
                                International Travels & Tours Ltd
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav Links (Glassmorphism Pill - Side by Side with Branding) */}
                    <div className="hidden md:flex items-center">
                        <ul className={`flex items-center gap-6 lg:gap-8 px-8 py-3 rounded-full border backdrop-blur-md transition-all duration-300 ${
                            isScrolled 
                                ? 'bg-black/5 border-black/10 text-black shadow-sm' 
                                : 'bg-white/10 border-white/20 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
                        }`}>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.to}
                                        className="font-sans font-medium text-sm transition-colors duration-200 hover:text-navy"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className={`md:hidden p-2 focus:outline-none transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU DRAWER */}
            <div 
                className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setIsMenuOpen(false)}
            />

            <div 
                className={`fixed top-0 left-0 h-screen w-3/4 max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 p-6 border-b border-gray-100">
                    <img src={company_logo} alt="Al-Fawzaan Makarem Logo" className="w-10 h-10 object-contain" />
                    <div>
                        <h2 className="font-serif text-lg font-bold text-navy leading-tight">Al-Fawzaan Makarem</h2>
                        <p className="font-sans text-xs text-gray-600">International Travels & Tours Ltd</p>
                    </div>
                </Link>

                <ul className="flex flex-col py-4 overflow-y-auto">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link 
                                to={link.to}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-6 py-4 font-sans text-gray-800 font-medium transition-colors duration-200 hover:bg-gray-50 hover:text-navy border-l-4 border-transparent hover:border-navy"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;