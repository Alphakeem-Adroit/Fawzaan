import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import uae from '../../../assets/uae.jpg';
import europe from '../../../assets/europe.jpg';
import uk from '../../../assets/uk.png';
import canada from '../../../assets/canada.jpg';
import us from '../../../assets/us.jpg';
import SectionTextLeft from '../general/SectionTextLeft';

const TravelPlaces = () => {
  const rightDestinations = [
    {
      img: europe,
      alt: "Europe",
      title: "Europe",
      description: "Multi-country and single-destination journeys"
    },
    {
      img: uk,
      alt: "United Kingdom",
      title: "United Kingdom",
      description: "A popular route for family and business travel"
    },
    {
      img: canada,
      alt: "Canada",
      title: "Canada",
      description: "Long-stay and family-visit itineraries."
    },
    {
      img: us,
      alt: "United States of America",
      title: "United States",
      description: "Business, leisure and family travel."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white py-20 lg:py-28 overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 lg:max-w-xl mb-12"
        >
          <SectionTextLeft 
            title="Places we currently travel to." 
            description="Five regions, five different kinds of journey — each shaped around what you're travelling for." 
          />
        </motion.div>

        {/* Main Grid Layout: UAE on left (larger), Others stacked vertically on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: UAE Featured Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 h-[450px] lg:h-[600px] relative overflow-hidden group shadow-md"
          >
            <img 
              src={uae} 
              alt="United Arab Emirates" 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
            />
            {/* Black gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 sm:p-10 transition-all duration-500">
              <p className="font-serif text-2xl sm:text-3xl text-white mb-2 transform transition-transform duration-300 group-hover:translate-x-1">
                United Arab Emirates
              </p>
              <p className="font-sans text-sm sm:text-base text-white/80 max-w-md">
                A frequent starting point for international travelers connecting through the Gulf.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Vertically Stacked Destination Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            {rightDestinations.map((dest, index) => (
              <div 
                key={index}
                className="bg-offwhite border border-gray-200 p-4 sm:p-5 flex items-center justify-between group transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-blue/50 cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* Thumbnail with zoom effect on hover */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden shrink-0">
                    <img 
                      src={dest.img} 
                      alt={dest.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                    />
                  </div>
                  <div>
                    <p className="font-serif text-lg sm:text-xl text-black group-hover:text-blue transition-colors duration-300">
                      {dest.title}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-black/70 mt-1">
                      {dest.description}
                    </p>
                  </div>
                </div>

                {/* Lucide Arrow Right Icon with interactive slide effect */}
                <div className="shrink-0 pl-4">
                  <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-black group-hover:bg-blue group-hover:text-white group-hover:border-blue transition-all duration-300">
                    <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default TravelPlaces;