import { Link } from 'react-router-dom';
import { ASSETS, getAssetUrl } from "../../utils/assets";

const ProductCard = ({ name, image, slug, desc }) => {
    // Usar getAssetUrl para manejar la imagen correctamente
    const imageSrc = image ? getAssetUrl(image) : ASSETS.home.electricidadIcon; // Imagen por defecto

    return (
        <Link 
            to={`/productos/${slug}`}
            className="cursor-pointer rounded-xl flex flex-col justify-between p-3 lg:py-[36px] lg:px-[24px] bg-white shadow-[0px_4px_16px_rgba(2,110,192,0.18)] transition-all duration-300 ease-in-out hover:shadow-[0px_8px_24px_rgba(2,110,192,0.25)] hover:-translate-y-1 group"
        >
            <div className="flex flex-col w-full">                
                <div className="flex items-center justify-center w-full h-[100px] mb-4">
                    <img
                        className="h-[70px] w-full object-contain"
                        src={imageSrc}
                        alt={name}
                    />
                </div>                <h3 className="text-[#1A1A1A] text-[18px] font-semibold mb-3">{name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3 overflow-hidden"
                   style={{
                     display: '-webkit-box',
                     WebkitLineClamp: 3,
                     WebkitBoxOrient: 'vertical',
                     overflow: 'hidden'
                   }}
                >{desc}</p>
                <div className="font-medium flex items-center gap-4 bg-gradient-to-r from-[#0070C6] to-[#1E88C9] bg-clip-text text-transparent transition-all duration-300">
                    Ver más
                    <img
                        className="h-[10px] transform transition-transform duration-300 flex items-center group-hover:translate-x-1"
                        src={ASSETS.common.rightArrow}
                        alt=""
                    />
                </div>
            </div>
        </Link>
    )
}

export default ProductCard