// mp — Paso 4: Hooks nativos de RN (Estadística de Equipos de Fútbol)
import { useWindowDimensions, useColorScheme } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export default function Paso4() {
  const { width, height, scale } = useWindowDimensions()
  const esquema = useColorScheme()   // 'light' | 'dark' | null

  // Paleta dinámica según el tema del sistema
  const colores = {
    fondo:   esquema === 'dark' ? '#0b2015' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#12301f' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#1c4a30' : '#e0e0e0',
  }

  // Layout adaptativo: 1 columna en pantallas angostas, 2 en anchas
  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const equipos = [
    { nombre: 'Liga de Quito',  puntos: 64, racha: 'invicto' },
    { nombre: 'IDV',            puntos: 60, racha: 'invicto' },
    { nombre: 'Barcelona SC',   puntos: 55, racha: 'perdiendo' },
    { nombre: 'Emelec',         puntos: 47, racha: 'invicto' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Tabla de la LigaPro
      </Text>

      {/* Información de pantalla */}
      <View style={[styles.tarjeta, {
        backgroundColor: colores.tarjeta,
        borderColor: colores.borde,
        width: '100%',
      }]}>
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      {/* Grid de equipos con columnas adaptativas */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {equipos.map(eq => (
          <View
            key={eq.nombre}
            style={[styles.tarjeta, {
              backgroundColor: colores.tarjeta,
              borderColor: colores.borde,
              width: anchoTarjeta,
            }]}
          >
            <Text style={[styles.nombreEquipo, { color: colores.texto }]}>
              {eq.nombre}
            </Text>
            <Text style={[styles.puntosEquipo, { color: colores.detalle }]}>
              {eq.puntos} pts
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: eq.racha === 'invicto' ? '#2e7d32' : '#c62828',
            }}>
              {eq.racha.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>

      {/* Nota sobre useSafeAreaInsets */}
      <View style={[styles.nota, { borderColor: colores.borde }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 useSafeAreaInsets() — disponible desde react-native-safe-area-context.
          Expone {'{'}top, bottom, left, right{'}'} para posicionar elementos
          respetando el notch y la barra de inicio.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    gap: 12,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
  },
  tarjeta: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    gap: 4,
  },
  etiqueta: {
    fontSize: 12,
  },
  nombreEquipo: {
    fontSize: 15,
    fontWeight: '700',
  },
  puntosEquipo: {
    fontSize: 12,
    fontFamily: 'monospace',
  },
  nota: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 12,
  },
  notaTexto: {
    fontSize: 12,
    lineHeight: 18,
  },
})
