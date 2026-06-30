export type Categoria = 'celular' | 'auriculares' | 'tablet' | 'accesorio'

export interface Producto {
  id: string
  categoria: Categoria
  marca: string
  modelo: string
  ram?: string
  almacenamiento?: string
  colores: string[]
  precio: number
  stock: boolean
  caracteristicas: string[]
  imagen: string
}

export interface Filtros {
  categoria: Categoria | ''
  marca: string
  precioMin: number
  precioMax: number
  busqueda: string
}
