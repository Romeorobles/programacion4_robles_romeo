// Paso 1 mp — Flexbox con equipos de la LigaPro: column, row, flex proporcional, wrap
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso1mp() {
  return (
    <ScrollView style={estilosPaso1mp.pantalla} contentContainerStyle={{ gap: 24, padding: 16 }}>

      {/* ── Columna: podio del campeonato ───────────────────────── */}
      <Text style={estilosPaso1mp.etiqueta}>flexDirection: 'column' (Podio LigaPro)</Text>
      <View style={estilosPaso1mp.columna}>
        <View style={[estilosPaso1mp.caja, { backgroundColor: '#b45309' }]}>
          <Text style={estilosPaso1mp.textoCaja}>1° Liga de Quito</Text>
        </View>
        <View style={[estilosPaso1mp.caja, { backgroundColor: '#d97706' }]}>
          <Text style={estilosPaso1mp.textoCaja}>2° Independiente del Valle</Text>
        </View>
        <View style={[estilosPaso1mp.caja, { backgroundColor: '#f59e0b' }]}>
          <Text style={estilosPaso1mp.textoCaja}>3° Barcelona SC</Text>
        </View>
      </View>

      {/* ── Fila: marcador del partido ──────────────────────────── */}
      <Text style={estilosPaso1mp.etiqueta}>
        flexDirection: 'row' + justifyContent: 'space-between'
      </Text>
      <View style={estilosPaso1mp.fila}>
        <View style={[estilosPaso1mp.caja, { backgroundColor: '#1d4ed8' }]}>
          <Text style={estilosPaso1mp.textoCaja}>Emelec</Text>
        </View>
        <View style={[estilosPaso1mp.caja, { backgroundColor: '#374151' }]}>
          <Text style={estilosPaso1mp.textoCaja}>2 - 1</Text>
        </View>
        <View style={[estilosPaso1mp.caja, { backgroundColor: '#ca8a04' }]}>
          <Text style={estilosPaso1mp.textoCaja}>Barcelona</Text>
        </View>
      </View>

      {/* ── flex proporcional: posesión del balón ───────────────── */}
      <Text style={estilosPaso1mp.etiqueta}>flex proporcional: posesión 2 / 1 / 1</Text>
      <View style={estilosPaso1mp.filaFlex}>
        <View style={{ flex: 2, backgroundColor: '#15803d', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1mp.textoCaja}>Local (flex: 2)</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#16a34a', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1mp.textoCaja}>Visita</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#22c55e', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1mp.textoCaja}>Disputa</Text>
        </View>
      </View>

      {/* ── flexWrap: resto de equipos ──────────────────────────── */}
      <Text style={estilosPaso1mp.etiqueta}>flexWrap: 'wrap' + gap: 8 (Resto de la tabla)</Text>
      <View style={estilosPaso1mp.rejilla}>
        {['Aucas', 'U. Católica', 'Dep. Cuenca', 'Orense', 'Mushuc Runa', 'Macará', 'Delfín', 'El Nacional'].map((nombre) => (
          <View key={nombre} style={estilosPaso1mp.chip}>
            <Text style={estilosPaso1mp.textoChip}>{nombre}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  )
}

const estilosPaso1mp = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#052e16' }, // Verde cancha oscuro
  etiqueta: { fontSize: 12, color: '#facc15', fontFamily: 'monospace', fontWeight: 'bold' },
  columna: {
    flexDirection: 'column',
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filaFlex: {
    flexDirection: 'row',
    gap: 6,
  },
  caja: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoCaja: { color: '#ffffff', fontWeight: '700', fontSize: 13 },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#166534',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  textoChip: { color: '#ffffff', fontSize: 13, fontWeight: '600' },
})
