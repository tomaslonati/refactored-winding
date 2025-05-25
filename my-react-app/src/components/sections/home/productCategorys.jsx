import ProductCategoryCard from "../../ui/productCategoryCard";

const ProductCategory = () => {
    return (
        <section className="mt-10 lg:mt-20 flex flex-col items-center justify-center w-full bg-[#FDFEFF] gap-0 lg:gap-8 px-4 lg:px-0">
           <div className="gap-4  flex flex-col items-center justify-center text-center w-full max-w-[1240px] mx-auto lg-py-10 pt-10 pb-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A]">Nuestros productos</h1>
                <p className="text-base lg:text-lg font-light text-[#666666]">Soluciones de calidad para industria, hogares y comercios.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-[1240px] mx-auto lg:px-4">
                <ProductCategoryCard
                    name="Generadores Eólicos"
                    image="src\assets\home\cat-eolico.png"
                    link="/products/?category=generadores-eolicos"
                />
                <ProductCategoryCard
                    name="Energía sustentable movil"
                    image="src\assets\home\cat-esm.jpg"
                    link="/products/?category=energia-sustentable-movil"
                />
                <ProductCategoryCard
                    name="Kits para casas"
                    image="src\assets\home\cat-kit-casas.png"
                    link="/products/?category=kits-para-casas"
                />
                <ProductCategoryCard
                    name="Soportes para paneles solares"
                    image="src\assets\home\cat-soportes.png"
                    link="/products/?category=soportes-paneles-solares"
                />
           </div>
            <a
            className="text-[#FFF] w-full  text-center md:w-min md:text-nowrap font-bold text-sm md:text-base rounded-xl bg-[linear-gradient(90deg,_#0070C6_0%,_#1E88C9_100%)] hover:bg-[linear-gradient(70deg,_#0070C6_40%,_#1E88C9_80%)] py-3 px-6"            href="/products"
            >
            Ver todos los productos
            </a>


        </section>
    );
};

export default ProductCategory;
