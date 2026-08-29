import SectionTextLeft from "../general/SectionTextLeft";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      title: "Our unforgettable Umrah journey with Al-Fawzaan",
      embedUrl: "https://www.youtube.com/embed/G0I7-lG39VA?si=7wHqsfC1dz6ar9qi",
    },
    {
      id: 2,
      title: "Seamless visa processing and exceptional ground guidance",
      embedUrl: "https://www.youtube.com/embed/G0I7-lG39VA?si=7wHqsfC1dz6ar9qi",
    },
    {
      id: 3,
      title: "From documentation to travel day, everything was smooth",
      embedUrl: "https://www.youtube.com/embed/G0I7-lG39VA?si=7wHqsfC1dz6ar9qi",
    },
    {
      id: 4,
      title: "Our unforgettable Umrah journey with Al-Fawzaan",
      embedUrl: "https://www.youtube.com/embed/G0I7-lG39VA?si=7wHqsfC1dz6ar9qi",
    },
    {
      id: 5,
      title: "Seamless visa processing and exceptional ground guidance",
      embedUrl: "https://www.youtube.com/embed/G0I7-lG39VA?si=7wHqsfC1dz6ar9qi",
    },
    {
      id: 6,
      title: "From documentation to travel day, everything was smooth",
      embedUrl: "https://www.youtube.com/embed/G0I7-lG39VA?si=7wHqsfC1dz6ar9qi",
    },
  ];

  return (
    <section id="testimonial" className="bg-offwhite py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 w-full lg:w-1/3 md:w-1/2 sm:w-full">
          <SectionTextLeft title="Hear from those who travelled with us." />
        </div>

        {/* Video Grid: 1 on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((video, index) => (
            <div 
              key={index} 
              className="bg-offwhite rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Responsive 16:9 Aspect Ratio Container for Iframe */}
              <div className="relative w-full aspect-video">
                <iframe 
                  className="w-full h-full"
                  src={video.embedUrl} 
                  title={video.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>

              {/* Card Title/Description */}
              <div className="p-6 flex-1 flex items-center">
                <h3 className="font-serif font-semibold text-lg sm:text-xl text-black tracking-tight leading-snug">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonial;