import { Link } from 'react-router-dom';

const Button = ({ 
    variant = 'primary', 
    size = 'medium',
    href,
    to, // Nueva prop para rutas internas
    onClick,
    children,
    className = '',
    disabled = false,
    external = false, // Nueva prop para forzar enlace externo
    ...props 
}) => {
    // Estilos base compartidos
    const baseStyles = "font-semibold rounded-xl transition-all duration-300 ease-in-out text-center focus:outline-none focus:ring-2 focus:ring-[#0070C6] focus:ring-offset-2";
    
    // Variaciones de estilo
    const variants = {
        primary: "text-[#FFF] bg-[linear-gradient(90deg,_#0070C6_0%,_#1E88C9_100%)] hover:bg-[linear-gradient(70deg,_#0070C6_40%,_#1E88C9_80%)] hover:shadow-xl hover:backdrop-blur-sm",
        secondary: "text-[#FFF] border border-[#fff] bg-transparent hover:bg-white/05 hover:shadow-xl hover:backdrop-blur-sm hover:border-[#b3e0ff]",
        outline: "text-[#0070C6] border border-[#0070C6] bg-transparent hover:bg-[#0070C6] hover:text-white",
        ghost: "text-[#0070C6] bg-transparent hover:bg-[#0070C6]/10"
    };
    
    // Tamaños
    const sizes = {
        small: "text-sm py-2 px-4",
        medium: "text-sm md:text-base py-3 px-6",
        large: "text-base md:text-lg py-4 px-8"
    };
    
    // Estilos responsivos para width
    const responsiveWidth = "w-full md:w-min md:text-nowrap text-nowrap";
    
    // Combinación de clases
    const buttonClasses = `
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${responsiveWidth}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
    `.trim().replace(/\s+/g, ' ');

    // Función para determinar si es un enlace interno
    const isInternalLink = (url) => {
        if (!url) return false;
        return url.startsWith('/') && !url.startsWith('//') && !url.includes('http');
    };

    // Determinar qué prop de navegación usar
    const navigationProp = to || href;

    // Si tiene prop 'to' o es un enlace interno (y no está marcado como externo)
    if (navigationProp && !external && (to || isInternalLink(href))) {
        return (
            <Link
                to={navigationProp}
                className={buttonClasses}
                {...props}
            >
                {children}
            </Link>
        );
    }
    
    // Si es un enlace externo, usar <a>
    if (href) {
        return (
            <a
                href={href}
                className={buttonClasses}
                {...props}
            >
                {children}
            </a>
        );
    }
    
    // Si es un botón regular, usar <button>
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
