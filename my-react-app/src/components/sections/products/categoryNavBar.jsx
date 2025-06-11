import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Chip from "../../common/chip";
import categories from "../../../data/category.json";

// Función para convertir nombre de categoría a slug para URL
function categoryToSlug(categoryName) {
  return categoryName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

// Función para encontrar categoría por slug
function findCategoryBySlug(slug) {
  return categories.find(cat => categoryToSlug(cat.nombre) === slug) || categories[0];
}

// Hook para leer el parámetro de categoría desde la URL
function useCategoryParam() {
  const [selected, setSelected] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catSlug = params.get("cat");
    if (catSlug) {
      const category = findCategoryBySlug(catSlug);
      setSelected(category.id);
    } else {
      setSelected(0); // Si no hay parámetro, seleccionar "Todos"
    }
  }, [location.search]); // Escuchar cambios en la URL

  const setCategory = (catId) => {
    setSelected(catId);
    const category = categories.find(cat => cat.id === catId);
    const slug = categoryToSlug(category.nombre);
    
    const params = new URLSearchParams(window.location.search);
    if (catId === 0) {
      params.delete("cat");
    } else {
      params.set("cat", slug);
    }
    
    const queryString = params.toString();
    const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
    window.history.replaceState({}, "", newUrl);
  };

  return [selected, setCategory];
}

const CategoryNavBar = ({ onCategoryChange }) => {
  const [selected, setSelected] = useCategoryParam();

  useEffect(() => {
    if (onCategoryChange) onCategoryChange(selected);
  }, [selected, onCategoryChange]);
  
  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-[92px] z-40">
      <div className="max-w-[1240px] mx-auto px-4">
        <nav className="flex md:flex-wrap gap-2 py-4  overflow-x-auto md:overflow-x-visible scrollbar-hide">
          <div className="flex gap-2 md:flex-wrap min-w-max md:min-w-0 ">
            {categories.map((cat) => (
              <Chip
                key={cat.id}
                label={cat.nombre}
                selected={selected === cat.id}
                onClick={() => setSelected(cat.id)}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CategoryNavBar;
