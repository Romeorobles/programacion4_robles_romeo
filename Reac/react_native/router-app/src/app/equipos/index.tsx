// app/equipos/index.tsx — mp: lista de equipos, navega al detalle con router.push
import { Stack, router } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { EQUIPOS } from '@/constants/equipos'

export default function ListaEquipos() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Equipos' }} />
      <FlatList
        data={EQUIPOS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.tarjeta, pressed && { opacity: 0.75 }]}
            onPress={() => router.push(`/equipos/${item.id}`)}
          >
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.dato}>{item.ciudad} · {item.puntos} puntos</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  lista: { padding: 16, gap: 10 },
  tarjeta: { backgroundColor: '#fff', borderRadius: 10, padding: 14, gap: 4, elevation: 2 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  dato: { fontSize: 12, color: '#546e7a' },
})
