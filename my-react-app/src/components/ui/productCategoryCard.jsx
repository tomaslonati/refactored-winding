
import { Link } from 'react-router-dom';
import { ASSETS } from "../../utils/assets";

const ProductCategoryCard = ({ name, image, link }) => {
    return (
        <Link 
            to={link}
            className="cursor-pointer rounded-xl flex flex-col h-full p-4 pb-8 lg:py-[36px] lg:px-[24px] bg-white shadow-[0px_4px_16px_rgba(2,110,192,0.18)] transition-all duration-300 ease-in-out hover:shadow-[0px_8px_24px_rgba(2,110,192,0.25)] hover:-translate-y-1 group"
        >
            <div className="flex items-center justify-start w-full h-[80px] lg:h-[60px] lg:mb-4">
                <img
                    className="lg:h-[70px] h-[80px] flex justify-items-start items-start object-contain"
                    src={image}
                    alt={name}
                />
            </div>
            <h3 className="text-[#1A1A1A] text-3xl lg:text-2xl font-semibold flex-grow py-2 lg:py-0 pl-4 lg:pl-0">{name}</h3>
            <div className="font-medium lg:text-[16px] text-xl pl-4 lg:pl-0 flex items-center gap-4 bg-gradient-to-r from-[#0070C6] to-[#1E88C9] bg-clip-text text-transparent transition-all duration-300 mt-6">
                Ver más                
                <img
                    className="h-[10px] transform transition-transform duration-300 flex items-center group-hover:translate-x-1"
                    src={ASSETS.common.rightArrow}
                    alt=""
                />
            </div>
        </Link>

    )
}

export default ProductCategoryCard