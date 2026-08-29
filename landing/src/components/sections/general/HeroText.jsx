const HeroText = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-12 sm:px-6 lg:px-8 gap-4">
            <h1 className="font-serif font-bold text-white text-6xl sm:text-6xl md:text-8xl lg:text-8xl leading-14 sm:leading-14 lg:leading-20 md:leading-20 tracking-tight drop-shadow-md">
                {title}
            </h1>
            {description && (
                <p className="font-sans font-normal text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mt-3 sm:mt-4 leading-normal drop-shadow">
                    {description}
                </p>
            )}
        </div>
    );
};

export default HeroText;