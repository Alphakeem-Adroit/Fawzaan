import { motion } from 'framer-motion';
import plane from '../../../assets/plane.jpg';
import SectionTextLeft from '../general/SectionTextLeft';

const Travel = () => {
  return (
    <section id="travel" className="bg-offwhite w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Image side with smooth entrance animation */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full h-[350px] md:h-full min-h-[400px] overflow-hidden relative group"
        >
          <img 
            src={plane} 
            alt="Flying plane" 
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
          />
        </motion.div>
        
        {/* Text side with smooth entrance animation */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full flex items-center px-6 sm:px-10 lg:px-16 py-12 md:py-16"
        >
          <div className="w-full">
            <SectionTextLeft 
              title="Travel isn't only pilgrimage — it's family, business and discovery too." 
              description="The same personal attention that guides our Hajj and Umrah travelers extends to every international journey we arrange — whether it's a family visit, a business trip, or a first time abroad." 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Travel;