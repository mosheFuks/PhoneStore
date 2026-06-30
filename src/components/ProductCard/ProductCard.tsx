import { useState } from 'react'
import type { Producto } from '../../data/types'
import './ProductCard.css'

interface ProductCardProps {
  producto: Producto
}

function ProductCard({ producto }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(producto.colores[0])
  const [imgError, setImgError] = useState(false)

  const imgSrc = imgError
    ? `/images/marcas/${producto.marca.toLowerCase()}.png`
    : producto.imagen

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={imgSrc}
          alt={`${producto.marca} ${producto.modelo}`}
          onError={() => setImgError(true)}
          className="product-card__image"
        />
        {!producto.stock && (
          <span className="product-card__out-of-stock">Sin stock</span>
        )}
      </div>

      <div className="product-card__body">
        <p className="product-card__brand">{producto.marca}</p>
        <h2 className="product-card__model">{producto.modelo}</h2>

        <div className="product-card__chips">
          {producto.ram && <span className="chip">{producto.ram} RAM</span>}
          {producto.almacenamiento && (
            <span className="chip">{producto.almacenamiento}</span>
          )}
          <span className="chip">{selectedColor}</span>
        </div>

        <p className="product-card__price">${producto.precio}</p>

        {producto.colores.length > 1 && (
          <div className="product-card__colors">
            {producto.colores.map(color => (
              <button
                key={color}
                className={`color-btn${selectedColor === color ? ' color-btn--active' : ''}`}
                onClick={() => setSelectedColor(color)}
                aria-label={`Color: ${color}`}
                aria-pressed={selectedColor === color}
              >
                {color}
              </button>
            ))}
          </div>
        )}

        <div className="product-card__specs">
          {producto.caracteristicas.map(c => (
            <span key={c} className="spec-item">{c}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProductCard
