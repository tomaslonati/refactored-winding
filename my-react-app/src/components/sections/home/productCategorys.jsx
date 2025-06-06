import ProductCategoryCard from "../../ui/productCategoryCard";
import { Button, SectionHeader } from "../../common";

const ProductCategory = () => {
    return (        
    <section className="mt-10 lg:mt-20 flex flex-col items-center justify-center w-full bg-[#FDFEFF] gap-0 lg:gap-8 px-4 lg:px-0">
           <SectionHeader 
                title="Nuestros productos"
                description="Soluciones de calidad para industria, hogares y comercios."
           />
           <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-w-[1240px] mx-auto lg:px-4">
                <ProductCategoryCard
                    name="Electricidad donde no llega la red"
                    image="src\assets\home\electricidad-icon.png"
                    link="/productos/?category=electricidad-donde-no-llega-la-red"
                />
                <ProductCategoryCard
                    name="Ahorro de combustibles fósiles"
                    image="src\assets\home\ahorro-icon.png"
                    link="/productos/?category=ahorro-combustibles-fosiles"
                />
                <ProductCategoryCard
                    name="Soluciones para cortes de luz"
                    image="src\assets\home\soluciones-icon.png"
                    link="/productos/?category=soluciones-cortes-de-luz"
                />
                <ProductCategoryCard
                    name="Ahorro en facturas de luz"
                    image="src\assets\home\ahorro-fac-icon.png"
                    link="/productos/?category=soportes-paneles-solares"
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
