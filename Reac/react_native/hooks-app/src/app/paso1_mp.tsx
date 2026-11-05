// Paso 1 mp — useState: tanda de penales, el gol entra al tercer intento
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Paso1mp() {
  const [tiros, setTiros] = useState<number>(0)
  const [gol, setGol] = useState<boolean>(false)

  function patear() {
    if (gol) return
    const nuevoTiro = tiros + 1
    setTiros(nuevoTiro)
    if (nuevoTiro >= 3) {
      setGol(true)
    }
  }

  function reiniciar() {
    setTiros(0)
    setGol(false)
  }

  const estadoTexto = gol ? '⚽ ¡Gol de Barcelona SC!' : `Tiro ${tiros} de 3 atajado`
  const colorEstado = gol ? '#2e7d32' : '#c62828'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Tanda de penales</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado }]}>
        <Text style={[styles.estado, { color: colorEstado }]}>{estadoTexto}</Text>
        <Text style={styles.detalle}>Barcelona SC vs Emelec · Monumental</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          gol ? styles.botonDeshabilitado : styles.botonActivo,
          pressed && !gol && { opacity: 0.75 },
        ]}
        onPress={patear}
        disabled={gol}
      >
        <Text style={styles.textoBoton}>{gol ? 'Gol anotado' : 'Patear penal'}</Text>
      </Pressable>

      <Pressable style={styles.botonSecundario} onPress={reiniciar}>
        <Text style={styles.textoSecundario}>Reiniciar tanda</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: 'center', padding: 24, gap: 16, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 22, fontWeight: '700', color: '#1a1a1a', textAlign: 'center' },
  tarjeta: { backgroundColor: '#fff', borderRadius: 10, borderWidth: 2, padding: 16, gap: 6 },
  estado: { fontSize: 16, fontWeight: '600' },
  detalle: { fontSize: 13, color: '#666' },
  boton: { paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  botonActivo: { backgroundColor: '#1565c0' },
  botonDeshabilitado: { backgroundColor: '#9e9e9e' },
  textoBoton: { color: '#fff', fontWeight: '600', fontSize: 15 },
  botonSecundario: { paddingVertical: 8, alignItems: 'center' },
  textoSecundario: { color: '#1565c0', fontSize: 14 },
})
