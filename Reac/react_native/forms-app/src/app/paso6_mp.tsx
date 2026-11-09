// Paso 6 mp — KeyboardAvoidingView: fichar un jugador sin que el teclado tape el formulario
import { useState } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export function Paso6mp() {
  const [jugador, setJugador] = useState('')
  const [equipo, setEquipo] = useState('')
  const [dorsal, setDorsal] = useState('')
  const [observaciones, setObservaciones] = useState('')
  const [error, setError] = useState<string | null>(null)

  function onFichar() {
    if (!jugador.trim() || !equipo.trim() || !dorsal.trim()) {
      setError('Completa jugador, equipo y dorsal antes de continuar')
      return
    }
    setError(null)
    Alert.alert(
      'Jugador fichado',
      `#${dorsal} ${jugador} → ${equipo}\nNotas: ${observaciones || 'sin observaciones'}`
    )
  }

  return (
    <KeyboardAvoidingView
      style={styles6mp.raiz}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Cabecera fija */}
        <View style={styles6mp.cabecera}>
          <Text style={styles6mp.cabeceraTitulo}>Fichar jugador</Text>
          <Text style={styles6mp.cabeceraPlataforma}>
            {Platform.OS === 'ios' ? 'iOS · padding mode' : 'Android · height mode'}
          </Text>
        </View>

        {/* Cuerpo con scroll — los campos inferiores no quedan tapados */}
        <ScrollView contentContainerStyle={styles6mp.cuerpo} keyboardShouldPersistTaps="handled">
          <Text style={styles6mp.etiquetaCampo}>Nombre del jugador</Text>
          <TextInput
            style={styles6mp.campo}
            value={jugador}
            onChangeText={setJugador}
            placeholder="ej. Enner Valencia"
            autoCorrect={false}
          />

          <Text style={styles6mp.etiquetaCampo}>Equipo</Text>
          <TextInput
            style={styles6mp.campo}
            value={equipo}
            onChangeText={setEquipo}
            placeholder="ej. Liga de Quito"
            autoCorrect={false}
          />

          <Text style={styles6mp.etiquetaCampo}>Dorsal</Text>
          <TextInput
            style={styles6mp.campo}
            value={dorsal}
            onChangeText={setDorsal}
            placeholder="13"
            keyboardType="number-pad"
          />

          <Text style={styles6mp.etiquetaCampo}>Observaciones (opcional)</Text>
          <TextInput
            style={[styles6mp.campo, styles6mp.campoMultilinea]}
            value={observaciones}
            onChangeText={setObservaciones}
            placeholder="Delantero centro. Contrato hasta diciembre 2027"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          {error !== null && (
            <View style={styles6mp.bannerError}>
              <Text style={styles6mp.bannerErrorTexto}>{error}</Text>
            </View>
          )}

          <Pressable
            style={({ pressed }) => [styles6mp.boton, pressed && { opacity: 0.8 }]}
            onPress={onFichar}
          >
            <Text style={styles6mp.textoBoton}>Fichar jugador</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles6mp = StyleSheet.create({
  raiz: { flex: 1, backgroundColor: '#f1f8e9' },
  cabecera: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cabeceraTitulo: { fontSize: 18, fontWeight: '700', color: '#fff' },
  cabeceraPlataforma: { fontSize: 11, color: '#c5e1a5', marginTop: 2 },
  cuerpo: { padding: 20, paddingBottom: 40 },
  etiquetaCampo: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#c5e1a5',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
      },
      android: { elevation: 1 },
    }),
  },
  campoMultilinea: { height: 80, paddingTop: 10 },
  bannerError: {
    backgroundColor: '#ffebee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#e53935',
  },
  bannerErrorTexto: { fontSize: 13, color: '#c62828' },
  boton: {
    backgroundColor: '#2e7d32',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})
