import { useState, useRef, useEffect } from "react";

const Gallery = ({ images, isOpen, onClose, initialIndex = 0 }) => {
    const [current, setCurrent] = useState(initialIndex);
    const thumbnailsRef = useRef(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Actualizar el índice actual cuando cambie el índice inicial
    useEffect(() => {
        setCurrent(initialIndex);
    }, [initialIndex]);

    // Desactivar scroll del body cuando la galería está abierta
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup al desmontar el componente
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Scroll automático a la miniatura activa
    useEffect(() => {
        if (thumbnailsRef.current && isOpen) {
            const container = thumbnailsRef.current;
            const thumbnailWidth = 80; // 64px + 8px gap
            const containerWidth = container.clientWidth;
            const scrollPosition = (current * thumbnailWidth) - (containerWidth / 2) + (thumbnailWidth / 2);
            
            container.scrollTo({
                left: Math.max(0, scrollPosition),
                behavior: 'smooth'
            });
        }
    }, [current, isOpen]);

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Funciones para manejo de gestos táctiles
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }
        if (isRightSwipe) {
            setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-[#000000f9] bg-opacity-50 flex items-center justify-center z-50 px-4 py-14"
            onClick={onClose}
        >
            <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
                <button
                    className="fixed top-4 right-4 md:absolute md:top-2 md:right-2 text-white text-3xl font-bold hover:bg-[#ffffff2f] cursor-pointer rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-10"
                    onClick={onClose}
                    aria-label="Cerrar galería"
                >
                    &times;
                </button>
                
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-2 hover:bg-[#ffffff2f] cursor-pointer rounded-full transition-all duration-200"
                    onClick={prevImage}
                    aria-label="Anterior"
                >
                    &#8592;
                </button>
                
                <img
                    src={images[current]}
                    alt={`gallery-large-${current + 1}`}
                    className="max-h-[70vh] rounded-lg shadow-lg"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    style={{ touchAction: 'pan-y' }}
                />
                
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl px-3 py-2 hover:bg-[#ffffff2f] cursor-pointer rounded-full transition-all duration-200"
                    onClick={nextImage}
                    aria-label="Siguiente"
                >
                    &#8594;
                </button>
                
                {/* Barra de miniaturas fija en la parte inferior */}
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
                    <div 
                        ref={thumbnailsRef}
                        className="flex gap-2 overflow-x-auto  rounded-lg p-3 scrollbar-hide "
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                    >
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`thumbnail-${idx + 1}`}
                                className={`w-16 h-16 object-cover rounded-lg cursor-pointer transition-all duration-200 flex-shrink-0 ${
                                    idx === current 
                                        ? 'ring-2 ring-white ring-opacity-80 opacity-100' 
                                        : 'opacity-60 hover:opacity-80'
                                }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent(idx);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
