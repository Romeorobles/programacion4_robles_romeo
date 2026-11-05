// Paso 4 mp — ScrollView y SafeAreaView: rendimiento de los equipos
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const EQUIPOS_DEMO = [
  { id: '1',  nombre: 'Liga de Quito',    ciudad: 'Quito',     efectividad: 78, posesion: 61 },
  { id: '2',  nombre: 'Barcelona SC',     ciudad: 'Guayaquil', efectividad: 67, posesion: 58 },
  { id: '3',  nombre: 'Independiente',    ciudad: 'Sangolquí', efectividad: 70, posesion: 63 },
  { id: '4',  nombre: 'Emelec',           ciudad: 'Guayaquil', efectividad: 57, posesion: 52 },
  { id: '5',  nombre: 'Aucas',            ciudad: 'Quito',     efectividad: 48, posesion: 47 },
  { id: '6',  nombre: 'El Nacional',      ciudad: 'Quito',     efectividad: 35, posesion: 44 },
  { id: '7',  nombre: 'Universidad Católica', ciudad: 'Quito', efectividad: 55, posesion: 54 },
  { id: '8',  nombre: 'Delfín',           ciudad: 'Manta',     efectividad: 41, posesion: 46 },
  { id: '9',  nombre: 'Orense',           ciudad: 'Machala',   efectividad: 52, posesion: 49 },
  { id: '10', nombre: 'Macará',           ciudad: 'Ambato',    efectividad: 44, posesion: 48 },
  { id: '11', nombre: 'Mushuc Runa',      ciudad: 'Ambato',    efectividad: 39, posesion: 43 },
  { id: '12', nombre: 'Técnico Universitario', ciudad: 'Ambato', efectividad: 37, posesion: 45 },
]

interface BarraProps {
  porcentaje: number
  etiqueta: string
}

function Barra({ porcentaje, etiqueta }: BarraProps) {
  const color = porcentaje > 65 ? '#2e7d32'
              : porcentaje > 45 ? '#f57f17'
              : '#c62828'
  return (
    <View style={styles.barraFila}>
      <Text style={styles.barraEtiqueta}>{etiqueta}</Text>
      <View style={styles.barraFondo}>
        <View style={[styles.barraRelleno, { width: `${porcentaje}%`, backgroundColor: color }]} />
      </View>
      <Text style={[styles.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaRendimiento({ nombre, ciudad, efectividad, posesion }: typeof EQUIPOS_DEMO[0]) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.ciudad}>{ciudad}</Text>
      <Barra porcentaje={efectividad} etiqueta="EFE" />
      <Barra porcentaje={posesion} etiqueta="POS" />
    </View>
  )
}

export function Paso4mp() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Rendimiento LigaPro</Text>
        <Text style={styles.headerSub}>{EQUIPOS_DEMO.length} equipos</Text>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {EQUIPOS_DEMO.map((equipo) => (
          <TarjetaRendimiento key={equipo.id} {...equipo} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0d2a1b' },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c4030',
  },
  headerTitulo: { fontSize: 20, fontWeight: '700', color: '#e8f5e9' },
  headerSub: { fontSize: 12, color: '#81a78f', marginTop: 2 },
  scroll: { flex: 1 },
  scrollContenido: { padding: 16, gap: 10, paddingBottom: 40 },
  tarjeta: {
    backgroundColor: '#133222',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c4830',
  },
  nombre: { fontSize: 14, fontWeight: '700', color: '#e8f5e9' },
  ciudad: { fontSize: 11, color: '#81a78f', marginBottom: 2 },
  barraFila: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  barraEtiqueta: { fontSize: 11, color: '#81a78f', width: 28 },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c4830',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: { height: '100%', borderRadius: 2 },
  barraPct: { fontSize: 11, fontWeight: '600', width: 34, textAlign: 'right' },
})
