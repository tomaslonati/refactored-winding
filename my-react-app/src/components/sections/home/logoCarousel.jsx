import { SectionHeader } from "../../common";
import LogoCard from "../../ui/logoCard";
import estelaImg from "../../../assets/home/04_estela.png";
import glaciariumImg from "../../../assets/home/04_glaciarium.png";
import hieloAvImg from "../../../assets/home/04_hielo_av.png";
import laLechuzaImg from "../../../assets/home/04_la_lechuza.png";
import muniImg from "../../../assets/home/04_muni.png";
import nibepoImg from "../../../assets/home/04_nibepo.png";
import ocaImg from "../../../assets/home/04_oca.png";
import southImg from "../../../assets/home/04_south.png";
import tecnolabImg from "../../../assets/home/04_tecnolab.png";

const LogoCarousel = () => {
    return (
        <section className="lg:mt-36 mt-20">
            <SectionHeader 
                title="Confían en Grupo Winding"
                description="Cada vez son más las empresas comprometidas con la sustentabilidad."
                className="px-8"
            />
            <div>                  <section className="">
                      <div className="logos group relative overflow-hidden whitespace-nowrap py-4 [mask-image:_linear-gradient(to_right,_transparent_0,_white_64px,white_calc(100%-64px),_transparent_100%)] md:[mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">                            <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                                {/* Logos de empresas que confían en nosotros */}
                                <LogoCard src={estelaImg} alt="Estela" />
                                <LogoCard src={glaciariumImg} alt="Glaciarium" />
                                <LogoCard src={hieloAvImg} alt="Hielo AV" />
                                <LogoCard src={laLechuzaImg} alt="La Lechuza" />
                                <LogoCard src={muniImg} alt="Municipalidad" />
                                <LogoCard src={nibepoImg} alt="Nibepo" />
                                <LogoCard src={ocaImg} alt="OCA" />
                                <LogoCard src={southImg} alt="South" />
                                <LogoCard src={tecnolabImg} alt="Tecnolab" />
                            </div>{/* Duplicate of the above for infinite effect */}                        <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                            {/* Logos duplicados para efecto infinito */}
                            <LogoCard src={estelaImg} alt="Estela" />
                            <LogoCard src={glaciariumImg} alt="Glaciarium" />
                            <LogoCard src={hieloAvImg} alt="Hielo AV" />
                            <LogoCard src={laLechuzaImg} alt="La Lechuza" />
                            <LogoCard src={muniImg} alt="Municipalidad" />
                            <LogoCard src={nibepoImg} alt="Nibepo" />
                            <LogoCard src={ocaImg} alt="OCA" />
                            <LogoCard src={southImg} alt="South" />
                            <LogoCard src={tecnolabImg} alt="Tecnolab" />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default LogoCarousel;
