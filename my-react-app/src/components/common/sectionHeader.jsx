const SectionHeader = ({ 
    title, 
    description, 
    titleSize = 'large',
    alignment = 'center',
    className = '',
    titleClassName = '',
    descriptionClassName = '',
    maxWidth = 'max-w-[1240px]'
}) => {
    // Tamaños de título
    const titleSizes = {
        small: 'text-2xl lg:text-3xl',
        medium: 'text-3xl lg:text-4xl',
        large: 'text-4xl lg:text-5xl',
        extraLarge: 'text-5xl lg:text-6xl'
    };

    // Alineaciones
    const alignments = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end'
    };

    return (
        <div className={`gap-4 flex flex-col justify-center w-full ${maxWidth} mx-auto lg:py-10 pt-10 pb-4 ${alignments[alignment]} ${className}`}>
            <h1 className={`${titleSizes[titleSize]} font-bold text-[#1A1A1A] ${titleClassName}`}>
                {title}
            </h1>
            {description && (
                <p className={`text-base lg:text-lg font-light text-[#666666] ${descriptionClassName}`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
