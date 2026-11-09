import { StyleSheet, Text, View } from 'react-native'

export function Paso2ListaVaciaMp() {
  return (
    <View style={styles2mp.vacio}>
      <Text style={styles2mp.vacioTexto}>Sin equipos registrados</Text>
      <Text style={styles2mp.vacioSub}>Agrega uno con el botón +</Text>
    </View>
  )
}

const styles2mp = StyleSheet.create({
  vacio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  vacioTexto: { fontSize: 16, fontWeight: '600', color: '#555' },
  vacioSub: { fontSize: 13, color: '#999', marginTop: 6 },
})
