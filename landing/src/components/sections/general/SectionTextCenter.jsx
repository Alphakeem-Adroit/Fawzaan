const SectionTextCenter = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center text-center gap-6 w-full">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-blue tracking-tight leading-tight">
                {title}
            </h2>
            {description && (
                <p className="font-sans text-base sm:text-lg text-black leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTextCenter;