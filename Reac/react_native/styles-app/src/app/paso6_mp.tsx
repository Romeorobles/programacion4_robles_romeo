// Paso 6 mp — Safe area con la LigaPro en vivo (SafeAreaView + useSafeAreaInsets)
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const EN_VIVO = [
  { id: '1', partido: 'Liga de Quito 2 - 0 Aucas',        minuto: "67'" },
  { id: '2', partido: 'Barcelona SC 1 - 1 Emelec',        minuto: "45+2'" },
  { id: '3', partido: 'IDV 3 - 1 U. Católica',            minuto: "80'" },
  { id: '4', partido: 'Dep. Cuenca 0 - 0 Orense',         minuto: "12'" },
  { id: '5', partido: 'Macará 1 - 2 Mushuc Runa',         minuto: "55'" },
]

export function Paso6mp() {
  const insets = useSafeAreaInsets()

  return (
    // SafeAreaView aplica padding automático en todos los lados seguros
    <SafeAreaView style={{ flex: 1, backgroundColor: '#052e16' }}>

      {/* Barra de cabecera pegada al área segura superior */}
      <View style={estilosPaso6mp.appBar}>
        <Text style={estilosPaso6mp.appBarTitulo}>LigaPro en vivo</Text>
        <Text style={estilosPaso6mp.appBarMeta}>{EN_VIVO.length} partidos</Text>
      </View>

      {/* Contenido scrolleable */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, gap: 10 }}>
        {EN_VIVO.map((p) => (
          <View key={p.id} style={estilosPaso6mp.fila}>
            <View style={estilosPaso6mp.punto} />
            <Text style={estilosPaso6mp.partido}>{p.partido}</Text>
            <Text style={estilosPaso6mp.minuto}>{p.minuto}</Text>
          </View>
        ))}

        {/* Panel de depuración: insets actuales */}
        <View style={estilosPaso6mp.debug}>
          <Text style={estilosPaso6mp.debugTitulo}>Safe Area Insets (dp)</Text>
          <Text style={estilosPaso6mp.debugLinea}>top:    {insets.top}</Text>
          <Text style={estilosPaso6mp.debugLinea}>bottom: {insets.bottom}</Text>
          <Text style={estilosPaso6mp.debugLinea}>left:   {insets.left}</Text>
          <Text style={estilosPaso6mp.debugLinea}>right:  {insets.right}</Text>
        </View>
      </ScrollView>

      {/* Barra inferior — respeta el inset inferior manualmente */}
      <View style={[estilosPaso6mp.barraInferior, { paddingBottom: insets.bottom + 8 }]}>
        <Text style={estilosPaso6mp.barraInferiorTexto}>Marcadores actualizados hace 30 segundos</Text>
      </View>

    </SafeAreaView>
  )
}

const estilosPaso6mp = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#14532d',
    borderBottomWidth: 1,
    borderBottomColor: '#166534',
  },
  appBarTitulo: { fontSize: 18, fontWeight: '700', color: '#ecfdf5' },
  appBarMeta:   { fontSize: 13, color: '#a7f3d0' },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#14532d',
    borderRadius: 8,
    padding: 12,
    gap: 10,
    borderWidth: 1,
    borderColor: '#166534',
  },
  punto: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#ef4444' },
  partido: { flex: 1, fontSize: 14, color: '#ecfdf5', fontWeight: '500' },
  minuto:  { fontSize: 12, color: '#facc15', fontWeight: '700' },
  debug: {
    backgroundColor: '#0f3d22',
    borderRadius: 8,
    padding: 12,
    gap: 2,
    marginTop: 8,
  },
  debugTitulo: { fontSize: 12, color: '#facc15', fontWeight: '600', marginBottom: 4 },
  debugLinea:  { fontSize: 12, color: '#a7f3d0', fontFamily: 'monospace' },
  barraInferior: {
    backgroundColor: '#14532d',
    paddingTop: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#166534',
    alignItems: 'center',
  },
  barraInferiorTexto: { fontSize: 12, color: '#a7f3d0' },
})
