
const ServiceCard = ({ name, image }) => {
    return (
        <div className="cursor-pointer w-full rounded-xl flex flex-row justify-between lg:pb-[28px] bg-white shadow-[0px_2px_14px_rgba(2,110,192,0.10)] transition-all duration-300 ease-in-out hover:shadow-[0px_4px_20px_rgba(2,110,192,0.15)] hover:-translate-y-1">
            <div className="flex flex-col  w-full">                
                <div className="flex items-center justify-start w-full h-60 md:h-auto overflow-hidden">
                    <img
                        className="w-full h-full object-cover md:object-contain rounded-xl"
                        src={image}
                        alt={name}
                    />
                </div>
                <h3 className="text-[#1A1A1A] px-3 lg:px-[24px] py-7 text-xl lg:text-2xl font-semibold">{name}</h3>
            </div>
        </div>
        

    )
}

export default ServiceCard