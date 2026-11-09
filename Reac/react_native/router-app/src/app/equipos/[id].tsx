// app/equipos/[id].tsx — mp: ruta dinámica con useLocalSearchParams
import { Link, Stack, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { EQUIPOS } from '@/constants/equipos'

export default function DetalleEquipo() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const equipo = EQUIPOS.find((e) => e.id === id)

  if (!equipo) {
    return (
      <View style={styles.contenedor}>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <Text style={styles.titulo}>El equipo {id} no existe</Text>
      </View>
    )
  }

  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: equipo.nombre }} />
      <Text style={styles.titulo}>{equipo.nombre}</Text>
      <Text style={styles.dato}>Ciudad: {equipo.ciudad}</Text>
      <Text style={styles.dato}>Estadio: {equipo.estadio}</Text>
      <Text style={styles.dato}>Puntos: {equipo.puntos}</Text>
      <Link href="/equipos" style={styles.enlace}>Volver a la lista</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, padding: 24, gap: 8, backgroundColor: '#f0f4f8' },
  titulo: { fontSize: 22, fontWeight: '700', color: '#1a237e' },
  dato: { fontSize: 15, color: '#333' },
  enlace: { marginTop: 12, fontSize: 14, color: '#1565c0', fontWeight: '600' },
})
