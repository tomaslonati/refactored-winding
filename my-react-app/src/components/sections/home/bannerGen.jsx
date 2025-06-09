
import reconocimientoIcon from "../../../assets/home/reconocimiento-icon.png";
import genImg from "../../../assets/home/gen.png";

const BannerGen = () => {
    return (
        <section className="mt-20 lg:mt-36 flex flex-col relative w-full max-w-7xl mx-auto lg:pt-4 ">
            <div className="bg-gradient-to-r from-[#1C88BC] to-[#65BB91]  lg:rounded-xl relative overflow-hidden">
                {/* Ícono de reconocimiento */}                <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-10">
                    <img 
                        src={reconocimientoIcon} 
                        alt="ícono de reconocimiento" 
                        className="w-16 lg:w-20"
                    />
                </div>
                  {/* Contenido principal */}
                <div className="flex lg:flex-row flex-col items-center justify-between w-full gap-6 lg:gap-8 px-6 lg:px-12 py-16  pt-20 lg:py-18">
                    <div className="flex flex-col gap-4 text-white w-full lg:w-1/2 text-center py-6 lg:py-0 lg:text-left justify-center lg:px-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white text-center lg:text-left">
                            Reconocimiento internacional
                        </h2>
                        <p className="text-base lg:text-lg font-light opacity-95">
                            Seleccionados entre los 10 mejores emprendedores de Argentina del 2021
                        </p>
                    </div>
                      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img 
                            src={genImg}
                            alt="GEN logo"
                            className="lg:p-20 px-14 w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerGen;
