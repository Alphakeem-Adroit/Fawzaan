import SectionTextLeft from "../general/SectionTextLeft";
import sky from '../../../assets/sky.png';
import registration from '../../../assets/registration.png';
import calendar from '../../../assets/calendar.jpg';
import whatsapp from '../../../assets/whatsapp.png';
import masjid_haram from '../../../assets/masjid_haram.png';

const Next = () => {
  const steps = [
    {
      number: "01",
      title: "Register interest and choose preferred package",
      description: "Complete the Hajj or Umrah registration form and select the service level that suits you.",
      image: registration,
    },
    {
      number: "02",
      title: "Secure booking and submit necessary documents",
      description: "Make full or commitment payment and submit passport and vaccination documentation.",
      image: calendar,
    },
    {
      number: "03",
      title: "Prepare",
      description: "Join WhatsApp/Telegram, attend sessions.",
      image: whatsapp,
    },
    {
      number: "04",
      title: "Travel with guidance",
      description: "Support throughout your pilgrimage.",
      image: masjid_haram,
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
      <div className="absolute inset-0 bg-gradient-to-b from-blue/90 via-blue/50 to-blue/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Section Text */}
          <div className="lg:col-span-4 lg:sticky">
            <SectionTextLeft title="What happens after you register." className="[&_h2]:text-white" />
          </div>

          {/* Right Column: Containers Grid (Longer than square / Portrait cards) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 bg-cover bg-center group transition-transform duration-300 hover:-translate-y-2"
                style={{ backgroundImage: `url(${step.image})` }}
              >
                {/* Linear Black Overlay from Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

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
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Next;