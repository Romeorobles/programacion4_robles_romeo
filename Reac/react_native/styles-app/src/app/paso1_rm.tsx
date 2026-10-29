// app/paso1_rm.tsx — función Paso1 (Edición Dimensión C-137)
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso1RM() {
  return (
    <ScrollView style={estilosPaso1.pantalla} contentContainerStyle={{ gap: 24, padding: 16 }}>

      {/* ── Columna: Multiverso de Ricks ────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flexDirection: 'column' (Consejo de Ricks)</Text>
      <View style={estilosPaso1.columna}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#0284c7' }]}>
          <Text style={estilosPaso1.textoCaja}>Rick C-137</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#0ea5e9' }]}>
          <Text style={estilosPaso1.textoCaja}>Morty Prime</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#38bdf8' }]}>
          <Text style={estilosPaso1.textoCaja}>Pickle Rick</Text>
        </View>
      </View>

      {/* ── Fila: Gadgets Multidimensionales ───────────────────── */}
      <Text style={estilosPaso1.etiqueta}>
        flexDirection: 'row' + justifyContent: 'space-between'
      </Text>
      <View style={estilosPaso1.fila}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#15803d' }]}>
          <Text style={estilosPaso1.textoCaja}>Portal Gun</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#16a34a' }]}>
          <Text style={estilosPaso1.textoCaja}>Plumbus</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#22c55e' }]}>
          <Text style={estilosPaso1.textoCaja}>Mr. Meeseeks</Text>
        </View>
      </View>

      {/* ── flex proporcional: Caos Familiar Smith ─────────────── */}
      <Text style={estilosPaso1.etiqueta}>flex proporcional: Ego 2 / 1 / 1</Text>
      <View style={estilosPaso1.filaFlex}>
        <View style={{ flex: 2, backgroundColor: '#7e22ce', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Evil Morty (flex: 2)</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#9333ea', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Summer</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#a855f7', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>Jerry</Text>
        </View>
      </View>

      {/* ── flexWrap: Variantes y Parásitos ─────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>flexWrap: 'wrap' + gap: 8 (Wubba Lubba Dub-Dub)</Text>
      <View style={estilosPaso1.rejilla}>
        {['Birdperson', 'Squanchy', 'Krombopulos', 'Noob-Noob', 'Scary Terry', 'Butter Robot'].map((nombre) => (
          <View key={nombre} style={estilosPaso1.chip}>
            <Text style={estilosPaso1.textoChip}>{nombre}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  )
}

const estilosPaso1 = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#0f172a' }, // Fondo espacial oscuro
  etiqueta: { fontSize: 12, color: '#4ade80', fontFamily: 'monospace', fontWeight: 'bold' }, // Verde portal
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
    backgroundColor: '#16a34a', // Verde portal fluido
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  textoChip: { color: '#ffffff', fontSize: 13, fontWeight: '600' },
})
