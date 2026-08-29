const ButtonPrimary = ({ text, type = "button", href }) => {
    const baseStyles = "font-sans font-semibold text-sm sm:text-base text-white bg-blue hover:bg-navy px-8 py-4 sm:px-8 sm:py-4 border-2 border-blue rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-skyblue focus:ring-offset-2 cursor-pointer inline-flex items-center justify-center text-center";

    if (href) {
        return (
            <a href={href} className={baseStyles}>
                {text}
            </a>
        );
    }

    return (
        <button 
            type={type}
            className={baseStyles}
        >
            {text}
        </button>
    );
};

export default ButtonPrimary;