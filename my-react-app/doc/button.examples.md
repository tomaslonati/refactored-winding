// Button Component - Ejemplos de uso
// filepath: c:\Users\tomas\OneDrive\Escritorio\web fte\refactored-winding\my-react-app\src\components\common\button.examples.md

# Componente Button

Un componente reutilizable para botones con múltiples variantes y tamaños.

## Props

- `variant`: Estilo del botón ('primary', 'secondary', 'outline', 'ghost')
- `size`: Tamaño del botón ('small', 'medium', 'large')
- `href`: Si se proporciona, renderiza como enlace <a>
- `onClick`: Función para manejar clics (solo para botones)
- `disabled`: Deshabilita el botón
- `className`: Clases CSS adicionales
- `children`: Contenido del botón

## Ejemplos de uso

```jsx
import { Button } from '../common';

// Botón primario (gradiente azul)
<Button variant="primary" href="/productos">
    Ver productos
</Button>

// Botón secundario (borde blanco)
<Button variant="secondary" href="/contacto">
    Contactanos
</Button>

// Botón outline (borde azul)
<Button variant="outline" onClick={handleClick}>
    Más información
</Button>

// Botón ghost (fondo transparente)
<Button variant="ghost" size="small">
    Cancelar
</Button>

// Botón con clases personalizadas
<Button
    variant="primary"
    size="large"
    className="mt-4"
    onClick={handleSubmit}
>
    Enviar formulario
</Button>

// Botón deshabilitado
<Button variant="primary" disabled>
    Cargando...
</Button>
```

## Variantes disponibles

1. **primary**: Fondo con gradiente azul, ideal para acciones principales
2. **secondary**: Fondo transparente con borde blanco, para acciones secundarias
3. **outline**: Borde azul con texto azul, se vuelve azul sólido al hover
4. **ghost**: Completamente transparente, ideal para acciones sutiles

## Tamaños disponibles

- **small**: Texto pequeño, padding reducido
- **medium**: Tamaño estándar (por defecto)
- **large**: Texto y padding grandes
