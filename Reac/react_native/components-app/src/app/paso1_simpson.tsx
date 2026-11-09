import { StyleSheet, Text, View } from 'react-native'

interface TarjetaPersonajeProps {
  nombre: string
  edad: number
  ocupacion: string
  frase: string
}

function TarjetaPersonaje({ nombre, ocupacion, edad, frase }: TarjetaPersonajeProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombrePersonaje}>{nombre}</Text>
      <Text style={styles.datoOcupacion}>{ocupacion} ({edad} años)</Text>
      <Text style={styles.datoFrase}>"{frase}"</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Integrantes de la familia Simpson</Text>

      <TarjetaPersonaje
        nombre="Homero Simpson"
        edad={39}
        ocupacion="Inspector de seguridad en la Planta Nuclear"
        frase="¡D'oh!"
      />

      <TarjetaPersonaje
        nombre="Marge Simpson"
        edad={36}
        ocupacion="Ama de casa"
        frase="Mmm... homie..."
      />

      <TarjetaPersonaje
        nombre="Bart Simpson"
        edad={10}
        ocupacion="Estudiante"
        frase="¡Ay, caramba!"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#fed41d', // Amarillo Simpson
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
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
  nombrePersonaje: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  datoOcupacion: {
    fontSize: 14,
    color: '#0d47a1',
  },
  datoFrase: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#424242',
  },
})