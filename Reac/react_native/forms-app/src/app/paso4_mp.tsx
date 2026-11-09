// Paso 4 mp — TextInput tipado: registrar el marcador de un partido
import { type ComponentRef, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

export function Paso4mp() {
  const [local, setLocal] = useState('')
  const [visitante, setVisitante] = useState('')
  const [golesLocal, setGolesLocal] = useState('')
  const [golesVisitante, setGolesVisitante] = useState('')

  const refVisitante = useRef<ComponentRef<typeof TextInput>>(null)
  const refGolesLocal = useRef<ComponentRef<typeof TextInput>>(null)
  const refGolesVisitante = useRef<ComponentRef<typeof TextInput>>(null)

  return (
    <SafeAreaView style={styles4mp.contenedor}>
      <Text style={styles4mp.titulo}>Registrar partido</Text>

      {/* Equipo local */}
      <Text style={styles4mp.etiqueta}>Equipo local</Text>
      <TextInput
        style={styles4mp.campo}
        value={local}
        onChangeText={setLocal}
        placeholder="ej. Barcelona SC"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refVisitante.current?.focus()}
      />

      {/* Equipo visitante */}
      <Text style={styles4mp.etiqueta}>Equipo visitante</Text>
      <TextInput
        ref={refVisitante}
        style={styles4mp.campo}
        value={visitante}
        onChangeText={setVisitante}
        placeholder="ej. Emelec"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refGolesLocal.current?.focus()}
      />

      {/* Goles */}
      <View style={styles4mp.filaGoles}>
        <View style={styles4mp.columnaGoles}>
          <Text style={styles4mp.etiqueta}>Goles local</Text>
          <TextInput
            ref={refGolesLocal}
            style={styles4mp.campo}
            value={golesLocal}
            onChangeText={setGolesLocal}
            placeholder="0"
            keyboardType="number-pad"
            returnKeyType="next"
            onSubmitEditing={() => refGolesVisitante.current?.focus()}
          />
        </View>
        <View style={styles4mp.columnaGoles}>
          <Text style={styles4mp.etiqueta}>Goles visitante</Text>
          <TextInput
            ref={refGolesVisitante}
            style={styles4mp.campo}
            value={golesVisitante}
            onChangeText={setGolesVisitante}
            placeholder="0"
            keyboardType="number-pad"
            returnKeyType="done"
          />
        </View>
      </View>

      {/* Vista previa del marcador */}
      <View style={styles4mp.preview}>
        <Text style={styles4mp.previewTexto}>
          {local || '<local>'} {golesLocal || '0'} - {golesVisitante || '0'} {visitante || '<visitante>'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4mp = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f8e9', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#2e7d32', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c5e1a5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  filaGoles: { flexDirection: 'row', gap: 12 },
  columnaGoles: { flex: 1 },
  preview: {
    marginTop: 8,
    backgroundColor: '#1b5e20',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
})
