// mp paso 6 — Ejemplo combinado: tabla ordenada, favoritos persistidos y selectors
import { useState } from 'react'
import { Text } from 'react-native'
import { Boton, Fila, Pantalla, ui } from '@/components/ligapro-ui'
import { useEquiposStore } from '@/stores/equipos-store'
import { useFavoritosStore } from '@/stores/favoritos-store'

export default function Paso6mp() {
  const equipos = useEquiposStore((s) => s.equipos)
  const sumarVictoria = useEquiposStore((s) => s.sumarVictoria)
  const favoritos = useFavoritosStore((s) => s.favoritos)
  const alternar = useFavoritosStore((s) => s.alternar)
  const [soloFavoritos, setSoloFavoritos] = useState(false)

  const tabla = [...equipos]
    .sort((a, b) => b.puntos - a.puntos)
    .filter((e) => !soloFavoritos || favoritos.includes(e.id))

  return (
    <Pantalla titulo="LigaPro: mi tabla">
      <Boton texto={soloFavoritos ? 'Ver todos' : 'Ver solo favoritos'} onPress={() => setSoloFavoritos(!soloFavoritos)} />
      {tabla.length === 0 && <Text style={ui.detalle}>No hay favoritos guardados</Text>}
      {tabla.map((e, i) => (
        <Fila key={e.id} titulo={`${i + 1}. ${e.nombre}`} detalle={`${e.puntos} pts`}>
          <Boton texto="+3" onPress={() => sumarVictoria(e.id)} />
          <Boton rojo={favoritos.includes(e.id)} texto={favoritos.includes(e.id) ? '★' : '☆'} onPress={() => alternar(e.id)} />
        </Fila>
      ))}
    </Pantalla>
  )
}
