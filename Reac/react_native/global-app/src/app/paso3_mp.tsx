// mp paso 3 — Acción asíncrona con estado de carga
import { useEffect } from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { Boton, Fila, Pantalla, ui } from '@/components/ligapro-ui'
import { useEquiposStore } from '@/stores/equipos-store'

export default function Paso3mp() {
  const { equipos, cargando, error, cargarEquipos } = useEquiposStore()

  useEffect(() => {
    cargarEquipos()
  }, [cargarEquipos])

  return (
    <Pantalla titulo="Cargar la tabla">
      <Boton texto="Recargar" onPress={cargarEquipos} />
      {error && <Text style={ui.detalle}>{error}</Text>}
      {cargando ? (
        <ActivityIndicator color="#2e7d32" />
      ) : (
        equipos.map((e) => <Fila key={e.id} titulo={e.nombre} detalle={`${e.puntos} pts`} />)
      )}
    </Pantalla>
  )
}
