// Paso 4 volumen — TextInput tipado: calcular volumen (base × altura × profundidad)
import { type ComponentRef, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

// Convierte el texto a número (acepta coma o punto); devuelve null si no es válido
function aNumero(texto: string): number | null {
  const n = Number(texto.replace(',', '.'))
  return texto.trim() !== '' && !isNaN(n) && n > 0 ? n : null
}

export function Paso4volumen() {
  const [base, setBase] = useState('')
  const [altura, setAltura] = useState('')
  const [profundidad, setProfundidad] = useState('')

  const refAltura = useRef<ComponentRef<typeof TextInput>>(null)
  const refProfundidad = useRef<ComponentRef<typeof TextInput>>(null)

  const b = aNumero(base)
  const a = aNumero(altura)
  const p = aNumero(profundidad)
  const volumen = b !== null && a !== null && p !== null ? b * a * p : null

  return (
    <SafeAreaView style={styles4v.contenedor}>
      <Text style={styles4v.titulo}>Calcular volumen</Text>

      {/* Base */}
      <Text style={styles4v.etiqueta}>Base (cm)</Text>
      <TextInput
        style={styles4v.campo}
        value={base}
        onChangeText={setBase}
        placeholder="ej. 10"
        keyboardType="decimal-pad"
        returnKeyType="next"
        onSubmitEditing={() => refAltura.current?.focus()}
      />

      {/* Altura */}
      <Text style={styles4v.etiqueta}>Altura (cm)</Text>
      <TextInput
        ref={refAltura}
        style={styles4v.campo}
        value={altura}
        onChangeText={setAltura}
        placeholder="ej. 5"
        keyboardType="decimal-pad"
        returnKeyType="next"
        onSubmitEditing={() => refProfundidad.current?.focus()}
      />

      {/* Profundidad */}
      <Text style={styles4v.etiqueta}>Profundidad (cm)</Text>
      <TextInput
        ref={refProfundidad}
        style={styles4v.campo}
        value={profundidad}
        onChangeText={setProfundidad}
        placeholder="ej. 3"
        keyboardType="decimal-pad"
        returnKeyType="done"
      />

      {/* Resultado */}
      <View style={styles4v.resultado}>
        <Text style={styles4v.formula}>
          V = {base || 'b'} × {altura || 'h'} × {profundidad || 'p'}
        </Text>
        <Text style={styles4v.resultadoTexto}>
          {volumen !== null
            ? `Volumen: ${Number(volumen.toFixed(2))} cm³`
            : 'Ingresa tres valores mayores a 0'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4v = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#000307', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#faf6f6', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  resultado: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  formula: { fontFamily: 'monospace', fontSize: 13, color: '#90caf9' },
  resultadoTexto: {
    fontFamily: 'monospace',
    fontSize: 16,
    fontWeight: '700',
    color: '#a8ff78',
    marginTop: 6,
  },
})
