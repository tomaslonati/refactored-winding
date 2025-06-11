import React from "react";

/**
 * Chip de categoría para filtros
 * @param {Object} props
 * @param {string} props.label - Texto a mostrar
 * @param {boolean} props.selected - Si el chip está seleccionado
 * @param {function} props.onClick - Acción al hacer click
 */
const Chip = ({ label, selected, onClick }) => {
  return (
    <button
      className={`cursor-pointer px-3 py-1.5 md:px-4 md:py-2 rounded-full border transition-colors duration-200 text-xs md:text-sm font-medium whitespace-nowrap
        ${selected ? "bg-[#CCE9FF] text-[#0077CC] border-[#0077CC] shadow" : "bg-white text-[#4D4D4D] border-[#B3B3B3] hover:bg-blue-50"}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};

export default Chip;
