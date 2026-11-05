// mp — Paso 1: useState (Estadística de Equipos de Fútbol)
// const [valor, setValor] = useState<T>(valorInicial)
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Paso1() {
  const [goles, setGoles] = useState<number>(0)
  const [clasificado, setClasificado] = useState<boolean>(false)

  function anotarGol() {
    if (clasificado) return
    const nuevoGol = goles + 1
    setGoles(nuevoGol)
    // Con 3 goles el equipo clasifica a la siguiente fase
    if (nuevoGol >= 3) {
      setClasificado(true)
    }
  }

  function reiniciar() {
    setGoles(0)
    setClasificado(false)
  }

  const estadoTexto = clasificado
    ? '✓ Liga de Quito clasificó a semifinales'
    : `Goles: ${goles} de 3 necesarios`

  const colorEstado = clasificado ? '#2e7d32' : '#c62828'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Partido de Vuelta — Cuartos</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado }]}>
        <Text style={[styles.estado, { color: colorEstado }]}>
          {estadoTexto}
        </Text>
        <Text style={styles.detalle}>Liga de Quito vs Emelec · Rodrigo Paz Delgado</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          clasificado ? styles.botonDeshabilitado : styles.botonActivo,
          pressed && !clasificado && { opacity: 0.75 },
        ]}
        onPress={anotarGol}
        disabled={clasificado}
      >
        <Text style={styles.textoBoton}>
          {clasificado ? 'Clasificado' : 'Anotar gol'}
        </Text>
      </Pressable>

      <Pressable style={styles.botonSecundario} onPress={reiniciar}>
        <Text style={styles.textoSecundario}>Reiniciar partido</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#fff',
    gap: 6,
  },
  estado: {
    fontSize: 15,
    fontWeight: '600',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#2e7d32',
  },
  botonDeshabilitado: {
    backgroundColor: '#a5d6a7',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#2e7d32',
    fontSize: 14,
  },
})
