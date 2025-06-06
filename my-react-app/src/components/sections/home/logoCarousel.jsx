import { SectionHeader } from "../../common";
import LogoCard from "../../ui/logoCard";

const LogoCarousel = () => {
    return (
        <section className="lg:mt-36 mt-20 ">
            <SectionHeader 
                title="Confían en Grupo Winding"
                description="Cada vez son más las empresas comprometidas con la sustentabilidad."
            />
            <div>                
                <section className="">
                      <div className="logos group relative overflow-hidden whitespace-nowrap py-4 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">                        
                            <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                                {/* Logos de empresas que confían en nosotros */}
                                <LogoCard src="src/assets/home/04_estela.png" alt="Estela" />
                                <LogoCard src="src/assets/home/04_glaciarium.png" alt="Glaciarium" />
                                <LogoCard src="src/assets/home/04_hielo_av.png" alt="Hielo AV" />
                                <LogoCard src="src/assets/home/04_la_lechuza.png" alt="La Lechuza" />
                                <LogoCard src="src/assets/home/04_muni.png" alt="Municipalidad" />
                                <LogoCard src="src/assets/home/04_nibepo.png" alt="Nibepo" />
                                <LogoCard src="src/assets/home/04_oca.png" alt="OCA" />
                                <LogoCard src="src/assets/home/04_south.png" alt="South" />
                                <LogoCard src="src/assets/home/04_tecnolab.png" alt="Tecnolab" />
                            </div>                        {/* Duplicate of the above for infinite effect */}
                        <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                            {/* Logos duplicados para efecto infinito */}
                            <LogoCard src="src/assets/home/04_estela.png" alt="Estela" />
                            <LogoCard src="src/assets/home/04_glaciarium.png" alt="Glaciarium" />
                            <LogoCard src="src/assets/home/04_hielo_av.png" alt="Hielo AV" />
                            <LogoCard src="src/assets/home/04_la_lechuza.png" alt="La Lechuza" />
                            <LogoCard src="src/assets/home/04_muni.png" alt="Municipalidad" />
                            <LogoCard src="src/assets/home/04_nibepo.png" alt="Nibepo" />
                            <LogoCard src="src/assets/home/04_oca.png" alt="OCA" />
                            <LogoCard src="src/assets/home/04_south.png" alt="South" />
                            <LogoCard src="src/assets/home/04_tecnolab.png" alt="Tecnolab" />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default LogoCarousel;
