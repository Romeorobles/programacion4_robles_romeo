// mp — Paso 1 (versión simpson): tarjetas de goleadores
import { StyleSheet, Text, View } from 'react-native'

interface TarjetaJugadorProps {
  nombre: string
  edad: number
  posicion: string
  goles: number
}

function TarjetaJugador({ nombre, posicion, edad, goles }: TarjetaJugadorProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreJugador}>{nombre}</Text>
      <Text style={styles.datoPosicion}>{posicion} ({edad} años)</Text>
      <Text style={styles.datoGoles}>⚽ {goles} goles en la temporada</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Goleadores de la LigaPro</Text>

      <TarjetaJugador
        nombre="Alex Arce"
        edad={30}
        posicion="Delantero · Liga de Quito"
        goles={18}
      />

      <TarjetaJugador
        nombre="Janner Corozo"
        edad={30}
        posicion="Extremo · Barcelona SC"
        goles={11}
      />

      <TarjetaJugador
        nombre="Michael Hoyos"
        edad={33}
        posicion="Mediocampista · Independiente del Valle"
        goles={9}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#43a047', // Verde cancha
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreJugador: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  datoPosicion: {
    fontSize: 14,
    color: '#1b5e20',
  },
  datoGoles: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#424242',
  },
})
