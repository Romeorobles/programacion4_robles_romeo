// Paso 2 mp — FlatList avanzada con equipos: separadores, vacío, refresh, paginación
import { Paso2ListaVaciaMp } from '@/components/paso2ListaVaciaMp'
import { Separador } from '@/components/paso2Separador'
import { useCallback, useState } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { EQUIPOS, FilaEquipo, type Equipo } from './paso1_mp'

// Simula una página extra de equipos (llegará del backend)
const PAGINA_2: Equipo[] = [
  { id: '9',  nombre: 'Mushuc Runa', ciudad: 'Ambato',  clasificado: false },
  { id: '10', nombre: 'Macará',      ciudad: 'Ambato',  clasificado: true  },
]

export function Paso2mp() {
  const [datos, setDatos] = useState<Equipo[]>(EQUIPOS)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    // Simula llamada a la API (1 segundo)
    setTimeout(() => {
      setDatos(EQUIPOS) // restaura la lista original
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles2mp.contenedor}>
      <Text style={styles2mp.titulo}>Equipos de la LigaPro · p.{paginaActual}</Text>
      <FlatList<Equipo>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaEquipo equipo={item} />}
        ItemSeparatorComponent={Separador}
        ListEmptyComponent={<Paso2ListaVaciaMp />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#2e7d32" />
          ) : undefined
        }
      />
    </SafeAreaView>
  )
}

const styles2mp = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f8e9' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#2e7d32',
    color: '#fff',
  },
})
