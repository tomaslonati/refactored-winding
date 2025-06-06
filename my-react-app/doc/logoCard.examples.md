# LogoCard Component - Documentación

Un componente reutilizable para mostrar logos con un estilo uniforme y elegante.

## Props

- `src`: Ruta de la imagen del logo (requerido)
- `alt`: Texto alternativo para accesibilidad (requerido)
- `className`: Clases CSS adicionales (opcional)

## Características

- **Altura fija**: 120px para consistencia visual
- **Padding personalizado**: 35px horizontal, 30px vertical
- **Drop shadow**: Color #026EC033 para profundidad sutil
- **Fondo blanco**: Para destacar los logos
- **Bordes redondeados**: `rounded-lg` para un look moderno
- **Responsive**: La imagen se ajusta manteniendo proporciones

## Ejemplos de uso

```jsx
import LogoCard from '../ui/logoCard';

// Uso básico
<LogoCard
    src="src/assets/home/04_estela.png"
    alt="Estela"
/>

// Con clases adicionales
<LogoCard
    src="src/assets/home/04_glaciarium.png"
    alt="Glaciarium"
    className="hover:scale-105 transition-transform"
/>
```

## Estilo visual

- **Contenedor**: 120px de altura, padding 35px/30px
- **Imagen**: Se ajusta automáticamente manteniendo proporciones
- **Sombra**: Drop shadow sutil con color de marca
- **Fondo**: Blanco para contraste
- **Espaciado**: Margen horizontal de 16px (`mx-4`)

## Uso en carruseles

Ideal para carruseles de logos donde se necesita:

- Consistencia visual entre diferentes logos
- Altura uniforme independientemente del tamaño original
- Estilo profesional con sombra y padding
