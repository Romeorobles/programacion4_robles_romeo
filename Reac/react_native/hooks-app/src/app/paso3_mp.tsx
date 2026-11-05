// Paso 3 mp — useRef: registro de goleador con foco y contador sin re-render
import { useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import type { TextInputInstance } from 'react-native'

export default function Paso3mp() {
  // Uso 1: referencia a un TextInput para foco programático
  const inputJugadorRef = useRef<TextInputInstance>(null)
  const inputGolesRef = useRef<TextInputInstance>(null)

  const [jugador, setJugador] = useState<string>('')
  const [goles, setGoles] = useState<string>('0')

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputJugadorRef.current?.focus()
  }, [])

  // Uso 2: contador silencioso de registros (sin re-render)
  const registrosRef = useRef<number>(0)
  const [ultimoRegistro, setUltimoRegistro] = useState<string>('—')

  function registrar() {
    registrosRef.current += 1   // muta sin re-render
    setUltimoRegistro(`${jugador || 'Jugador'}: ${goles} goles — registro #${registrosRef.current}`)
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Tabla de goleadores</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Jugador</Text>
        <TextInput
          ref={inputJugadorRef}
          style={styles.input}
          value={jugador}
          onChangeText={setJugador}
          placeholder="Nombre del goleador"
          placeholderTextColor="#aaa"
          returnKeyType="next"
          onSubmitEditing={() => inputGolesRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Goles</Text>
        <TextInput
          ref={inputGolesRef}
          style={styles.input}
          value={goles}
          onChangeText={setGoles}
          placeholder="0"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, pressed && { opacity: 0.75 }]}
        onPress={registrar}
      >
        <Text style={styles.textoBoton}>Registrar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último registro: {ultimoRegistro}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: 'center', padding: 24, gap: 16, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 22, fontWeight: '700', color: '#1a1a1a', textAlign: 'center' },
  formulario: { gap: 8 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#333' },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  boton: { backgroundColor: '#1565c0', paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  textoBoton: { color: '#fff', fontWeight: '600', fontSize: 15 },
  detalle: { fontSize: 13, color: '#666', textAlign: 'center' },
})
