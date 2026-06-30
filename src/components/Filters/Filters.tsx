import type { Filtros, Categoria } from '../../data/types'
import './Filters.css'

interface FiltersProps {
  filtros: Filtros
  onChange: (f: Filtros) => void
  categorias: Categoria[]
  marcas: string[]
  precioMaxGlobal: number
}

function Filters({ filtros, onChange, categorias, marcas, precioMaxGlobal }: FiltersProps) {
  function set<K extends keyof Filtros>(key: K, value: Filtros[K]) {
    onChange({ ...filtros, [key]: value })
  }

  const hayFiltrosActivos =
    filtros.categoria !== '' ||
    filtros.marca !== '' ||
    filtros.precioMin > 0 ||
    filtros.precioMax > 0 ||
    filtros.busqueda !== ''

  function resetear() {
    onChange({ categoria: '', marca: '', precioMin: 0, precioMax: 0, busqueda: '' })
  }

  return (
    <div className="filters">
      <div className="filters__top">
        <input
          type="search"
          placeholder="Buscar modelo, marca, característica..."
          value={filtros.busqueda}
          onChange={e => set('busqueda', e.target.value)}
          className="filters__search"
          aria-label="Buscar productos"
        />
        {hayFiltrosActivos && (
          <button className="filters__reset" onClick={resetear} aria-label="Limpiar filtros">
            Limpiar
          </button>
        )}
      </div>

      <div className="filters__row">
        <button
          className={`filter-chip${filtros.categoria === '' ? ' filter-chip--active' : ''}`}
          onClick={() => set('categoria', '')}
        >
          Todos
        </button>
        {categorias.map(cat => (
          <button
            key={cat}
            className={`filter-chip${filtros.categoria === cat ? ' filter-chip--active' : ''}`}
            onClick={() => set('categoria', cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="filters__row">
        <button
          className={`filter-chip${filtros.marca === '' ? ' filter-chip--active' : ''}`}
          onClick={() => set('marca', '')}
        >
          Todas las marcas
        </button>
        {marcas.map(marca => (
          <button
            key={marca}
            className={`filter-chip${filtros.marca === marca ? ' filter-chip--active' : ''}`}
            onClick={() => set('marca', marca)}
          >
            {marca}
          </button>
        ))}
      </div>

      <div className="filters__price-row">
        <span className="filters__price-label">Precio</span>
        <div className="filters__price-inputs">
          <input
            type="number"
            placeholder="Mín"
            value={filtros.precioMin || ''}
            onChange={e => set('precioMin', Number(e.target.value))}
            min={0}
            className="filters__price-input"
            aria-label="Precio mínimo"
          />
          <span className="filters__price-sep">–</span>
          <input
            type="number"
            placeholder={`Máx ($${precioMaxGlobal})`}
            value={filtros.precioMax || ''}
            onChange={e => set('precioMax', Number(e.target.value))}
            min={0}
            className="filters__price-input"
            aria-label="Precio máximo"
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
