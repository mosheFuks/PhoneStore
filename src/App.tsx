import { useState } from 'react'
import { useProducts } from './hooks/useProducts'
import type { Filtros } from './data/types'
import Filters from './components/Filters/Filters'
import ProductGrid from './components/ProductGrid/ProductGrid'
import './App.css'

const filtrosIniciales: Filtros = {
  categoria: '',
  marca: '',
  precioMin: 0,
  precioMax: 0,
  busqueda: '',
}

function App() {
  const [filtros, setFiltros] = useState<Filtros>(filtrosIniciales)
  const { productos, categorias, marcas, precioMaxGlobal } = useProducts(filtros)

  return (
    <div className="app">
      <Filters
        filtros={filtros}
        onChange={setFiltros}
        categorias={categorias}
        marcas={marcas}
        precioMaxGlobal={precioMaxGlobal}
      />
      <ProductGrid productos={productos} />
    </div>
  )
}

export default App
