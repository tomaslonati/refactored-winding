import { Button } from '../../common';

const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full h-[90vh] lg:bg-[url('/hero.png')] bg-[url('/hero-mobile.png')] mt-18 bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        >
            <div className="flex flex-col px-8 h-full gap-6 lg:gap-[32px] w-full lg:max-w-2xl items-center justify-center text-center ">
                <h1 className="text-[#FFFFF]  text-5xl lg:text-[74px] font-semibold pt-4 lg:pt-0">
                    Soluciones con energía limpia
                </h1>
                <p className="text-[#FFFFF] text-[22px]  lg:text-lg lg:px-20 font-normal">
                    Alquiler, venta y servicios para hogares, comercios e industrias.
                </p>                
                <div className="flex md:flex-row flex-col gap-4 w-full max-w-md mx-auto md:max-w-none md:w-auto md:justify-center">
                    <Button 
                        variant="primary"
                        size="medium"
                        to="/productos"
                    >
                        Ver productos
                    </Button>
                    <Button 
                        variant="secondary"
                        size="medium"
                        to="/contacto"
                    >
                        Contactanos
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Hero;