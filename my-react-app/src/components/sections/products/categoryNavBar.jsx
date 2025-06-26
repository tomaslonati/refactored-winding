import React, { useEffect, useState, useRef } from "react";
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
  const navRef = useRef(null);

  useEffect(() => {
    if (onCategoryChange) onCategoryChange(selected);
    
    // Hacer scroll a la izquierda cuando cambia la categoría
    if (navRef.current) {
      navRef.current.scrollLeft = 0;
    }
  }, [selected, onCategoryChange]);
  
  // Organizar categorías: para mobile, "Ver todos" primero, luego la seleccionada, luego el resto
  const activeCategories = categories.filter(cat => cat.active === "true");
  
  // Para desktop: orden original
  const orderedCategoriesDesktop = activeCategories;
  
  // Para mobile: orden personalizado
  const todos = activeCategories.find(cat => cat.id === 0);
  const selectedCategory = activeCategories.find(cat => cat.id === selected && cat.id !== 0);
  const otherCategories = activeCategories.filter(cat => cat.id !== 0 && cat.id !== selected);
  
  const orderedCategoriesMobile = [
    todos,
    selectedCategory,
    ...otherCategories
  ].filter(Boolean); // Filtrar elementos undefined
  
  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-[92px] z-40">
      <div className="max-w-[1240px] mx-auto px-4">
        <nav ref={navRef} className="flex md:flex-wrap gap-2 py-4  overflow-x-auto md:overflow-x-visible scrollbar-hide">
          <div className="flex gap-2 md:flex-wrap min-w-max md:min-w-0 ">
            {/* Desktop: orden original */}
            <div className="hidden md:flex gap-2 flex-wrap">
              {orderedCategoriesDesktop.map((cat) => (
                <Chip
                  key={cat.id}
                  label={cat.nombre}
                  selected={selected === cat.id}
                  onClick={() => setSelected(cat.id)}
                />
              ))}
            </div>
            
            {/* Mobile: orden personalizado */}
            <div className="flex md:hidden gap-2">
              {orderedCategoriesMobile.map((cat) => (
                <Chip
                  key={cat.id}
                  label={cat.nombre}
                  selected={selected === cat.id}
                  onClick={() => setSelected(cat.id)}
                />
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CategoryNavBar;
