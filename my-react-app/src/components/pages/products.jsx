import { useState, useEffect } from "react";
import CategoryNavBar from "../sections/products/categoryNavBar";
import MenuList from "../sections/products/allProducts";
import productosData from "../../data/productos.json";

function Products() {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Función para filtrar productos por categoría
    const filterProducts = (categoryId) => {
        const products = productosData.Productos;
        
        if (categoryId === 0) {
            // Si es "Todos", mostrar todos los productos
            setFilteredProducts(products);
        } else {
            // Filtrar productos que pertenezcan a la categoría seleccionada
            const filtered = products.filter(product => 
                product.id_categoria.includes(categoryId.toString())
            );
            setFilteredProducts(filtered);
        }
    };

    // Efecto para filtrar productos y hacer scroll al top cuando cambia la categoría
    useEffect(() => {
        filterProducts(selectedCategory);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [selectedCategory]);

    // Función para manejar cambio de categoría desde CategoryNavBar
    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <div className="w-full pt-[100px]">
            <CategoryNavBar onCategoryChange={handleCategoryChange} />
            <MenuList products={filteredProducts} />
        </div>
    );
}

export default Products;