// Paso 4 mp — Hooks nativos de RN: grid de equipos según dimensiones y tema
import { StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native'

export default function Paso4mp() {
  const { width, height, scale } = useWindowDimensions()
  const esquema = useColorScheme()   // 'light' | 'dark' | null

  const colores = {
    fondo:   esquema === 'dark' ? '#0d2a1b' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a3a2a' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#2d503e' : '#e0e0e0',
  }

  // Layout adaptativo: 1 columna en pantallas angostas, 2 en anchas
  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const equipos = [
    { nombre: 'Liga de Quito', ciudad: 'Quito',     estado: 'clasificado' },
    { nombre: 'Barcelona SC',  ciudad: 'Guayaquil', estado: 'clasificado' },
    { nombre: 'Emelec',        ciudad: 'Guayaquil', estado: 'eliminado' },
    { nombre: 'Aucas',         ciudad: 'Quito',     estado: 'clasificado' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>Equipos de la LigaPro</Text>

      <View style={[styles.tarjeta, { backgroundColor: colores.tarjeta, borderColor: colores.borde, width: '100%' }]}>
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      <View style={styles.grid}>
        {equipos.map(equipo => (
          <View
            key={equipo.nombre}
            style={[styles.tarjeta, { backgroundColor: colores.tarjeta, borderColor: colores.borde, width: anchoTarjeta }]}
          >
            <Text style={[styles.nombre, { color: colores.texto }]}>{equipo.nombre}</Text>
            <Text style={[styles.ciudad, { color: colores.detalle }]}>{equipo.ciudad}</Text>
            <Text style={[styles.estado, { color: equipo.estado === 'clasificado' ? '#2e7d32' : '#c62828' }]}>
              {equipo.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, padding: 24, paddingTop: 60, gap: 12 },
  titulo: { fontSize: 20, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  tarjeta: { borderWidth: 1, borderRadius: 10, padding: 14, gap: 4 },
  etiqueta: { fontSize: 12 },
  nombre: { fontSize: 15, fontWeight: '600' },
  ciudad: { fontSize: 12 },
  estado: { fontSize: 12, fontWeight: '600' },
})
