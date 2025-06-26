import React from 'react';

/**
 * Componente para mostrar una sección de información con título y lista de elementos
 * @param {Object} props
 * @param {string} props.title - Título de la sección
 * @param {string[]|Object} props.items - Array de elementos o objeto con clave-valor a mostrar
 * @param {string} props.className - Clases CSS adicionales
 */
const InfoSection = ({ title, items = [], className = "" }) => {
    if (!items || (Array.isArray(items) && items.length === 0) || (typeof items === 'object' && Object.keys(items).length === 0)) {
        return null;
    }    // Función para renderizar elementos basados en el tipo de datos
    const renderItems = () => {
        // Si items es un array (formato anterior)
        if (Array.isArray(items)) {
            return items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
            ));
        }
          // Si items es un objeto (formato nuevo)
        if (typeof items === 'object' && items !== null) {
            return Object.entries(items).map(([key, value], itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                    <div className=" leading-relaxed flex flex-col p-[24px] border border-[#E5F4FF] w-full h-min">
                        <span className="font-semibold text-[18px] text-[#1A1A1A]">{key}: </span>
                        <span className="text-[#666] text-[16px] font-normal">{value}</span>
                    </div>
                </li>
            ));
        }

        return null;
    };

    return (
        <div className={`bg-gray-50 rounded-xl shadow-[0px_2px_14px_0px_rgba(2,110,192,0.10)] ${className}`}>
            <h3 className="text-[22px] font-semibold text-[#1A1A1A] bg-[#E5F4FF] p-6 rounded-t-xl">
                {title}
            </h3>
            <div className=" pt-0">
                <ul className="">
                    {renderItems()}
                </ul>
            </div>
        </div>
    );
};

export default InfoSection;
