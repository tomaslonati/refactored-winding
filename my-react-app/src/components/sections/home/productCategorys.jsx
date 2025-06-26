import ProductCategoryCard from "../../ui/productCategoryCard";
import { Button, SectionHeader } from "../../common";
import categories from "../../../data/category.json";

// Función para convertir nombre de categoría a slug para URL
function categoryToSlug(categoryName) {
    return categoryName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
}

const ProductCategory = () => {
    // Filtrar solo las categorías activas y que no sean "Todos"
    const activeCategories = categories.filter(cat => cat.active === "true" && cat.id !== 0);

    return (        
    <section className="mt-10 lg:mt-20 flex flex-col items-center justify-center w-full bg-[#E6F4F8] gap-0 lg:gap-8 px-8 lg:px-0">
           <SectionHeader 
                title="Nuestros productos"
                description="Soluciones de calidad para industria, hogares y comercios."
           />           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1240px] mx-auto lg:px-4 items-stretch">
                {activeCategories.map(cat => (
                    <ProductCategoryCard
                        key={cat.id}
                        name={cat.nombre}
                        image={cat.icon}
                        link={`/productos?cat=${categoryToSlug(cat.nombre)}`}
                    />
                ))}
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
