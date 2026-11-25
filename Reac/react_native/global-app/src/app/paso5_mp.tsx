// mp paso 5 — Persistencia: los favoritos siguen al cerrar la app
import { Text } from 'react-native'
import { Boton, Fila, Pantalla, ui } from '@/components/ligapro-ui'
import { useEquiposStore } from '@/stores/equipos-store'
import { useFavoritosStore } from '@/stores/favoritos-store'

export default function Paso5mp() {
  const equipos = useEquiposStore((s) => s.equipos)
  const { favoritos, alternar, limpiar } = useFavoritosStore()

  return (
    <Pantalla titulo="Equipos favoritos">
      <Text style={ui.detalle}>Guardados: {favoritos.length}</Text>
      {equipos.map((e) => {
        const esFavorito = favoritos.includes(e.id)
        return (
          <Fila key={e.id} titulo={e.nombre} detalle={esFavorito ? 'Favorito' : 'Sin marcar'}>
            <Boton rojo={esFavorito} texto={esFavorito ? 'Quitar' : 'Guardar'} onPress={() => alternar(e.id)} />
          </Fila>
        )
      })}
      <Boton rojo texto="Limpiar favoritos" onPress={limpiar} />
    </Pantalla>
  )
}
