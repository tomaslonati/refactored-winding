import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../../assets/brand/blanco.png';

const Footer = () => {
    return (
        <footer
            className="w-full text-white  mt-20 lg:mt-36"
            style={{
                background: "var(--blue-gradient, linear-gradient(90deg, #0070C6 0%, #1E88C9 100%))"
            }}
        >
            {/* Sección principal del footer */}
            <div className="flex flex-col lg:flex-row justify-between items-center px-[10%] py-20 gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a href="/" className="block">
                        <img 
                            src={logo} 
                            alt="Grupo Winding El Calafate" 
                            className=""
                        />
                    </a>
                </div>                
                {/* Información de contacto y redes sociales */}
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-22 text-center items-center lg:text-left mt-4 lg:mt-0">
                    {/* Columna 1: WhatsApp y Email */}
                    <div className="flex flex-col gap-4 ">
                        {/* WhatsApp Cipoletti*/}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <a 
                                href="https://api.whatsapp.com/send?phone=5492993277282" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white   transition duration-300 ease-in-out hover:scale-101   "
                            >
                                <FaWhatsapp className="w-6 h-6" />
                                <span className="text-lg font-light">+54 299 327-7282 (Cipoletti)</span>
                            </a>
                        </div>

                        {/* WhatsApp CALAFATE*/}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <a 
                                href="https://api.whatsapp.com/send?phone=5492966312854" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white transition duration-300 ease-in-out hover:scale-101"
                            >
                                <FaWhatsapp className="w-6 h-6" />
                                <span className="text-lg font-light">+54 2966 312854 (El Calafate)</span>
                            </a>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <a 
                                href="mailto:comercial@grupowinding.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white transition duration-300 ease-in-out hover:scale-101"
                            >
                                <MdEmail className="w-6 h-6" />
                                <span className="text-lg font-light">comercial@grupowinding.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Redes Sociales */}
                    <div className="flex flex-col gap-4">
                        {/* Instagram */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <a 
                                href="https://www.instagram.com/grupowindingfte/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white transition duration-300 ease-in-out hover:scale-101"
                            >
                                <FaInstagram className="w-6 h-6" />
                                <span className="text-lg font-light">@grupowindingfte</span>
                            </a>
                        </div>

                        {/* Facebook */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <a 
                                href="https://www.facebook.com/GrupoWindingFTE/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white transition duration-300 ease-in-out hover:scale-101"
                            >
                                <FaFacebook className="w-6 h-6" />
                                <span className="text-lg font-light">GrupoWindingFTE</span>
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <a 
                                href="https://www.linkedin.com/company/grupo-winding/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white transition duration-300 ease-in-out hover:scale-101"
                            >
                                <FaLinkedin className="w-6 h-6" />
                                <span className="text-lg font-light">Grupo Winding</span>
                            </a>
                        </div>

                        {/* YouTube */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <a 
                                href="https://www.youtube.com/@grupowinding8016" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white transition duration-300 ease-in-out hover:scale-101"
                            >
                                <FaYoutube className="w-6 h-6" />
                                <span className="text-lg font-light">Grupo Winding</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección de copyright */}
            <div className="w-full bg-[#ffffff] px-[10%] py-7">
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
                    <div className="flex items-center text-black">
                        <p className="font-light text-xs md:text-sm">
                            Copyright © 2025 Todos los derechos reservados
                        </p>
                    </div>
                    <div>                        <a 
                            href="https://webfte.vercel.app/#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-black text-xs md:text-sm"
                        >
                            Desarrollado por <strong>WEB FTE</strong>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
