import ButtonPrimary from '../general/ButtonPrimary';

const CTA = () => {
  return (
    <section id="journey" className="bg-offwhite py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <p className="text-black/75 font-sans text-sm sm:text-base uppercase tracking-widest mb-4">
                    We're Ready When You Are
                </p>
                <div className="font-serif font-semibold text-blue text-6xl sm:text-8xl lg:text-9xl tracking-tight mb-6">
                    <p>Ready to begin your journey?</p>
                </div>
                <p className="text-black/75 font-sans max-w-2xl text-base sm:text-lg leading-relaxed mt-4">
                    Choose the service you need and speak directly with our team — we're reachable 24 hours a day.
                </p>

                <div className="mt-16">
                    <ButtonPrimary text="Start Your Journey Regitration" href="/contact" />
                </div>
            </div>
        </section>
  )
}

export default CTA