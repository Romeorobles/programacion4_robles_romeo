// Paso 5 volumen — Formulario con validación: calcular volumen (base × altura × profundidad)
import { Paso5CampoConError } from '@/components/paso5CampoConError'
import { useState } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

type CamposVolumen = {
  base: string
  altura: string
  profundidad: string
}

type ErroresVolumen = {
  base: string | null
  altura: string | null
  profundidad: string | null
}

const SIN_ERRORES: ErroresVolumen = { base: null, altura: null, profundidad: null }

// Valida una medida: obligatoria, numérica (acepta coma o punto), mayor a 0 y hasta 10 000
function validarMedida(valor: string, nombre: string): string | null {
  if (valor.trim().length === 0) return `${nombre} es obligatoria`
  const n = Number(valor.replace(',', '.'))
  if (isNaN(n)) return `${nombre} debe ser un número`
  if (n <= 0) return `${nombre} debe ser mayor a 0`
  if (n > 10000) return `${nombre} no puede pasar de 10 000 cm`
  return null
}

function validar(campos: CamposVolumen): ErroresVolumen {
  return {
    base: validarMedida(campos.base, 'La base'),
    altura: validarMedida(campos.altura, 'La altura'),
    profundidad: validarMedida(campos.profundidad, 'La profundidad'),
  }
}

function hayErrores(errores: ErroresVolumen): boolean {
  return Object.values(errores).some((e) => e !== null)
}

export function Paso5volumen() {
  const [campos, setCampos] = useState<CamposVolumen>({ base: '', altura: '', profundidad: '' })
  const [errores, setErrores] = useState<ErroresVolumen>(SIN_ERRORES)
  const [volumen, setVolumen] = useState<number | null>(null)

  function actualizarCampo(campo: keyof CamposVolumen, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    setVolumen(null) // si cambia una medida, el resultado anterior ya no vale
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onCalcular() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    const b = Number(campos.base.replace(',', '.'))
    const h = Number(campos.altura.replace(',', '.'))
    const p = Number(campos.profundidad.replace(',', '.'))
    const resultado = Number((b * h * p).toFixed(2))
    setVolumen(resultado)
    Alert.alert('Volumen calculado', `${b} × ${h} × ${p} = ${resultado} cm³`, [
      {
        text: 'Calcular otro',
        onPress: () => {
          setCampos({ base: '', altura: '', profundidad: '' })
          setErrores(SIN_ERRORES)
          setVolumen(null)
        },
      },
      { text: 'OK' },
    ])
  }

  return (
    <SafeAreaView style={styles5v.contenedor}>
      <ScrollView contentContainerStyle={styles5v.scroll} keyboardShouldPersistTaps="handled">
        <Text style={styles5v.titulo}>Calcular volumen</Text>
        <Text style={styles5v.subtitulo}>Los campos marcados con * son obligatorios</Text>

        <Paso5CampoConError etiqueta="Base (cm) *" error={errores.base}>
          <TextInput
            style={[styles5v.campo, errores.base !== null && styles5v.campoError]}
            value={campos.base}
            onChangeText={(v) => actualizarCampo('base', v)}
            placeholder="ej. 10"
            keyboardType="decimal-pad"
          />
        </Paso5CampoConError>

        <Paso5CampoConError etiqueta="Altura (cm) *" error={errores.altura}>
          <TextInput
            style={[styles5v.campo, errores.altura !== null && styles5v.campoError]}
            value={campos.altura}
            onChangeText={(v) => actualizarCampo('altura', v)}
            placeholder="ej. 5"
            keyboardType="decimal-pad"
          />
        </Paso5CampoConError>

        <Paso5CampoConError etiqueta="Profundidad (cm) *" error={errores.profundidad}>
          <TextInput
            style={[styles5v.campo, errores.profundidad !== null && styles5v.campoError]}
            value={campos.profundidad}
            onChangeText={(v) => actualizarCampo('profundidad', v)}
            placeholder="ej. 3"
            keyboardType="decimal-pad"
            returnKeyType="done"
            onSubmitEditing={onCalcular}
          />
        </Paso5CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5v.botonCalcular,
            pressed && styles5v.botonPresionado,
            volumen !== null && styles5v.botonExito,
          ]}
          onPress={onCalcular}
        >
          <Text style={styles5v.textoBoton}>
            {volumen !== null ? '✓ Calculado' : 'Calcular volumen'}
          </Text>
        </Pressable>

        {volumen !== null && (
          <View style={styles5v.resultado}>
            <Text style={styles5v.resultadoTexto}>Volumen: {volumen} cm³</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5v = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1565c0', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  botonCalcular: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonPresionado: { backgroundColor: '#0d47a1' },
  botonExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
  resultado: {
    marginTop: 16,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  resultadoTexto: { fontFamily: 'monospace', fontSize: 16, fontWeight: '700', color: '#a8ff78' },
})
