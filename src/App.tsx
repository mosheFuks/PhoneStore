import { useProducts } from './hooks/useProducts'
import ProductGrid from './components/ProductGrid/ProductGrid'
import './App.css'

function App() {
  const { productos } = useProducts()

  return (
    <div className="app">
      <ProductGrid productos={productos} />
    </div>
  )
}

export default App
