// mp paso 4 — Varios stores: equipos y hincha
import { Text } from 'react-native'
import { Boton, Fila, Pantalla, ui } from '@/components/ligapro-ui'
import { useEquiposStore } from '@/stores/equipos-store'
import { useHinchaStore } from '@/stores/hincha-store'

export default function Paso4mp() {
  const equipos = useEquiposStore((s) => s.equipos)
  const eliminar = useEquiposStore((s) => s.eliminar)
  const { hincha, entrar, salir } = useHinchaStore()

  return (
    <Pantalla titulo="Zona de hinchas">
      <Text style={ui.detalle}>{hincha ? `Hola, ${hincha}` : 'Entra para administrar los equipos'}</Text>
      {hincha ? <Boton rojo texto="Salir" onPress={salir} /> : <Boton texto="Entrar" onPress={() => entrar('Romeo')} />}
      {equipos.map((e) => (
        <Fila key={e.id} titulo={e.nombre} detalle={`${e.puntos} pts`}>
          {hincha && <Boton rojo texto="Eliminar" onPress={() => eliminar(e.id)} />}
        </Fila>
      ))}
    </Pantalla>
  )
}
