import LocationCard from "../../ui/locationCard";
import Gallery from "../../ui/gallery";
import { Button, SectionHeader } from "../../common";
import img1 from "../../../assets/home/gallery/1.png";
import img2 from "../../../assets/home/gallery/2.png";
import img3 from "../../../assets/home/gallery/3.png";
import img4 from "../../../assets/home/gallery/4.png";
import img5 from "../../../assets/home/gallery/5.png";
import img6 from "../../../assets/home/gallery/6.png";
import img7 from "../../../assets/home/gallery/7.png";
import img8 from "../../../assets/home/gallery/8.png";
import img10 from "../../../assets/home/gallery/10.png";
import img11 from "../../../assets/home/gallery/11.png";
import img12 from "../../../assets/home/gallery/12.png";
import img13 from "../../../assets/home/gallery/13.png";
import img14 from "../../../assets/home/gallery/14.png";
import img15 from "../../../assets/home/gallery/15.png";
import img17 from "../../../assets/home/gallery/17.png";
import img19 from "../../../assets/home/gallery/19.png";
import img20 from "../../../assets/home/gallery/20.png";
import img21 from "../../../assets/home/gallery/21.png";
import img22 from "../../../assets/home/gallery/22.png";
import { useState } from "react";

const SomosWinding = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img10, img11, img12, img13, img14, img15, img17, img19, img20, img21, img22];
    const [open, setOpen] = useState(false);
    const [initialIndex, setInitialIndex] = useState(0);

    const openGallery = (idx) => {
        setInitialIndex(idx);
        setOpen(true);
    };

    const closeGallery = () => setOpen(false);

    // Mostrar solo las primeras 5 imágenes en la galería principal
    const visibleImages = images.slice(0, 6);

    return (        
    <section id="somosWinding" className="px-8 mt-20 lg:mt-36 lg:pb-20 pb-40">
        <SectionHeader 
            title="Somos Winding"
            description="Desarrollamos productos y servicios con energías limpias de industria nacional."
        />        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-[1240px] mx-auto lg:px-4 items-start">            <div className="h-full">
                <div className="flex flex-col gap-2 h-[280px] md:h-[400px]">
                    <div className="w-full h-[230px] md:h-[320px] lg:h-[390px]">
                        <img
                            src={visibleImages[0]}
                            alt="gallery-1"
                            className="w-full h-full object-cover rounded-lg cursor-pointer"
                            onClick={() => openGallery(0)}
                        />
                    </div>
                    <div className="grid grid-cols-5 gap-2 h-[40px] lg:h-[72px]">
                        {visibleImages.slice(1).map((img, idx) => (
                            <img
                                key={idx + 1}
                                src={img}
                                alt={`gallery-${idx + 2}`}
                                className="w-full h-[40px] lg:h-[72px] object-cover rounded-lg cursor-pointer"
                                onClick={() => openGallery(idx + 1)}
                            />
                        ))}
                    </div></div>
                
                <Gallery 
                    images={images}
                    isOpen={open}
                    onClose={closeGallery}
                    initialIndex={initialIndex}
                />
            </div>            <div className="h-full">
                <div className="flex flex-col h-[280px] md:h-[400px] justify-between">
                    <div className="flex flex-col gap-4">
                        <LocationCard
                            name="Cipoletti"
                            text="Barrio Casas de la Falda II, Casa 67, Cipolletti, Rio Negro"
                            link="https://www.google.com/maps/place/Barrio+Casas+de+La+Falda/@-38.939941,-67.953366,16z/data=!4m6!3m5!1s0x960a31001d9fbdd1:0x392974fbfcb22238!8m2!3d-38.9399411!4d-67.9533665!16s%2Fg%2F11w9q54ppd?hl=es&entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
                        />                    
                        <LocationCard
                            name="El Calafate"
                            text="Alfredo Bórquez 1856, Z9405 El Calafate, Santa Cruz"
                            link="https://www.google.com/maps/place/Grupo+Winding/@-50.354461,-72.276353,15z/data=!4m6!3m5!1s0xbdbb0d3e9756fe31:0xb97dd63ab964846a!8m2!3d-50.3544606!4d-72.2763535!16s%2Fg%2F11nsvlhs9h?hl=es&entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D"
                        />
                    </div>
                    
                    <div className="flex justify-end">
                        <Button 
                            variant="primary"
                            to="/contacto"
                            className="mt-8"
                        >
                            Contactanos
                        </Button>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    );
};

export default SomosWinding;
