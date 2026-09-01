import { motion } from "motion/react";
import company_logo from '../../../assets/company_logo.png';
import nahcon from '../../../assets/nahcon.webp';
import tnanta from '../../../assets/tnanta.png';
import iata from '../../../assets/iata.png';

const Footer = () => {
  // Reusable animated underline style for all links
  const linkStyle = "relative inline-block text-black hover:text-blue transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-2px] after:left-0 after:bg-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";

  return (
    <footer className="bg-offwhite pt-20 pb-12 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-gray-200">
          
          {/* Brand Info Column (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="flex flex-col items-start gap-4">
              <img 
                src={company_logo} 
                alt="Al-Fawzaan Makarem International Travels & Tours Ltd Logo" 
                className="w-20 h-20 md:w-16 md:h-16 object-contain"
              />
              <div className="flex flex-col text-navy">
                <small className="font-sans text-[10px] tracking-widest uppercase opacity-75 mb-0.5">
                  RC: 1958315
                </small>
                <h1 className="font-serif text-xl lg:text-2xl font-bold leading-tight tracking-tight">
                  Al‑Fawzaan Makarem
                </h1>
                <p className="font-sans text-sm font-medium opacity-90">
                  International Travels & Tours Ltd
                </p>
              </div>
            </div>

            <p className="font-sans text-gray-600 text-base max-w-sm leading-relaxed">
              A trusted partner for a well-guided, comfortable and spiritually focused journey.
            </p>

            {/* Accreditation Logos */}
            <div className="flex items-center gap-4 pt-2">
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={nahcon} alt="NAHCON logo" className="w-full h-full object-contain" />
              </div>
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={tnanta} alt="TNANTA logo" className="w-full h-full object-contain" />
              </div>
              <div className="w-24 h-24 flex items-center justify-center">
                <img src={iata} alt="IATA logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </motion.div>

          {/* Links and Contact Columns (Right) - Single col on mobile, 2 cols on tablet, 4 cols on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            
            {/* Services */}
            <div className="flex flex-col gap-4">
              <p className="font-serif font-bold text-lg text-blue tracking-tight">Services</p>
              <ul className="flex flex-col gap-3 font-sans text-black">
                <li><a href="/#hajj/umrah" className={linkStyle}>Hajj</a></li>
                <li><a href="/#hajj/umrah" className={linkStyle}>Umrah</a></li>
                <li><a href="/#tourism" className={linkStyle}>International Tours</a></li>
                <li><a href="/tourism/#plan-trip" className={linkStyle}>Plan a Tour</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <p className="font-serif font-bold text-lg text-blue tracking-tight">Company</p>
              <ul className="flex flex-col gap-3 font-sans text-black">
                <li><a href="/#why-choose-us" className={linkStyle}>About Us</a></li>
                <li><a href="/#lecture" className={linkStyle}>Our Values</a></li>
                <li><a href="/#testimonial" className={linkStyle}>Testimonials</a></li>
                <li><a href="/#faq" className={linkStyle}>FAQs</a></li>
              </ul>
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-4">
              <p className="font-serif font-bold text-lg text-blue tracking-tight">Contacts</p>
              <ul className="flex flex-col gap-2.5 font-sans text-black">
                <li><a href="https://wa.me/2348068522867" target="_blank" rel="noopener noreferrer" className={linkStyle}>+234 806 852 2867</a></li>
                <li><a href="https://wa.me/2347015357229" target="_blank" rel="noopener noreferrer" className={linkStyle}>+234 701 535 7229</a></li>
                <li><a href="https://wa.me/2348100661207" target="_blank" rel="noopener noreferrer" className={linkStyle}>+234 810 066 1207</a></li>
                <li><a href="https://wa.me/2347039774806" target="_blank" rel="noopener noreferrer" className={linkStyle}>+234 703 977 4806</a></li>
                <li><a href="https://wa.me/2250566543285" target="_blank" rel="noopener noreferrer" className={linkStyle}>+225 056 654 3285</a></li>
                <li><a href="https://wa.me/2250555042468" target="_blank" rel="noopener noreferrer" className={linkStyle}>+225 055 504 2468</a></li>
                <li className="pt-2"><a href="mailto:al-fawzaanislamici@gmail.com" className={`${linkStyle} break-all`}>Send us a mail</a></li>
              </ul>
            </div>

          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-sm text-gray-500 text-center sm:text-left"
        >
          <p>&copy; 2026 Al-Fawzaan Makarem International Travels & Tours Limited. All Rights Reserved.</p>
          <small>Website designed and developed with ❤️ by <a href="https://wa.me/2349033023139" className="relative inline-block text-blue hover:text-black transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:-bottom-0.5 after:left-0 after:bg-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">@AlphakeemAdroit</a></small>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;