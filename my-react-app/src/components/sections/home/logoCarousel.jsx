import { SectionHeader } from "../../common";
import LogoCard from "../../ui/logoCard";
import { ASSETS } from "../../../utils/assets";

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
                                <LogoCard src={ASSETS.home.logos.estela} alt="Estela" />
                                <LogoCard src={ASSETS.home.logos.glaciarium} alt="Glaciarium" />
                                <LogoCard src={ASSETS.home.logos.hieloAv} alt="Hielo AV" />
                                <LogoCard src={ASSETS.home.logos.laLechuza} alt="La Lechuza" />
                                <LogoCard src={ASSETS.home.logos.muni} alt="Municipalidad" />
                                <LogoCard src={ASSETS.home.logos.nibepo} alt="Nibepo" />
                                <LogoCard src={ASSETS.home.logos.oca} alt="OCA" />
                                <LogoCard src={ASSETS.home.logos.south} alt="South" />
                                <LogoCard src={ASSETS.home.logos.tecnolab} alt="Tecnolab" />
                            </div>{/* Duplicate of the above for infinite effect */}                        <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                            {/* Logos duplicados para efecto infinito */}
                            <LogoCard src={ASSETS.home.logos.estela} alt="Estela" />
                            <LogoCard src={ASSETS.home.logos.glaciarium} alt="Glaciarium" />
                            <LogoCard src={ASSETS.home.logos.hieloAv} alt="Hielo AV" />
                            <LogoCard src={ASSETS.home.logos.laLechuza} alt="La Lechuza" />
                            <LogoCard src={ASSETS.home.logos.muni} alt="Municipalidad" />
                            <LogoCard src={ASSETS.home.logos.nibepo} alt="Nibepo" />
                            <LogoCard src={ASSETS.home.logos.oca} alt="OCA" />
                            <LogoCard src={ASSETS.home.logos.south} alt="South" />
                            <LogoCard src={ASSETS.home.logos.tecnolab} alt="Tecnolab" />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default LogoCarousel;
