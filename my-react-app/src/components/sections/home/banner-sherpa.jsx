import Button from "../../common/button";

const BannerSherpa = () => {
    return (
        <section className="mt-20 lg:mt-36 flex flex-col relative w-full max-w-7xl mx-auto px-4 lg:px-4">
            <div className="bg-gradient-to-r from-[#1C88BC] to-[#65BB91] rounded-xl flex flex-col lg:flex-row relative overflow-hidden">
                <div className="lg:w-2/5 w-full flex">
                    <img 
                        src="src/assets/home/sherpa.png" 
                        alt="Producto SHERPA - Generador eléctrico en alquiler para industrias" 
                        className="w-full h-[300px] lg:h-auto lg:min-h-full object-cover lg:rounded-l-xl"
                    />
                </div>
                <div className="flex flex-col text-left items-start justify-center w-full lg:w-3/5 gap-7 lg:gap-9 px-6 lg:px-12 py-12 lg:py-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white text-left">Sistema SHERPA</h1>
                    <p className="text-base lg:text-lg font-light text-white">
                        Disponible bajo modalidad de alquiler, el sistema está pensado para brindar una solución flexible, económica y sustentable en proyectos temporales o de difícil acceso                
                    </p>
                    <div className="flex flex-row justify-center items-center gap-3">
                        <img 
                            className="w-[50px]" 
                            src="src/assets/home/arg_flag.png" 
                            alt="bandera argentina icono" 
                        />
                        <p>100% desarrollo e industria nacional Argentina</p>
                    </div>
                    <div className="flex items-end justify-end w-full">
                        <Button 
                            variant="primary"
                            href="/productos/sherpa"
                        >
                            Ver producto
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSherpa;
