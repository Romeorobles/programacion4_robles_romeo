// Paso 1 mp — FlatList básica con la tabla de equipos
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export type Equipo = {
  id: string
  nombre: string
  ciudad: string
  clasificado: boolean
}

export const EQUIPOS: Equipo[] = [
  { id: '1', nombre: 'Barcelona SC',      ciudad: 'Guayaquil', clasificado: true  },
  { id: '2', nombre: 'Liga de Quito',     ciudad: 'Quito',     clasificado: true  },
  { id: '3', nombre: 'Independiente DV',  ciudad: 'Sangolquí', clasificado: true  },
  { id: '4', nombre: 'Emelec',            ciudad: 'Guayaquil', clasificado: false },
  { id: '5', nombre: 'Aucas',             ciudad: 'Quito',     clasificado: true  },
  { id: '6', nombre: 'Deportivo Cuenca',  ciudad: 'Cuenca',    clasificado: false },
  { id: '7', nombre: 'Universidad Católica', ciudad: 'Quito',  clasificado: true  },
  { id: '8', nombre: 'Orense',            ciudad: 'Machala',   clasificado: false },
]

export function FilaEquipo({ equipo }: { equipo: Equipo }) {
  return (
    <View style={styles1mp.fila}>
      <View style={styles1mp.info}>
        <Text style={styles1mp.nombre}>{equipo.nombre}</Text>
        <Text style={styles1mp.ciudad}>{equipo.ciudad}</Text>
      </View>
      <View
        style={[
          styles1mp.estado,
          equipo.clasificado ? styles1mp.estadoClasificado : styles1mp.estadoEliminado,
        ]}
      >
        <Text style={styles1mp.textoEstado}>
          {equipo.clasificado ? 'CLASIFICADO' : 'ELIMINADO'}
        </Text>
      </View>
    </View>
  )
}

export function Paso1mp() {
  return (
    <SafeAreaView style={styles1mp.contenedor}>
      <Text style={styles1mp.titulo}>Equipos de la LigaPro</Text>
      <FlatList<Equipo>
        data={EQUIPOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaEquipo equipo={item} />}
      />
    </SafeAreaView>
  )
}

const styles1mp = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f8e9' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#2e7d32',
    color: '#fff',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  ciudad: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoClasificado: { backgroundColor: '#e8f5e9' },
  estadoEliminado: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})
