import { Link } from 'react-router-dom';
import { ASSETS, getAssetUrl } from "../../utils/assets";
import { useState } from 'react';

const ProductCard = ({ name, imagenes = [], slug, desc }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    // Usar la primera imagen del array o una imagen por defecto
    const imageSrc = imagenes.length > 0 ? getAssetUrl(imagenes[0]) : ASSETS.home.electricidadIcon;

    return (
        <Link 
            to={`/productos/${slug}`}
            className="cursor-pointer rounded-xl flex flex-col justify-between mt-10 bg-white shadow-[0px_4px_16px_rgba(2,110,192,0.18)] transition-all duration-300 ease-in-out hover:shadow-[0px_8px_24px_rgba(2,110,192,0.25)] hover:-translate-y-1 group"
        >
            <div className="flex flex-col w-full h-full">                
                <div className="w-full h-[200px] mb-3 relative">
                    {!imgLoaded && (
                        <div className="absolute inset-0 w-full h-full bg-gray-200 rounded-t-xl animate-pulse z-0" />
                    )}
                    <img
                        className={`w-full h-full object-cover rounded-t-xl transition-opacity duration-300 z-10 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                        src={imageSrc}
                        alt={name}
                        onLoad={() => setImgLoaded(true)}
                    />
                </div>
                <div className='p-3 pb-8 lg:px-[24px] flex flex-col justify-between w-full h-full'>   
                    <div>
                        <h3 className="text-[#1A1A1A] text-[18px] font-semibold mb-3">{name}</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3 overflow-hidden"
                        style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}
                        >{desc}
                        </p>
                    </div>            
                    <div className="font-medium flex items-center gap-4 bg-gradient-to-r from-[#0070C6] to-[#1E88C9] bg-clip-text text-transparent transition-all duration-300">
                        Ver más
                        <img
                            className="h-[10px] transform transition-transform duration-300 flex items-center group-hover:translate-x-1"
                            src={ASSETS.common.rightArrow}
                            alt=""
                        />
                    </div>
                </div> 
            </div>
        </Link>
    )
}

export default ProductCard