// Paso 5 mp — Formulario con validación: agregar equipo a la tabla
import { Paso5CampoConError } from '@/components/paso5CampoConError'
import { useState } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput } from 'react-native'

// Solo letras (con tildes y ñ) y espacios
const REGEX_CIUDAD = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/

type CamposEquipo = {
  nombre: string
  ciudad: string
  puntos: string
}

type ErroresEquipo = {
  nombre: string | null
  ciudad: string | null
  puntos: string | null
}

const SIN_ERRORES: ErroresEquipo = { nombre: null, ciudad: null, puntos: null }

function validar(campos: CamposEquipo): ErroresEquipo {
  const errores: ErroresEquipo = { ...SIN_ERRORES }

  // Nombre: obligatorio, al menos 3 caracteres
  if (campos.nombre.trim().length === 0) {
    errores.nombre = 'El nombre es obligatorio'
  } else if (campos.nombre.trim().length < 3) {
    errores.nombre = 'El nombre debe tener al menos 3 caracteres'
  }

  // Ciudad: obligatoria, solo letras
  if (campos.ciudad.trim().length === 0) {
    errores.ciudad = 'La ciudad es obligatoria'
  } else if (!REGEX_CIUDAD.test(campos.ciudad.trim())) {
    errores.ciudad = 'La ciudad solo puede tener letras'
  }

  // Puntos: entero entre 0 y 90 (30 fechas × 3 puntos)
  const numeroPuntos = Number(campos.puntos)
  if (campos.puntos.trim().length === 0) {
    errores.puntos = 'Los puntos son obligatorios'
  } else if (!Number.isInteger(numeroPuntos) || numeroPuntos < 0 || numeroPuntos > 90) {
    errores.puntos = 'Puntos inválidos (0 – 90)'
  }

  return errores
}

function hayErrores(errores: ErroresEquipo): boolean {
  return Object.values(errores).some((e) => e !== null)
}

export function Paso5mp() {
  const [campos, setCampos] = useState<CamposEquipo>({ nombre: '', ciudad: '', puntos: '0' })
  const [errores, setErrores] = useState<ErroresEquipo>(SIN_ERRORES)
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposEquipo, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    // Borra el error del campo mientras el usuario escribe
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    setEnviado(true)
    Alert.alert(
      'Equipo agregado',
      `${campos.nombre} (${campos.ciudad}) · ${campos.puntos} pts`,
      [
        {
          text: 'Agregar otro',
          onPress: () => {
            setCampos({ nombre: '', ciudad: '', puntos: '0' })
            setErrores(SIN_ERRORES)
            setEnviado(false)
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5mp.contenedor}>
      <ScrollView contentContainerStyle={styles5mp.scroll} keyboardShouldPersistTaps="handled">
        <Text style={styles5mp.titulo}>Agregar equipo</Text>
        <Text style={styles5mp.subtitulo}>Los campos marcados con * son obligatorios</Text>

        <Paso5CampoConError etiqueta="Nombre del equipo *" error={errores.nombre}>
          <TextInput
            style={[styles5mp.campo, errores.nombre !== null && styles5mp.campoError]}
            value={campos.nombre}
            onChangeText={(v) => actualizarCampo('nombre', v)}
            placeholder="ej. Barcelona SC"
            autoCorrect={false}
          />
        </Paso5CampoConError>

        <Paso5CampoConError etiqueta="Ciudad *" error={errores.ciudad}>
          <TextInput
            style={[styles5mp.campo, errores.ciudad !== null && styles5mp.campoError]}
            value={campos.ciudad}
            onChangeText={(v) => actualizarCampo('ciudad', v)}
            placeholder="ej. Guayaquil"
          />
        </Paso5CampoConError>

        <Paso5CampoConError etiqueta="Puntos *" error={errores.puntos}>
          <TextInput
            style={[styles5mp.campo, errores.puntos !== null && styles5mp.campoError]}
            value={campos.puntos}
            onChangeText={(v) => actualizarCampo('puntos', v)}
            placeholder="0"
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </Paso5CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5mp.botonEnviar,
            pressed && styles5mp.botonEnviarPresionado,
            enviado && styles5mp.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5mp.textoBoton}>{enviado ? '✓ Agregado' : 'Agregar equipo'}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5mp = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f8e9' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#2e7d32', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c5e1a5',
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
  botonEnviar: {
    backgroundColor: '#2e7d32',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#1b5e20' },
  botonEnviarExito: { backgroundColor: '#f9a825' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})
