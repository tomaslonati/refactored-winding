
const LocationCard = ({ name, text, link }) => {
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div 
            className="cursor-pointer rounded-xl flex flex-row p-3 lg:py-[36px] lg:px-[24px] bg-white shadow-[0px_2px_14px_rgba(2,110,192,0.10)] transition-all duration-300 ease-in-out hover:shadow-[0px_4px_20px_rgba(2,110,192,0.15)] hover:-translate-y-1"
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            <div className="flex flex-col">
                <h3 className="text-[#1A1A1A] w-0.7 py-7 text-xl lg:text-2xl font-semibold">{name}</h3>
                <div className="w-0.3">
                    <img 
                        src="src\assets\home\locationIcon.png" 
                        alt="location icon"
                        className="w-6 h-6 mb-2"
                    />
                </div>
            </div>
            <div>
                <p>{text}</p>
            </div>
        
        </div>

    )
}

export default LocationCard