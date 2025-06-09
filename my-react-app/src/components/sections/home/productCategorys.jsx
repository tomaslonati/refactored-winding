import ProductCategoryCard from "../../ui/productCategoryCard";
import { Button, SectionHeader } from "../../common";
import electricidadIcon from "../../../assets/home/electricidad-icon.png";
import ahorroIcon from "../../../assets/home/ahorro-icon.png";
import solucionesIcon from "../../../assets/home/soluciones-icon.png";
import ahorroFacIcon from "../../../assets/home/ahorro-fac-icon.png";

const ProductCategory = () => {
    return (        
    <section className="mt-10 lg:mt-20 flex flex-col items-center justify-center w-full bg-[#FDFEFF] gap-0 lg:gap-8 px-8 lg:px-0">
           <SectionHeader 
                title="Nuestros productos"
                description="Soluciones de calidad para industria, hogares y comercios."
           />           <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-w-[1240px] mx-auto lg:px-4">
                <ProductCategoryCard
                    name="Electricidad donde no llega la red"
                    image={electricidadIcon}
                    link="/productos?categoria=electricidad-sin-red"
                />
                <ProductCategoryCard
                    name="Ahorro de combustibles fósiles"
                    image={ahorroIcon}
                    link="/productos?categoria=ahorro-combustibles"
                />
                <ProductCategoryCard
                    name="Soluciones para cortes de luz"
                    image={solucionesIcon}
                    link="/productos?categoria=soluciones-cortes"
                />
                <ProductCategoryCard
                    name="Ahorro en facturas de luz"
                    image={ahorroFacIcon}
                    link="/productos?categoria=ahorro-facturas"
                />
           </div>
                <Button 
                    variant="primary"
                    href="/productos"
                    className="mt-8 lg:mt-2"
                >
                    Ver todos los productos
                </Button>


        </section>
    );
};

export default ProductCategory;
