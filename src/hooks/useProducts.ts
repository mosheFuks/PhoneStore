import productsData from '../data/products.json'
import type { Producto } from '../data/types'

const todosLosProductos = productsData as Producto[]

export function useProducts() {
  return { productos: todosLosProductos }
}
