import LocationCard from "../../ui/locationCard";
import { Button, SectionHeader } from "../../common";

const SomosWinding = () => {
    return (        
    <section className="mt-10 lg:mt-20 ">
        <SectionHeader 
            title="Somos Winding"
            description="Desarrollamos productos y servicios con energías limpias de industria nacional."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-[1240px] mx-auto lg:px-4">
            <div>
            </div>
            <div>
                <div className="flex flex-col gap-4">
                    <LocationCard
                        name="Cipoletti"
                        text="Barrio Casas de la Falda II, Casa 67, Cipolletti, Rio Negro"
                        link="https://www.google.com/maps/place/Barrio+Casas+de+La+Falda/@-38.939941,-67.953366,16z/data=!4m6!3m5!1s0x960a31001d9fbdd1:0x392974fbfcb22238!8m2!3d-38.9399411!4d-67.9533665!16s%2Fg%2F11w9q54ppd?hl=es&entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
                    />
                    <LocationCard
                        name="El Calafate"
                        text="Alfredo Bórquez 1856, Z9405 El Calafate, Santa Cruz"
                        image="https://www.google.com/maps/place/Grupo+Winding/@-50.354461,-72.276353,15z/data=!4m6!3m5!1s0xbdbb0d3e9756fe31:0xb97dd63ab964846a!8m2!3d-50.3544606!4d-72.2763535!16s%2Fg%2F11nsvlhs9h?hl=es&entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
                    />
                </div>
                <div>
                    <Button 
                        variant="primary"
                        to="/contacto"
                        className="mt-8 lg:mt-2"
                    >
                        Contactanos
                    </Button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default SomosWinding;
