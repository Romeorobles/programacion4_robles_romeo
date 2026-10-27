import { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

// Custom hook: simula un partido que puede terminar jugado o suspendido
type EstadoPartido = 'pendiente' | 'jugando' | 'finalizado' | 'suspendido'

interface ResultadoPartido {
  estado: EstadoPartido
  partidosJugados: number
  goles: number | null
  jugar: () => void
  reiniciar: () => void
}

function usePartidoSimulado(equipo: string): ResultadoPartido {
  const [estado, setEstado] = useState<EstadoPartido>('pendiente')
  const [partidosJugados, setPartidosJugados] = useState<number>(0)
  const [goles, setGoles] = useState<number | null>(null)
  const [disparador, setDisparador] = useState<number>(0)  // fuerza re-ejecución del efecto

  useEffect(() => {
    if (estado !== 'jugando') return

    const timeout = setTimeout(() => {
      const suspendido = Math.random() < 0.3   // 30 % de probabilidad de lluvia
      setPartidosJugados(n => n + 1)

      if (suspendido) {
        setEstado('suspendido')
        setGoles(null)
      } else {
        setGoles(Math.floor(Math.random() * 5))
        setEstado('finalizado')
      }
    }, 1200)

    return () => clearTimeout(timeout)
  }, [estado, disparador, equipo])

  const jugar = useCallback(() => {
    setEstado('jugando')
    setDisparador(d => d + 1)   // garantiza que el efecto se re-ejecute
  }, [])

  const reiniciar = useCallback(() => {
    setEstado('pendiente')
    setPartidosJugados(0)
    setGoles(null)
  }, [])

  return { estado, partidosJugados, goles, jugar, reiniciar }
}

export default function Paso8mp() {
  const barcelonaHook = usePartidoSimulado('Barcelona SC')
  const emelecHook    = usePartidoSimulado('Emelec')

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Jornada de Liga</Text>

      <TarjetaPartido equipo="Barcelona SC" hook={barcelonaHook} />
      <TarjetaPartido equipo="Emelec" hook={emelecHook} />
    </View>
  )
}

interface PropsTarjeta {
  equipo: string
  hook: ReturnType<typeof usePartidoSimulado>
}

function TarjetaPartido({ equipo, hook }: PropsTarjeta) {
  const { estado, partidosJugados, goles, jugar, reiniciar } = hook

  const colorEstado: Record<EstadoPartido, string> = {
    pendiente:  '#757575',
    jugando:    '#1565c0',
    finalizado: '#2e7d32',
    suspendido: '#c62828',
  }

  const textoBoton: Record<EstadoPartido, string> = {
    pendiente:  'Jugar',
    jugando:    'Jugando…',
    finalizado: 'Jugar otro',
    suspendido: 'Reprogramar',
  }

  return (
    <View style={[styles.tarjeta, { borderColor: colorEstado[estado] }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.nombreEquipo}>{equipo}</Text>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.detalle}>
        Partidos: {partidosJugados}
        {goles !== null ? `  ·  Goles: ${goles}` : ''}
      </Text>

      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            styles.botonActivo,
            estado === 'jugando' && styles.botonDeshabilitado,
            pressed && { opacity: 0.75 },
            { flex: 1 },
          ]}
          onPress={jugar}
          disabled={estado === 'jugando'}
        >
          <Text style={styles.textoBoton}>{textoBoton[estado]}</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.botonSecundario,
            pressed && { opacity: 0.75 },
          ]}
          onPress={reiniciar}
        >
          <Text style={styles.textoSecundario}>Reiniciar</Text>
        </Pressable>
      </View>
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
  nombreEquipo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '700',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
  boton: {
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
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2e7d32',
    justifyContent: 'center',
  },
  textoSecundario: {
    color: '#2e7d32',
    fontSize: 13,
  },
})
