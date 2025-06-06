# SectionHeader Component - Ejemplos de uso

Un componente reutilizable para encabezados de sección con título y descripción opcional.

## Props

- `title`: El título principal de la sección (requerido)
- `description`: Descripción opcional debajo del título
- `titleSize`: Tamaño del título ('small', 'medium', 'large', 'extraLarge')
- `alignment`: Alineación del contenido ('left', 'center', 'right')
- `className`: Clases CSS adicionales para el contenedor
- `titleClassName`: Clases CSS adicionales para el título
- `descriptionClassName`: Clases CSS adicionales para la descripción
- `maxWidth`: Ancho máximo del contenedor (por defecto 'max-w-[1240px]')

## Ejemplos de uso

```jsx
import { SectionHeader } from '../common';

// Uso básico
<SectionHeader 
    title="Nuestros productos"
    description="Soluciones de calidad para industria, hogares y comercios."
/>

// Con tamaño personalizado
<SectionHeader 
    title="Sobre nosotros"
    description="Conoce nuestra historia y misión"
    titleSize="medium"
/>

// Alineado a la izquierda
<SectionHeader 
    title="Servicios"
    description="Todo lo que ofrecemos para tu negocio"
    alignment="left"
/>

// Solo título, sin descripción
<SectionHeader 
    title="Contacto"
    titleSize="extraLarge"
/>

// Con clases personalizadas
<SectionHeader 
    title="Promociones especiales"
    description="Ofertas limitadas por tiempo"
    className="bg-blue-50 p-8 rounded-lg"
    titleClassName="text-blue-600"
    descriptionClassName="text-blue-500"
/>

// Con ancho máximo personalizado
<SectionHeader 
    title="Newsletter"
    description="Suscríbete para recibir noticias"
    maxWidth="max-w-2xl"
/>
```

## Tamaños disponibles

- **small**: `text-2xl lg:text-3xl`
- **medium**: `text-3xl lg:text-4xl`
- **large**: `text-4xl lg:text-5xl` (por defecto)
- **extraLarge**: `text-5xl lg:text-6xl`

## Alineaciones disponibles

- **left**: Contenido alineado a la izquierda
- **center**: Contenido centrado (por defecto)
- **right**: Contenido alineado a la derecha

## Características

- Responsive por defecto
- Spacing consistente con `gap-4`
- Padding vertical adaptativo (`lg:py-10 pt-10 pb-4`)
- Colores de texto consistentes (título: `#1A1A1A`, descripción: `#666666`)
- Ancho máximo con centrado automático
