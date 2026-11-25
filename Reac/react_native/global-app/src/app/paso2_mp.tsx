// mp paso 2 — Selectors: cada componente lee solo lo que necesita
import { Text } from 'react-native'
import { Boton, Fila, Pantalla, ui } from '@/components/ligapro-ui'
import { useEquiposStore } from '@/stores/equipos-store'

function TotalPuntos() {
  const total = useEquiposStore((s) => s.equipos.reduce((suma, e) => suma + e.puntos, 0))
  return <Text style={ui.detalle}>Puntos repartidos: {total}</Text>
}

function CantidadEquipos() {
  const cantidad = useEquiposStore((s) => s.equipos.length)
  return <Text style={ui.detalle}>Equipos en la tabla: {cantidad}</Text>
}

export default function Paso2mp() {
  const equipos = useEquiposStore((s) => s.equipos)
  const sumarVictoria = useEquiposStore((s) => s.sumarVictoria)

  return (
    <Pantalla titulo="Tabla de posiciones">
      <CantidadEquipos />
      <TotalPuntos />
      {equipos.map((e) => (
        <Fila key={e.id} titulo={e.nombre} detalle={`${e.puntos} pts`}>
          <Boton texto="+3" onPress={() => sumarVictoria(e.id)} />
        </Fila>
      ))}
    </Pantalla>
  )
}
