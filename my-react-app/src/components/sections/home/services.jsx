import ServiceCard from "../../ui/serviceCard";
import { Button, SectionHeader } from "../../common";
import { ASSETS } from "../../../utils/assets";

const Services = () => {
    return (        
    <section id="servicios" className="mt-10 lg:mt-20 flex flex-col items-center justify-center w-full  gap-0 lg:gap-8 px-8 lg:px-0">
        <SectionHeader 
            title="Servicios"
            description="Acompañamiento personalizado"
        />        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-[1240px] mx-auto lg:px-4">
            <ServiceCard
                name="Mantenimiento"
                image={ASSETS.home.mantenimientoCard}
            />
            <ServiceCard
                name="Monitoreo"
                image={ASSETS.home.monitoreoCard}
            />
            <ServiceCard
                name="Instalación"
                image={ASSETS.home.instalacionCard}
            />
        </div>
        <Button 
            variant="primary"
            href="https://wa.me/5492993277282?text=Hola!%20Quiero%20más%20información%20sobre%20sus%20servicios"
            external={true}
            className="mt-8 lg:mt-2"
        >
            Contactanos
        </Button>
    </section>
    );
};

export default Services;
