// Paso 2 mp — useEffect: partido en vivo con setInterval y limpieza
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoPartido = 'sin iniciar' | 'en juego' | 'pausado' | 'gol' | 'finalizado'

export default function Paso2mp() {
  const [minuto, setMinuto] = useState<number>(0)
  const [goles, setGoles] = useState<number>(0)
  const [estado, setEstado] = useState<EstadoPartido>('sin iniciar')
  const [activo, setActivo] = useState<boolean>(false)

  useEffect(() => {
    if (!activo) return   // no arrancar el intervalo si el partido está detenido

    const intervalo = setInterval(() => {
      setMinuto(m => Math.min(m + 5, 90))
      // 20 % de probabilidad de gol en cada tramo de 5 minutos
      if (Math.random() < 0.2) {
        setGoles(g => g + 1)
        setEstado('gol')
      } else {
        setEstado('en juego')
      }
    }, 1000)

    // función de limpieza: cancela el intervalo
    return () => clearInterval(intervalo)
  }, [activo])   // se re-ejecuta cuando 'activo' cambia

  // Al llegar al minuto 90 termina el partido
  useEffect(() => {
    if (minuto >= 90) {
      setEstado('finalizado')
      setActivo(false)
    }
  }, [minuto])

  function alternar() {
    if (estado === 'finalizado') {
      setMinuto(0)
      setGoles(0)
    }
    setEstado(activo ? 'pausado' : 'en juego')
    setActivo(a => !a)
  }

  const colorEstado: Record<EstadoPartido, string> = {
    'sin iniciar': '#757575',
    'en juego':    '#1565c0',
    pausado:       '#f57f17',
    gol:           '#2e7d32',
    finalizado:    '#c62828',
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Partido en vivo — Liga de Quito</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>{estado.toUpperCase()}</Text>
        <Text style={styles.minuto}>{minuto}'</Text>
        <Text style={styles.goles}>Goles: {goles}</Text>
        <Text style={styles.detalle}>Liga de Quito · Rodrigo Paz Delgado</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={alternar}
      >
        <Text style={styles.textoBoton}>{activo ? 'Pausar partido' : 'Iniciar partido'}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: 'center', padding: 24, gap: 16, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1a1a1a', textAlign: 'center' },
  tarjeta: { backgroundColor: '#fff', borderRadius: 10, padding: 20, gap: 6, alignItems: 'center', elevation: 2 },
  etiqueta: { fontSize: 14, fontWeight: '700' },
  minuto: { fontSize: 40, fontWeight: '700', color: '#1a1a1a' },
  goles: { fontSize: 16, color: '#333' },
  detalle: { fontSize: 12, color: '#666' },
  boton: { paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  botonIniciar: { backgroundColor: '#2e7d32' },
  botonDetener: { backgroundColor: '#c62828' },
  textoBoton: { color: '#fff', fontWeight: '600', fontSize: 15 },
})
