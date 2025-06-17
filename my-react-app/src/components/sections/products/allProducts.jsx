import { Link } from 'react-router-dom'
import ProductCard from '../../ui/productCard'

const MenuList = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-8 max-w-[1240px] mx-auto px-4'>
            {products.map(prod => (
                <ProductCard
                    key={prod.id}
                    name={prod.nombre}
                    imagenes={prod.imagenes}
                    slug={prod.slug}
                    desc={prod.descripcion_corta}
                />
            ))}
        </div>
    )
}

export default MenuList