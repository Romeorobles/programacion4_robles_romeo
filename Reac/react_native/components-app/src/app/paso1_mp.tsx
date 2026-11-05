// Paso 1 mp — Props tipadas: tarjeta de equipo LigaPro
import { StyleSheet, Text, View } from 'react-native'

interface TarjetaEquipoProps {
  nombre: string
  ciudad: string
  estadio: string
  puntos: number
  hinchada?: string
}

function TarjetaEquipo({ nombre, ciudad, estadio, puntos, hinchada }: TarjetaEquipoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreEquipo}>{nombre}</Text>
      <Text style={styles.datoPuntos}>{puntos} puntos</Text>
      <Text style={styles.dato}>{ciudad} · {estadio}</Text>
      <Text style={styles.dato}>{hinchada ?? 'Sin apodo registrado'}</Text>
    </View>
  )
}

export function Paso1mp() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Equipos de la LigaPro</Text>
      <TarjetaEquipo
        nombre="Liga de Quito"
        ciudad="Quito"
        estadio="Rodrigo Paz Delgado"
        puntos={64}
        hinchada="Albos"
      />
      <TarjetaEquipo
        nombre="Barcelona SC"
        ciudad="Guayaquil"
        estadio="Monumental"
        puntos={55}
        hinchada="Toreros"
      />
      <TarjetaEquipo
        nombre="Aucas"
        ciudad="Quito"
        estadio="Gonzalo Pozo Ripalda"
        puntos={40}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: '#f0f4f8', padding: 20, paddingTop: 60, gap: 12 },
  encabezado: { fontSize: 20, fontWeight: '700', color: '#1a237e', marginBottom: 4 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    elevation: 2,
  },
  nombreEquipo: { fontSize: 16, fontWeight: '600', color: '#1a1a1a' },
  datoPuntos: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
  dato: { fontSize: 12, color: '#757575' },
})
