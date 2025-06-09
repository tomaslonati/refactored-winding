const LogoCard = ({ src, alt, className = '' }) => {
    return (
        <div 
            className={`inline-flex items-center justify-center h-[80px] md:h-[120px] px-[12px] md:px-[20px] py-[8px] md:py-[10px] bg-white rounded-lg mx-2 md:mx-4 ${className} transition-all duration-300 ease-in-out hover:shadow-[0px_4px_20px_rgba(2,110,192,0.15)] hover:-translate-y-1`}
            style={{
                boxShadow: '0px 2px 14px 0px #026EC033'
            }}
        >
            <img 
                className="max-h-full max-w-full object-contain" 
                src={src} 
                alt={alt}
            />
        </div>
    );
};

export default LogoCard;
