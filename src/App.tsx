import type { Producto } from './data/types'
import ProductCard from './components/ProductCard/ProductCard'
import './App.css'

const productoEjemplo: Producto = {
  id: 'iphone-13-128',
  categoria: 'celular',
  marca: 'Apple',
  modelo: 'iPhone 13',
  ram: '4GB',
  almacenamiento: '128GB',
  colores: ['Azul', 'Negro', 'Blanco', 'Rojo', 'Rosa'],
  precio: 350,
  stock: true,
  caracteristicas: ['Cámara dual 12MP', 'Chip A15 Bionic', 'Face ID', '5G', 'Batería 3227mAh'],
  imagen: '/images/productos/iphone-13-128.jpg',
}

function App() {
  return (
    <div className="app">
      <ProductCard producto={productoEjemplo} />
    </div>
  )
}

export default App
