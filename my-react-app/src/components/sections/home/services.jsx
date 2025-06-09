import ServiceCard from "../../ui/serviceCard";
import { Button, SectionHeader } from "../../common";
import mantenimientoImg from "../../../assets/home/mantenimiento-card.png";
import monitoreoImg from "../../../assets/home/monitoreo-card.png";
import instalacionImg from "../../../assets/home/instalacion-card.png";

const Services = () => {
    return (        
    <section id="servicios" className="mt-10 lg:mt-20 flex flex-col items-center justify-center w-full bg-[#FDFEFF] gap-0 lg:gap-8 px-8 lg:px-0">
        <SectionHeader 
            title="Servicios"
            description="Acompañamiento personalizado"
        />        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-[1240px] mx-auto lg:px-4">
            <ServiceCard
                name="Mantenimiento"
                image={mantenimientoImg}
            />
            <ServiceCard
                name="Monitoreo"
                image={monitoreoImg}
            />
            <ServiceCard
                name="Instalación"
                image={instalacionImg}
            />
        </div>
        <Button 
            variant="primary"
            to="/contacto"
            className="mt-8 lg:mt-2"
        >
            Contactanos
        </Button>
    </section>
    );
};

export default Services;
