
const ProductCategoryCard = ({ name, image, link }) => {
    return (
        <div className="cursor-pointer  rounded-xl flex flex-row justify-between p-3 lg:py-[36px] lg:px-[24px] bg-white shadow-[0px_2px_14px_rgba(2,110,192,0.10)] transition-all duration-300 ease-in-out hover:shadow-[0px_4px_20px_rgba(2,110,192,0.15)] hover:-translate-y-1">
            <div className="flex flex-col  w-0.70">
                <div className="flex items-center justify-start w-full h-[60px]">
                    <img
                        className="h-[70px] flex justify-items-start items-start object-contain"
                        src={image}
                        alt={name}
                    />
                </div>
                <h3 className="text-[#1A1A1A] py-7 text-xl lg:text-2xl font-semibold">{name}</h3>
                <a
                href={link}
                className="font-medium  flex items-center gap-4 bg-gradient-to-r from-[#0070C6] to-[#1E88C9] bg-clip-text text-transparent group transition-all duration-300"
                >
                Ver más
                <img
                    className="h-[10px] transform transition-transform duration-300 flex items-center group-hover:translate-x-1"
                    src="src/assets/common/right.svg"
                    alt=""
                />
                </a>
            </div>

        </div>

    )
}

export default ProductCategoryCard