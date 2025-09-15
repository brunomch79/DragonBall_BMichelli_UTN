import { useState, useEffect } from 'react'
import { Contendor } from "./components/Contenedor"
import { consultar } from "./api/api.js"
import { Tarjeta } from './components/Tarjeta.jsx'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function cargar() {
      setLoading(true)
      const i = await consultar()
      setItems(i)
      setTimeout(() => setLoading(false), 1000)
    }
    cargar()
  }, [])

  if (loading) return <p>Cargando...</p>

  // BUSCADOR
const itemsFiltrados = items.filter(item =>
  item.name.toLowerCase().startsWith(search.toLowerCase())
)

  return (
    <div className="bg-amber-400 min-h-screen p-4">
      
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border-3 border-black rounded w-full"
      />

      <Contendor>
        {itemsFiltrados.length > 0 ? (
          itemsFiltrados.map(item => <Tarjeta item={item} key={item?.id} />)
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </Contendor>
    </div>
  )
}

export default App


