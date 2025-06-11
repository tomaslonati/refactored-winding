import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ASSETS } from "../../utils/assets";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();    const handleServiciosClick = (e) => {
        e.preventDefault();
        // Cerrar menú móvil si está abierto
        setMenuOpen(false);
        
        // Si estamos en la página de inicio, hacer scroll a la sección
        if (location.pathname === '/') {
            const serviciosSection = document.getElementById('servicios');
            if (serviciosSection) {
                serviciosSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Si estamos en otra página, navegar al home primero
            navigate('/');
            // Usar setTimeout para asegurar que la página se renderice antes del scroll
            setTimeout(() => {
                const serviciosSection = document.getElementById('servicios');
                if (serviciosSection) {
                    serviciosSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const handleProyectosClick = (e) => {
        e.preventDefault();
        // Cerrar menú móvil si está abierto
        setMenuOpen(false);
        
        // Si estamos en la página de inicio, hacer scroll a la sección
        if (location.pathname === '/') {
            const somosWindingSection = document.getElementById('somosWinding');
            if (somosWindingSection) {
                somosWindingSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Si estamos en otra página, navegar al home primero
            navigate('/');
            // Usar setTimeout para asegurar que la página se renderice antes del scroll
            setTimeout(() => {
                const somosWindingSection = document.getElementById('somosWinding');
                if (somosWindingSection) {
                    somosWindingSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };    // Efecto para manejar el scroll cuando llegamos al home con hash
    useEffect(() => {
        if (location.pathname === '/' && location.hash === '#servicios') {
            setTimeout(() => {
                const serviciosSection = document.getElementById('servicios');
                if (serviciosSection) {
                    serviciosSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        if (location.pathname === '/' && location.hash === '#somosWinding') {
            setTimeout(() => {
                const somosWindingSection = document.getElementById('somosWinding');
                if (somosWindingSection) {
                    somosWindingSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <header className="bg-white w-full mx-auto fixed top-0 z-50 shadow-md">
            <div className="m-0 px-4 py-3 flex items-center justify-between max-w-[1240px] mx-auto">                {/* Logo a la izquierda */}
                <div className="flex-shrink-0 flex items-center">                    <Link to="/">
                        <img
                            src={ASSETS.brand.logo}
                            alt="Logo"
                            className="w-20"
                        />
                    </Link>
                </div>

                {/* Menú centrado */}
                <nav className="hidden md:flex flex-1 justify-center space-x-6 items-center gap-6">
                    <div className="relative"
                        onMouseEnter={() => setProductsDropdownOpen(true)}
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                    >
                        <button
                            className="flex py-2  items-center gap-1 text-gray-700 hover:text-gray-500 focus:outline-none"
                            aria-haspopup="true"
                            aria-expanded={productsDropdownOpen}
                        >
                            Productos
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>                            
                        <div className={`${productsDropdownOpen ? 'block' : 'hidden'} absolute left-0 mt-0 w-64 text-black text-left bg-white border rounded shadow-lg z-10`}
                        >
                            <Link to="/productos?cat=electricidad-donde-no-llega-la-red" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100">Electricidad donde no llega la red</Link>
                            <Link to="/productos?cat=ahorro-de-combustibles-fsiles" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100">Ahorro en combustibles fósiles</Link>
                            <Link to="/productos?cat=soluciones-para-cortes-de-luz" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100">Soluciones para cortes de luz</Link>
                            <Link to="/productos?cat=ahorro-en-facturas-de-luz" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100">Ahorro en facturas de luz</Link>
                            <Link to="/productos" className="block px-4 py-2 text-sm  border-t-1   border-gray-300 text-gray-600 hover:bg-blue-100">Todos los productos</Link>
                        </div>
                    </div>                    
                    <button 
                        onClick={handleServiciosClick} 
                        className="text-gray-700 hover:text-gray-500 cursor-pointer">
                        Servicios
                    </button>
                    <button
                        onClick={handleProyectosClick}
                        className="text-gray-700 hover:text-gray-500 cursor-pointer">
                        Proyectos
                    </button>
                    <Link to="/calculador"
                        className="text-gray-700 hover:text-gray-500">
                        Calculador de consumo
                    </Link>
                </nav>                {/* Contacto a la derecha */}
                <div className="hidden md:flex flex-shrink-0 items-center">
                    <Link to="/contacto" className="text-[#0071c6] font-bold px-4 py-4  transition-colors">Contacto</Link>
                </div>

                <button
                    className="md:hidden flex items-center text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Side Menu */}
            <div>
                {/* Overlay */}
                <div className={`fixed inset-0 bg-[#00000052] bg-opacity-40 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuOpen(false)}></div>
                {/* Side Menu con transición suave */}
                <nav className={`fixed  top-0 right-0 h-full w-full  bg-white border-l shadow-lg z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>                    
                    <div className="px-4 py-4 flex items-center justify-between border-b">
                        {/* Logo a la izquierda */}                        <Link to="/">
                            <img src={ASSETS.brand.logo} alt="Logo" className="w-16 h-auto mr-2" />
                        </Link>
                        <span className="font-bold text-lg text-left flex-1"></span>
                        <button onClick={() => setMenuOpen(false)}  aria-label="Cerrar menú">
                            {/* Icono de cruz (X) */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6  w-6 text-gray-700 hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="px-4 py-2 flex-1 overflow-y-auto text-left">
                                                  <div className="flex flex-col items-start ">
                            <button
                                className="flex items-center w-full justify-start text-gray-700 py-3 gap-2 text-lg font-medium"
                                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                            >
                                Productos
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>                            {productsDropdownOpen && (
                                <div className=" border-1 ml-2 border-gray-300 pt-2 rounded">
                                    <Link to="/productos?cat=electricidad-donde-no-llega-la-red" className="border-b-1 border-gray-100 px-4 block py-2 text-gray-600 text-base">Electricidad donde no llega la red</Link>
                                    <Link to="/productos?cat=ahorro-de-combustibles-fosiles" className="border-b-1 border-gray-100 px-4 block py-2 text-gray-600 text-base">Ahorro en combustibles fósiles</Link>
                                    <Link to="/productos?cat=soluciones-para-cortes-de-luz" className="border-b-1 border-gray-100 px-4 block py-2 text-gray-600 text-base">Soluciones para cortes de luz</Link>
                                    <Link to="/productos?cat=ahorro-en-facturas-de-luz" className="px-4 block py-2 text-gray-600 text-base">Ahorro en facturas de luz</Link>
                                    <Link to="/productos" className="px-4 block py-3 text-gray-600 w-full border-t-1 border-gray-300 text-base font-medium">Todos los productos</Link>
                                </div>
                            )}
                            </div>                        
                            <button onClick={handleServiciosClick} className="block text-gray-700 py-3 text-lg font-medium cursor-pointer">Servicios</button>
                        <button onClick={handleProyectosClick} className="block text-gray-700 py-3 text-lg font-medium cursor-pointer">Proyectos</button>
                        <Link to="/calculador" className="block text-gray-700 py-3 text-lg font-medium">Calculador de consumo</Link>
                        <Link to="/contacto" className="block text-gray-700 py-3 text-lg font-medium">Contacto</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;