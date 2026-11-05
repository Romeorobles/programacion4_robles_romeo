// mp — Paso 2: useEffect con setInterval (Estadística de Equipos de Fútbol)
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

type EstadoJugada = 'atacando' | 'gol' | 'fallado' | 'detenido'

export default function Paso2() {
  const [minuto, setMinuto] = useState<number>(0)
  const [estado, setEstado] = useState<EstadoJugada>('detenido')
  const [activo, setActivo] = useState<boolean>(false)
  const [goles, setGoles] = useState<number>(0)

  useEffect(() => {
    if (!activo) return   // no arrancar el intervalo si el partido está detenido

    const intervalo = setInterval(() => {
      setEstado('atacando')

      // Simula una jugada de ataque: 25 % de probabilidad de gol
      setTimeout(() => {
        const esGol = Math.random() < 0.25
        if (esGol) {
          setGoles(g => g + 1)
          setEstado('gol')
        } else {
          setEstado('fallado')
        }
        setMinuto(m => Math.min(m + 5, 90))
      }, 400)
    }, 2000)

    // ← función de limpieza: cancela el intervalo
    return () => clearInterval(intervalo)
  }, [activo])   // se re-ejecuta cuando 'activo' cambia

  const colorEstado: Record<EstadoJugada, string> = {
    atacando: '#1565c0',
    gol:      '#2e7d32',
    fallado:  '#c62828',
    detenido: '#757575',
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Partido en vivo — Barcelona SC</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
        <Text style={styles.marcador}>{goles} goles</Text>
        <Text style={styles.minutos}>Minuto: {minuto}'</Text>
        <Text style={styles.detalle}>Barcelona SC vs Aucas · Estadio Monumental</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Pausar partido' : 'Iniciar partido'}
        </Text>
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
  etiqueta: {
    fontSize: 15,
    fontWeight: '700',
  },
  marcador: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  minutos: {
    fontSize: 14,
    color: '#444',
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
  botonIniciar: {
    backgroundColor: '#2e7d32',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
})
