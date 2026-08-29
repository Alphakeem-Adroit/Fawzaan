
const SectionTextLeft = ({ title, description, className = "" }) => {
    return (
        <div className={`flex flex-col items-start text-left gap-6 w-full ${className}`}>
            <h2 className="font-serif text-3xl sm:text-3xl md:text-4xl font-semibold text-blue tracking-tight leading-tight">
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

export default SectionTextLeft;