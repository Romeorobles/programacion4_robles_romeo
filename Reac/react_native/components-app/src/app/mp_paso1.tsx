// mp — Paso 1: Props tipadas (Estadística de Equipos de Fútbol)
import { StyleSheet, Text, View } from 'react-native'

interface TarjetaEquipoProps {
  nombre: string
  ciudad: string
  estadio: string
  puntos: number
  entrenador?: string
}

function TarjetaEquipo({ nombre, ciudad, estadio, puntos, entrenador }: TarjetaEquipoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreEquipo}>{nombre}</Text>
      <Text style={styles.datoPuntos}>{puntos} pts</Text>
      <Text style={styles.datoEstadio}>{ciudad} · {estadio}</Text>
      <Text style={styles.datoEntrenador}>{entrenador ?? 'Sin entrenador'}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Equipos de la LigaPro</Text>
      <TarjetaEquipo
        nombre="Liga de Quito"
        ciudad="Quito"
        estadio="Rodrigo Paz Delgado"
        puntos={64}
        entrenador="Tiago Nunes"
      />
      <TarjetaEquipo
        nombre="Barcelona SC"
        ciudad="Guayaquil"
        estadio="Monumental"
        puntos={55}
        entrenador="Segundo Castillo"
      />
      <TarjetaEquipo
        nombre="Aucas"
        ciudad="Quito"
        estadio="Gonzalo Pozo Ripalda"
        puntos={38}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1b5e20',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreEquipo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoPuntos: {
    fontSize: 13,
    color: '#2e7d32',
    fontFamily: 'monospace',
  },
  datoEstadio: {
    fontSize: 12,
    color: '#757575',
  },
  datoEntrenador: {
    fontSize: 12,
    color: '#757575',
  },
})
