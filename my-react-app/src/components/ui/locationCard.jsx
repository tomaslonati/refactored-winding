import { ASSETS } from "../../utils/assets";

const LocationCard = ({ name, text, link }) => {
    const handleClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (        <div 
            className="cursor-pointer justify-between rounded-xl flex flex-row p-3 py-6 lg:px-[24px]   bg-white shadow-[0px_4px_16px_rgba(2,110,192,0.18)] transition-all duration-300 ease-in-out hover:shadow-[0px_8px_24px_rgba(2,110,192,0.25)] hover:-translate-y-1 relative group "
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >            {/* Tooltip */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-700 pointer-events-none whitespace-nowrap z-10">
                Haz clic para ver en Google Maps
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
            </div>            {/* Contenedor del texto */}
            <div className="flex flex-col gap-2 w-3/4 lg:w-2/3 py-6">
                <h3 className="text-[#1A1A1A] text-xl lg:text-2xl font-semibold">
                    {name}
                </h3>
                <p className="text-[#666] font-manrope text-base font-normal leading-6 tracking-[0.5px]">
                    {text}
                </p>
            </div>

            {/* Contenedor de la imagen */}            <div className="flex justify-end mt-4">
                <img 
                    src={ASSETS.home.locationIcon}
                    alt="location icon"
                    className="w-10 h-10"
                />
            </div>
        </div>
    )
}

export default LocationCard