import type { Personaje } from '@/app/paso1_twd'
import { StyleSheet, Text, View } from 'react-native'

export function Paso1FilaPersonaje({ personaje }: { personaje: Personaje }) {
  return (
    <View style={styles1twd.fila}>
      <View style={styles1twd.info}>
        <Text style={styles1twd.nombre}>{personaje.nombre}</Text>
        <Text style={styles1twd.grupo}>{personaje.grupo}</Text>
      </View>
      <View
        style={[
          styles1twd.estado,
          personaje.vivo ? styles1twd.estadoVivo : styles1twd.estadoMuerto,
        ]}
      >
        <Text style={styles1twd.textoEstado}>
          {personaje.vivo ? 'VIVO' : 'MUERTO'}
        </Text>
      </View>
    </View>
  )
}

const styles1twd = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2b2b2b',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#f5f5f5' },
  grupo: { fontSize: 12, color: '#aaa', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoVivo: { backgroundColor: '#a5d6a7' },
  estadoMuerto: { backgroundColor: '#ef9a9a' },
  textoEstado: { fontSize: 11, fontWeight: '700', color: '#1a1a1a' },
})
