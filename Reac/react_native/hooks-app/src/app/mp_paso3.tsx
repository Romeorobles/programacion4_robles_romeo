// mp — Paso 3: useRef (Estadística de Equipos de Fútbol)
import { useRef, useState, useEffect } from 'react'
import {
  StyleSheet, Text, TextInput, View, Pressable
} from 'react-native'
import type { TextInputInstance } from 'react-native'

export default function Paso3() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const inputEquipoRef = useRef<TextInputInstance>(null)
  const inputGolesRef = useRef<TextInputInstance>(null)

  const [equipo, setEquipo] = useState<string>('')
  const [goles, setGoles] = useState<string>('0')

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputEquipoRef.current?.focus()
  }, [])

  // ── Uso 2: contador de registros silencioso (sin re-render) ──────────
  const registrosSilenciososRef = useRef<number>(0)
  const [ultimoRegistro, setUltimoRegistro] = useState<string>('—')

  function registrarResultado() {
    registrosSilenciososRef.current += 1   // muta sin re-render
    // Solo actualizamos el estado (y disparamos re-render) al registrar
    setUltimoRegistro(
      `${equipo || 'equipo'}: ${goles} goles — registro #${registrosSilenciososRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registrar Goles del Partido</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Equipo</Text>
        <TextInput
          ref={inputEquipoRef}
          style={styles.input}
          value={equipo}
          onChangeText={setEquipo}
          placeholder="Liga de Quito"
          placeholderTextColor="#aaa"
          returnKeyType="next"
          onSubmitEditing={() => inputGolesRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Goles anotados</Text>
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
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={registrarResultado}
      >
        <Text style={styles.textoBoton}>Registrar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último registro: {ultimoRegistro}</Text>
      <Text style={styles.detalle}>
        (los registros silenciosos no causan re-renders)
      </Text>
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
  formulario: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    gap: 6,
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
    marginBottom: 8,
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
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  detalle: {
    fontSize: 13,
    color: '#666',
  },
})
