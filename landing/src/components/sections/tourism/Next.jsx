import { motion } from "motion/react";
import SectionTextLeft from "../general/SectionTextLeft";
import sky from '../../../assets/sky.png';
import planning from '../../../assets/planning.jpg';
import support from '../../../assets/support.jpg';
import travel_guide from '../../../assets/travel_guide.png';

const Next = () => {
  const steps = [
    {
      number: "01",
      title: "Personalized Planning",
      description: "Itineraries shaped around your destination, schedule and travelling group.",
      image: planning,
    },
    {
      number: "02",
      title: "Direct Support",
      description: "A team that's reachable by phone and WhatsApp throughout your planning.",
      image: support,
    },
    {
      number: "03",
      title: "Honest Guidance",
      description: "Clear information as your trip comes together — no unnecessary surprises.",
      image: travel_guide,
    },
  ];

  return (
    <section 
      id="next" 
      className="relative py-20 lg:py-28 overflow-hidden bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${sky})`,
        animation: 'moveSky 25s ease-in-out infinite alternate'
      }}
    >
      {/* Inline styles for continuous background sky animation */}
      <style>{`
        @keyframes moveSky {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>

      {/* Top-Bottom Linear Overlay of Blue */}
      <div className="absolute inset-0 bg-linear-to-b from-blue/90 via-blue/50 to-blue/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          
          {/* Top Section: Heading Text */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-3xl"
          >
            <SectionTextLeft title="What happens after you register." className="[&_h2]:text-white" />
          </motion.div>

          {/* Bottom Section: Containers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="relative h-110 sm:h-120 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 bg-cover bg-center group transition-transform duration-300 hover:-translate-y-2"
                style={{ backgroundImage: `url(${step.image})` }}
              >
                {/* Linear Black Overlay from Bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

                {/* Top: White Figure Background with Blue Number */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-serif font-bold text-blue text-lg shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Bottom: All White Text Content */}
                <div className="relative z-10 flex flex-col gap-3">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Next;