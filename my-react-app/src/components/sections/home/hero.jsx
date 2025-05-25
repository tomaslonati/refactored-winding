import heroImg from '../../../assets/home/hero.png';

const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full h-[90vh] bg-[linear-gradient(108deg,_#FDFEFF_22.06%,_#E5F4FF_56.85%,_#EFFFF4_94.31%)]"
        >
            <div className="flex flex-col lg:flex-row items-center justify-start h-full max-w-[1240px] w-full gap-8 md:gap-10 mx-auto">
                <div className="flex flex-col px-4 h-full gap-6 w-full lg:w-1/2 items-start justify-center ">
                    <h1 className="text-[#1A1A1A] text-5xl lg:text-[62px] font-semibold pt-4 lg:pt-0">
                        Alquiler y venta de energía renovable
                    </h1>
                    <p className="text-[#666] text-base lg:text-lg font-normal">
                        En Grupo Winding fabricamos  productos de generación de energía renovable para hogares, comercios e industrias.
                    </p>
                    <a className="text-[#FFF] w-full  text-center md:w-min md:text-nowrap font-bold text-sm md:text-base rounded-xl bg-[linear-gradient(90deg,_#0070C6_0%,_#1E88C9_100%)] hover:bg-[linear-gradient(70deg,_#0070C6_40%,_#1E88C9_80%)] py-3 px-6" href="/products">
                        Ver productos
                    </a>
                </div>
                <div className="w-full lg:w-1/2 flex items-start justify-start">
                    <img className="w-full h-auto" src={heroImg} alt="Hero Image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
