import Navbar from '../components/sections/general/Navbar';
import BrokenPlane from '../assets/BrokenPlane.webp';
import ButtonPrimary from '../components/sections/general/ButtonPrimary';
import Footer from '../components/sections/home/Footer';

const Error = () => {
  return (
    <main className="bg-black min-h-screen flex flex-col justify-between overflow-hidden">
      <Navbar />
      
      <section className="relative pt-32 sm:pt-40 lg:pt-48 overflow-hidden flex-1 flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="flex flex-col items-start gap-6 max-w-2xl">
            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight">
                Oops...
              </h1>
              <p className="font-sans text-xl sm:text-2xl text-gray-400 font-medium">
                Page Not Found
              </p>
            </div>
            <div className="pt-2">
              <ButtonPrimary text="Go Back Home" href="/" />
            </div>
          </div>
        </div>

        {/* Full width image extending downward and slightly clipped by overflow-hidden */}
        <div className="w-full mt-12 -mb-16 sm:-mb-24 lg:-mb-32 pointer-events-none">
          <img 
            src={BrokenPlane} 
            alt="Broken plane" 
            className="w-full h-auto object-cover opacity-90" 
          />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Error;