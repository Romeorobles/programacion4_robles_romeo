// Paso 2 mp — Unidades con la LigaPro: dp fijos (dorsales), '%' (efectividad) y Dimensions
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const EFECTIVIDAD = [
  { equipo: 'Liga de Quito',  pct: '85%' },
  { equipo: 'IDV',            pct: '70%' },
  { equipo: 'Barcelona SC',   pct: '55%' },
  { equipo: 'Emelec',         pct: '40%' },
] as const

export function Paso2mp() {
  const anchoPantalla = Dimensions.get('window').width

  return (
    <View style={estilosPaso2mp.pantalla}>

      {/* ── dp fijos: dorsales ──────────────────────────────────── */}
      <Text style={estilosPaso2mp.seccion}>Dorsales en dp (fijos)</Text>
      <View style={estilosPaso2mp.fila}>
        {([32, 48, 64, 80] as const).map((dp, i) => (
          <View key={dp} style={[estilosPaso2mp.camiseta, { width: dp, height: dp }]}>
            <Text style={estilosPaso2mp.etiqueta}>#{[1, 5, 9, 10][i]}</Text>
          </View>
        ))}
      </View>

      {/* ── % en width: efectividad de puntos ───────────────────── */}
      <Text style={estilosPaso2mp.seccion}>width en '%' — efectividad de puntos</Text>
      {EFECTIVIDAD.map(({ equipo, pct }) => (
        <View key={equipo} style={[estilosPaso2mp.barra, { width: pct }]}>
          <Text style={estilosPaso2mp.etiqueta}>{equipo} · {pct}</Text>
        </View>
      ))}

      {/* ── Ancho real de la pantalla ───────────────────────────── */}
      <Text style={estilosPaso2mp.seccion}>
        Ancho de la cancha (pantalla): {Math.round(anchoPantalla)} dp
      </Text>
      <View style={[estilosPaso2mp.indicador, { width: anchoPantalla * 0.6 }]}>
        <Text style={estilosPaso2mp.etiqueta}>Medio campo: 60% de {Math.round(anchoPantalla)} dp</Text>
      </View>

      {/* ── Nota: fontSize no acepta '%' ────────────────────────── */}
      <View style={estilosPaso2mp.nota}>
        <Text style={{ fontSize: 13, color: '#92400e' }}>
          fontSize y borderRadius solo aceptan números dp.{'\n'}
          Igual que el VAR: no acepta porcentajes 😅
        </Text>
      </View>

    </View>
  )
}

const estilosPaso2mp = StyleSheet.create({
  pantalla:   { flex: 1, backgroundColor: '#f0fdf4', padding: 16, gap: 12 },
  seccion:    { fontSize: 12, color: '#4b5563', fontFamily: 'monospace', marginTop: 8 },
  fila:       { flexDirection: 'row', gap: 8, alignItems: 'flex-end' },
  camiseta: {
    backgroundColor: '#b91c1c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  barra: {
    height: 32,
    backgroundColor: '#15803d',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  etiqueta:   { color: '#fff', fontSize: 11, fontWeight: '600' },
  indicador: {
    height: 40,
    backgroundColor: '#1d4ed8',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  nota: {
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#f59e0b',
  },
})
