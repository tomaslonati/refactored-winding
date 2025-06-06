import { Button } from '../../common';

const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full h-[90vh] bg-[url('/hero.png')] mt-18 bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        >
            <div className="flex flex-col px-4 h-full gap-6 lg:gap-[32px] w-full lg:px-120 md:px-60 items-center justify-center text-center ">
                <h1 className="text-[#FFFFF]  text-5xl lg:text-[74px] font-semibold pt-4 lg:pt-0">
                    Soluciones con energía limpia
                </h1>
                <p className="text-[#FFFFF] text-base  lg:text-lg lg:px-20 font-normal">
                    Ofrecemos alquiler, venta y servicios para hogares, comercios e industrias.
                </p>                <div className="flex flex-row gap-4">
                    <Button 
                        variant="primary"
                        href="/productos"
                    >
                        Ver productos
                    </Button>
                    <Button 
                        variant="secondary"
                        href="/contacto"
                    >
                        Contactanos
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Hero;
