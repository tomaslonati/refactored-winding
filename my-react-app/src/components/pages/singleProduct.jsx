import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ASSETS, getAssetUrl } from '../../utils/assets';
import { Button } from '../common';
import InfoSection from '../ui/infoSection';
import productosData from '../../data/productos.json';
import categoriesData from '../../data/category.json';

const SingleProduct = () => {
    const { productId } = useParams();
    
    // Encontrar el producto por slug
    const product = productosData.Productos.find(p => p.slug === productId);
    
    // Si no se encuentra el producto, mostrar mensaje de error
    if (!product) {
        return (
            <div className="w-full pt-[100px] min-h-screen flex items-center justify-center">                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h1>
                    <p className="text-gray-600 mb-6">El producto que buscas no existe o ha sido eliminado.</p>
                    <Button
                        variant="primary"
                        to="/productos"
                    >
                        Volver a productos
                    </Button>
                </div>
            </div>
        );
    }

    // Obtener nombres de categorías
    const categoryNames = product.id_categoria.map(catId => {
        const category = categoriesData.find(cat => cat.id.toString() === catId);
        return category ? category.nombre : '';
    }).filter(name => name);

    // Manejar las imágenes del producto
    const imagenes = product.imagenes || [];
    const [currentImg, setCurrentImg] = useState(0);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    // Función para manejar el swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > 40) { // Umbral para swipe
                if (diff > 0) {
                    // Swipe izquierda (siguiente)
                    setCurrentImg((prev) => prev === imagenes.length - 1 ? 0 : prev + 1);
                } else {
                    // Swipe derecha (anterior)
                    setCurrentImg((prev) => prev === 0 ? imagenes.length - 1 : prev - 1);
                }
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className="w-full pt-[100px] min-h-screen lg:pt-[120px]">
            {/* Breadcrumb */}
            <div className="max-w-[1240px] mx-auto px-8 lg:px-4 py-4 ">
                <nav className="flex items-start text-sm text-gray-600">
                    <Link to="/" className="hover:text-[#0070C6]">Inicio</Link>
                    <span className="mx-2">/</span>
                    <Link to="/productos" className="hover:text-[#0070C6]">Productos</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800">{product.nombre}</span>
                </nav>
            </div>
            {/* Contenido principal */}
            <div className="max-w-[1240px] mx-auto px-8 lg:px-0 pb-20">
                <div className="bg-white rounded-xl overflow-hidden">                    {/* Header del producto */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 gap-10 py-6 px-0 lg:min-h-[420px] lg:p-4">
                        {/* Imagen o carrusel de imágenes con soporte touch */}
                        <div
                            className="lg:col-span-3 flex items-center justify-center  rounded-xl  min-h-[320px] relative select-none w-full h-[320px] lg:h-[400px]"
                            onTouchStart={imagenes.length > 1 ? handleTouchStart : undefined}
                            onTouchMove={imagenes.length > 1 ? handleTouchMove : undefined}
                            onTouchEnd={imagenes.length > 1 ? handleTouchEnd : undefined}
                        >
                            {imagenes.length > 1 ? (
                                <>
                                    <img
                                        src={getAssetUrl(imagenes[currentImg])}
                                        alt={product.nombre}
                                        className="w-full h-full object-cover mx-auto rounded-xl"
                                        draggable={false}
                                    />
                                    {/* Flechas de navegación */}
                                    <button
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10 cursor-pointer"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setCurrentImg((prev) => prev === 0 ? imagenes.length - 1 : prev - 1);
                                        }}
                                        aria-label="Anterior"
                                    >
                                        <svg width="24" height="24" fill="none" stroke="#0070C6" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                                    </button>
                                    <button
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10 cursor-pointer"
                                        onClick={e => {
                                            e.stopPropagation();
                                            setCurrentImg((prev) => prev === imagenes.length - 1 ? 0 : prev + 1);
                                        }}
                                        aria-label="Siguiente"
                                    >
                                        <svg width="24" height="24" fill="none" stroke="#0070C6" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                                    </button>
                                    {/* Indicadores */}
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                                        {imagenes.map((img, idx) => (
                                            <button
                                                key={img}
                                                className={`w-2 h-2 rounded-full ${idx === currentImg ? 'bg-[#0070C6]' : 'bg-gray-300'} transition-all cursor-pointer`}
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    setCurrentImg(idx);
                                                }}
                                                aria-label={`Imagen ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <img
                                    src={imagenes[0] ? getAssetUrl(imagenes[0]) : ASSETS.home.electricidadIcon}
                                    alt={product.nombre}
                                    className="w-full h-full object-cover mx-auto rounded-xl"
                                    draggable={false}
                                />
                            )}                        </div>
                        {/* Información básica */}
                        <div className="lg:col-span-2 flex flex-col justify-center">
                            {/* Categorías */}
                            <div className="flex flex-wrap gap-2 mb-8 lg:mb-4">
                                {categoryNames.map((categoryName, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 bg-white text-[#4D4D4D] border border-[#B3B3B3] text-sm rounded-full"
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
                            </p>                            {/* Botones de acción */}
                            <div className="flex flex-col sm:flex-row gap-4 md:flex-wrap">                                <Button
                                    variant="primary"
                                    to="/contacto"
                                    size="medium"
                                >
                                    Solicitar información
                                </Button>
                                
                                {/* Botones dinámicos de documentos */}
                                {product.documentos && product.documentos.length > 0 && 
                                    product.documentos
                                        .filter(doc => doc && Object.keys(doc).length > 0) // Filtrar documentos no vacíos
                                        .map((documento, index) => 
                                            Object.entries(documento).map(([titulo, enlace], entryIndex) => (
                                                <Button
                                                    key={`${index}-${entryIndex}`}
                                                    variant="outline"
                                                    href={enlace}
                                                    external={true}
                                                    size="medium"
                                                >
                                                    {titulo}
                                                </Button>
                                            ))
                                        )
                                        .flat()
                                }
                            </div>
                        </div>
                    </div>                    {/* Información detallada */}
                    {product.informacion && product.informacion.length > 0 && (
                        <div className="lg:pb-12 lg:pt-20">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {product.informacion.map((infoSection, sectionIndex) => (
                                    Object.entries(infoSection).map(([sectionTitle, items], index) => (
                                        <InfoSection
                                            key={`${sectionIndex}-${index}`}
                                            title={sectionTitle}
                                            items={items}
                                        />
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
