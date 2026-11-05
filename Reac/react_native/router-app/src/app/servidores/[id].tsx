// app/servidores/[id].tsx
import { Stack, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const SERVIDORES: Record<string, { nombre: string; ip: string; estado: string }> = {
  '1': { nombre: 'web-01',      ip: '10.0.2.10', estado: 'activo'    },
  '2': { nombre: 'db-primary',  ip: '10.0.2.20', estado: 'activo'    },
  '3': { nombre: 'cache-01',    ip: '10.0.2.30', estado: 'degradado' },
  '4': { nombre: 'worker-01',   ip: '10.0.2.40', estado: 'error'     },
  '5': { nombre: 'storage-nas', ip: '10.0.2.50', estado: 'activo'    },
}

export default function DetalleServidor() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const servidor = SERVIDORES[id]

  if (!servidor) {
    return (
      <View style={styles.contenedor}>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <Text style={styles.titulo}>Servidor {id} no existe</Text>
      </View>
    )
  }

  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: servidor.nombre }} />
      <Text style={styles.titulo}>{servidor.nombre}</Text>
      <Text style={styles.dato}>IP: {servidor.ip}</Text>
      <Text style={styles.dato}>Estado: {servidor.estado}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, padding: 24, gap: 8, backgroundColor: '#f0f4f8' },
  titulo: { fontSize: 22, fontWeight: '700', color: '#1a237e' },
  dato: { fontSize: 15, color: '#333' },
})
