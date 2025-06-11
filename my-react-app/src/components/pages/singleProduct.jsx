import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ASSETS, getAssetUrl } from '../../utils/assets';
import productosData from '../../data/productos.json';
import categoriesData from '../../data/category.json';

const SingleProduct = () => {
    const { productId } = useParams();
    
    // Encontrar el producto por slug
    const product = productosData.Productos.find(p => p.slug === productId);
    
    // Si no se encuentra el producto, mostrar mensaje de error
    if (!product) {
        return (
            <div className="w-full pt-[100px] min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h1>
                    <p className="text-gray-600 mb-6">El producto que buscas no existe o ha sido eliminado.</p>
                    <Link 
                        to="/productos" 
                        className="bg-gradient-to-r from-[#0070C6] to-[#1E88C9] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                        Volver a productos
                    </Link>
                </div>
            </div>
        );
    }

    // Obtener nombres de categorías
    const categoryNames = product.id_categoria.map(catId => {
        const category = categoriesData.find(cat => cat.id.toString() === catId);
        return category ? category.nombre : '';
    }).filter(name => name);

    // Manejar la imagen del producto
    const imageSrc = product.imagen ? getAssetUrl(product.imagen) : ASSETS.home.electricidadIcon;

    return (
        <div className="w-full pt-[100px] min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="max-w-[1240px] mx-auto px-4 py-4">
                <nav className="flex items-center text-sm text-gray-600">
                    <Link to="/" className="hover:text-[#0070C6]">Inicio</Link>
                    <span className="mx-2">/</span>
                    <Link to="/productos" className="hover:text-[#0070C6]">Productos</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800">{product.nombre}</span>
                </nav>
            </div>

            {/* Contenido principal */}
            <div className="max-w-[1240px] mx-auto px-4 pb-20">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Header del producto */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-12">
                        {/* Imagen del producto */}
                        <div className="flex items-center justify-center bg-gray-100 rounded-xl p-8">
                            <img
                                src={imageSrc}
                                alt={product.nombre}
                                className="max-w-full max-h-[400px] object-contain"
                            />
                        </div>

                        {/* Información básica */}
                        <div className="flex flex-col justify-center">
                            {/* Categorías */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {categoryNames.map((categoryName, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                    >
                                        {categoryName}
                                    </span>
                                ))}
                            </div>

                            {/* Título */}
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                                {product.nombre}
                            </h1>

                            {/* Descripción corta */}
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {product.descripcion_corta}
                            </p>

                            {/* Botón de contacto */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contacto"
                                    className="bg-gradient-to-r from-[#0070C6] to-[#1E88C9] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center"
                                >
                                    Solicitar información
                                </Link>
                                <Link
                                    to="/productos"
                                    className="border-2 border-[#0070C6] text-[#0070C6] px-8 py-4 rounded-xl font-semibold hover:bg-[#0070C6] hover:text-white transition-all duration-300 text-center"
                                >
                                    Ver más productos
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Información detallada */}
                    {product.informacion && product.informacion.length > 0 && (
                        <div className="border-t border-gray-200 p-6 lg:p-12">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
                                Información detallada
                            </h2>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {product.informacion.map((infoSection, sectionIndex) => (
                                    Object.entries(infoSection).map(([sectionTitle, items], index) => (
                                        <div key={`${sectionIndex}-${index}`} className="bg-gray-50 rounded-xl p-6">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                                {sectionTitle}
                                            </h3>
                                            <ul className="space-y-3">
                                                {items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-[#0070C6] rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-700 leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
