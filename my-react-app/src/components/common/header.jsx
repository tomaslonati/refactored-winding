import React, { useState } from "react";
import logo from "../../assets/brand/shortcut.png"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

    return (
        <header className="bg-white w-full mx-auto fixed top-0 z-50 shadow-md">
            <div className="m-0 px-4 py-3 flex items-center justify-between max-w-[1240px] mx-auto">
                {/* Logo a la izquierda */}
                <div className="flex-shrink-0 flex items-center">
                    <a href="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-20"
                        />
                    </a>
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
                        <div className={`${productsDropdownOpen ? 'block' : 'hidden'} absolute left-0 mt-0 w-56 text-black text-left bg-white border rounded shadow-lg z-10`}
                        >
                            <a href="#eolica" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100">Energía eólica</a>
                            <a href="#movil" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100">Energía sustentable movil</a>
                            <a href="#bombeo" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100">Bombeo solar</a>
                            <a href="#casas-rodantes" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100">Casas rodantes</a>
                            <a href="#soportes" className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-100">Soportes</a>
                            <a href="#kit-casas" className="block px-4 py-2 text-sm  text-gray-600 hover:bg-blue-100">Kit casas</a>
                            <a href="/productos" className="block px-4 py-2 text-sm  border-t-1   border-gray-300 text-gray-600 hover:bg-blue-100">Todos los productos</a>
                        </div>
                    </div>
                    <div className="relative"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                        <button
                            className="flex items-center gap-1 py-2  text-[#1A1A1A] hover:text-gray-500 focus:outline-none"
                            aria-haspopup="true"
                            aria-expanded={servicesDropdownOpen}
                        >
                            Servicios
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`${servicesDropdownOpen ? 'block' : 'hidden'} absolute left-0 mt-0 w-40 text-black text-left bg-white border rounded shadow-lg z-10`}
                        >
                            <a href="#alquiler" className="block px-4 py-2 text-sm  border-t-1   border-gray-300 text-gray-600 hover:bg-blue-100">Alquiler</a>
                            <a href="#ingenieria" className="block px-4 py-2 text-sm  border-t-1   border-gray-300 text-gray-600 hover:bg-blue-100">Ingeniería</a>
                            <a href="#servicio-tecnico" className="block px-4 py-2 text-sm  border-t-1   border-gray-300 text-gray-600 hover:bg-blue-100">Servicio Técnico</a>
                            <a href="/servicios" className="block px-4 py-2 text-sm  border-t-1   border-gray-300 text-gray-600 hover:bg-blue-100">Todos los servicios</a>

                        </div>
                    </div>

                    <a href="#nosotros" className="text-gray-700 hover:text-gray-500 ">Nosotros</a>
                    <a href="#proyectos" className="text-gray-700 hover:text-gray-500">Proyectos</a>
                    <a href="#calculador" className="text-gray-700 hover:text-gray-500">Calculador de consumo</a>
                </nav>

                {/* Contacto a la derecha */}
                <div className="hidden md:flex flex-shrink-0 items-center">
                    <a href="#contacto" className="text-[#0071c6] font-bold px-4 py-4  transition-colors">Contacto</a>
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
                        {/* Logo a la izquierda */}
                        <a href="/">
                            <img src={logo} alt="Logo" className="w-16 h-auto mr-2" />
                        </a>
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
                                className="flex items-center w-full justify-start text-gray-700 py-2 gap-1"
                                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                            >
                                Productos
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {productsDropdownOpen && (
                                <div className=" border-1 ml-2 border-gray-300 pt-2 rounded">
                                    <a href="#eolica" className="border-b-1 border-gray-100 px-4 block py-1 text-gray-600">Energía eólica</a>
                                    <a href="#movil" className="border-b-1 border-gray-100 px-4 block py-1 text-gray-600">Energía sustentable movil</a>
                                    <a href="#bombeo" className="border-b-1 border-gray-100 px-4 block py-1 text-gray-600">Bombeo solar</a>
                                    <a href="#casas-rodantes" className="border-b-1 border-gray-100 px-4 block py-1 text-gray-600">Casas rodantes</a>
                                    <a href="#soportes" className="border-b-1 border-gray-100 px-4 block py-1 text-gray-600">Soportes</a>
                                    <a href="#kit-casas" className="px-4 block py-1 text-gray-600">Kit casas</a>
                                    <a href="/productos" className="px-4 block py-2 text-gray-600 w-full border-t-1   border-gray-300">Todos los productos</a>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col items-start">
                            <button
                                className="flex items-center w-full justify-start text-gray-700 py-2 gap-1"
                                onClick={() => setServicesOpen(!servicesOpen)}
                            >
                                Servicios
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {servicesOpen && (
                                <div className="border-1 ml-2 border-gray-300 pt-2 rounded">
                                    <a href="#alquiler" className="px-4 block py-1 text-gray-600">Alquiler</a>
                                    <a href="#ingenieria" className="px-4 block py-1 text-gray-600">Ingeniería</a>
                                    <a href="#servicio-tecnico" className="px-4 block py-1 text-gray-600">Servicio Técnico</a>
                                    <a href="/servicios" className="px-4 block py-2 text-gray-600 w-full border-t-1   border-gray-300">Todos los servicios</a>

                                </div>
                            )}
                        </div>

                        <a href="#nosotros" className="block text-gray-700 py-2">Nosotros</a>
                        <a href="#proyectos" className="block text-gray-700 py-2">Proyectos</a>
                        <a href="#calculador" className="block text-gray-700 py-2">CalculadorDeConsumo</a>
                        <a href="#contacto" className="block text-gray-700 py-2">Contacto</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;