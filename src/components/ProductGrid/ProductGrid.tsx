import type { Producto } from '../../data/types'
import ProductCard from '../ProductCard/ProductCard'
import './ProductGrid.css'

interface ProductGridProps {
  productos: Producto[]
}

function ProductGrid({ productos }: ProductGridProps) {
  if (productos.length === 0) {
    return (
      <p className="product-grid__empty">No se encontraron productos.</p>
    )
  }

  return (
    <div className="product-grid">
      {productos.map(producto => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ProductGrid
