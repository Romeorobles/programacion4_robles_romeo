// Paso 3 mp — Grid responsivo con la tabla de la LigaPro (useWindowDimensions)
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

type Equipo = {
  id: string
  nombre: string
  ciudad: string
  zona: 'libertadores' | 'sudamericana' | 'descenso'
  puntos: number
}

const EQUIPOS: Equipo[] = [
  { id: '1', nombre: 'Liga de Quito',   ciudad: 'Quito',     zona: 'libertadores', puntos: 58 },
  { id: '2', nombre: 'IDV',             ciudad: 'Sangolquí', zona: 'libertadores', puntos: 54 },
  { id: '3', nombre: 'Barcelona SC',    ciudad: 'Guayaquil', zona: 'libertadores', puntos: 49 },
  { id: '4', nombre: 'Emelec',          ciudad: 'Guayaquil', zona: 'sudamericana', puntos: 44 },
  { id: '5', nombre: 'Aucas',           ciudad: 'Quito',     zona: 'sudamericana', puntos: 41 },
  { id: '6', nombre: 'U. Católica',     ciudad: 'Quito',     zona: 'sudamericana', puntos: 38 },
  { id: '7', nombre: 'Mushuc Runa',     ciudad: 'Ambato',    zona: 'descenso',     puntos: 22 },
  { id: '8', nombre: 'El Nacional',     ciudad: 'Quito',     zona: 'descenso',     puntos: 19 },
]

const PUNTOS_MAXIMOS = 60

const COLOR_ZONA: Record<Equipo['zona'], string> = {
  libertadores: '#1d4ed8',
  sudamericana: '#15803d',
  descenso:     '#b91c1c',
}

export function Paso3mp() {
  const { width } = useWindowDimensions()

  // Grid responsivo: 2 columnas en teléfono (< 600dp), 4 en tablet (≥ 600dp)
  const columnas = width >= 600 ? 4 : 2
  const GAP = 12
  const anchoTarjeta = (width - 32 - GAP * (columnas - 1)) / columnas

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f0fdf4' }}
      contentContainerStyle={{ padding: 16, gap: GAP }}
    >
      <Text style={estilosPaso3mp.cabecera}>
        Tabla LigaPro · {Math.round(width)}dp · {columnas} col
      </Text>

      <View style={[estilosPaso3mp.rejilla, { gap: GAP }]}>
        {EQUIPOS.map((equipo, i) => (
          <TarjetaEquipo key={equipo.id} equipo={equipo} posicion={i + 1} ancho={anchoTarjeta} />
        ))}
      </View>
    </ScrollView>
  )
}

function TarjetaEquipo({
  equipo,
  posicion,
  ancho,
}: {
  equipo: Equipo
  posicion: number
  ancho: number
}) {
  const colorZona = COLOR_ZONA[equipo.zona]
  const porcentaje = Math.round((equipo.puntos / PUNTOS_MAXIMOS) * 100)

  return (
    <View style={[estilosPaso3mp.tarjeta, { width: ancho }]}>
      <View style={estilosPaso3mp.filaSuperior}>
        <Text style={estilosPaso3mp.posicion}>{posicion}°</Text>
        <View style={[estilosPaso3mp.indicadorZona, { backgroundColor: colorZona }]} />
      </View>

      <Text style={estilosPaso3mp.nombre} numberOfLines={1}>{equipo.nombre}</Text>
      <Text style={estilosPaso3mp.ciudad}>{equipo.ciudad}</Text>

      {/* Barra de puntos */}
      <View style={estilosPaso3mp.barraFondo}>
        <View style={[estilosPaso3mp.barraRelleno, { width: `${porcentaje}%`, backgroundColor: colorZona }]} />
      </View>
      <Text style={estilosPaso3mp.puntos}>{equipo.puntos} pts</Text>
    </View>
  )
}

const estilosPaso3mp = StyleSheet.create({
  cabecera: {
    fontSize: 13,
    color: '#4b5563',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#d1fae5',
  },
  filaSuperior: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  posicion:      { fontSize: 12, fontWeight: '700', color: '#6b7280' },
  indicadorZona: { width: 8, height: 8, borderRadius: 4 },
  nombre:        { fontSize: 13, fontWeight: '700', color: '#14532d' },
  ciudad:        { fontSize: 11, color: '#6b7280' },
  barraFondo: {
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 3,
    marginTop: 6,
    overflow: 'hidden',
  },
  barraRelleno: { height: 6, borderRadius: 3 },
  puntos:       { fontSize: 11, color: '#6b7280' },
})
