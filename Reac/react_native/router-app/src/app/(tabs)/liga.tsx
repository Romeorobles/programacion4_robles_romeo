// app/(tabs)/liga.tsx — mp: pestaña LigaPro con Link declarativo
import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { EQUIPOS } from '@/constants/equipos'

export default function TabLiga() {
  const lider = EQUIPOS[0]

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>LigaPro</Text>
      <Text style={styles.dato}>{EQUIPOS.length} equipos registrados</Text>
      {lider && <Text style={styles.dato}>Líder: {lider.nombre} ({lider.puntos} pts)</Text>}
      <Link href="/equipos" style={styles.enlace}>Ver equipos</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, padding: 24, gap: 8, backgroundColor: '#f0f4f8' },
  titulo: { fontSize: 22, fontWeight: '700', color: '#1a237e' },
  dato: { fontSize: 15, color: '#333' },
  enlace: { marginTop: 12, fontSize: 15, color: '#1565c0', fontWeight: '600' },
})
