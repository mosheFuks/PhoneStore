import productsData from '../data/products.json'
import type { Producto, Filtros, Categoria } from '../data/types'

const todos = productsData as Producto[]

export function useProducts(filtros: Filtros) {
  const productos = todos.filter(p => {
    if (filtros.categoria && p.categoria !== filtros.categoria) return false
    if (filtros.marca && p.marca !== filtros.marca) return false
    if (filtros.precioMin > 0 && p.precio < filtros.precioMin) return false
    if (filtros.precioMax > 0 && p.precio > filtros.precioMax) return false
    if (filtros.busqueda) {
      const q = filtros.busqueda.toLowerCase()
      const coincide =
        p.marca.toLowerCase().includes(q) ||
        p.modelo.toLowerCase().includes(q) ||
        p.caracteristicas.some(c => c.toLowerCase().includes(q))
      if (!coincide) return false
    }
    return true
  })

  const categorias = [...new Set(todos.map(p => p.categoria))] as Categoria[]
  const marcas = [...new Set(todos.map(p => p.marca))].sort()
  const precios = todos.map(p => p.precio)
  const precioMaxGlobal = Math.max(...precios)

  return { productos, categorias, marcas, precioMaxGlobal }
}
