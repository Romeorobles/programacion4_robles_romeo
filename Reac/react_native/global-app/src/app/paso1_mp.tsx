// mp paso 1 — Store básico: agregar y eliminar equipos
import { useState } from 'react'
import { TextInput } from 'react-native'
import { Boton, Fila, Pantalla, ui } from '@/components/ligapro-ui'
import { useEquiposStore } from '@/stores/equipos-store'

export default function Paso1mp() {
  const { equipos, agregar, eliminar } = useEquiposStore()
  const [nombre, setNombre] = useState('')

  const guardar = () => {
    if (!nombre.trim()) return
    agregar(nombre.trim())
    setNombre('')
  }

  return (
    <Pantalla titulo="Equipos de la LigaPro">
      <TextInput style={ui.input} value={nombre} onChangeText={setNombre} placeholder="Nombre del equipo" />
      <Boton texto="Agregar equipo" onPress={guardar} />
      {equipos.map((e) => (
        <Fila key={e.id} titulo={e.nombre} detalle={`${e.puntos} pts`}>
          <Boton rojo texto="Eliminar" onPress={() => eliminar(e.id)} />
        </Fila>
      ))}
    </Pantalla>
  )
}
