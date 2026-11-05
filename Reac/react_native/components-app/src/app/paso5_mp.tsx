// Paso 5 mp — Modal de confirmación: suspender un partido
import { useState } from 'react'
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'

interface ModalConfirmProps {
  visible: boolean
  titulo: string
  mensaje: string
  etiquetaConfirmar?: string
  etiquetaCancelar?: string
  onConfirmar: () => void
  onCancelar: () => void
}

export function ModalConfirmMp({
  visible,
  titulo,
  mensaje,
  etiquetaConfirmar = 'Confirmar',
  etiquetaCancelar = 'Cancelar',
  onConfirmar,
  onCancelar,
}: ModalConfirmProps) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancelar}>
      <Pressable style={styles.fondo} onPress={onCancelar}>
        <Pressable style={styles.dialogo} onPress={() => {}}>
          <Text style={styles.dialogoTitulo}>{titulo}</Text>
          <Text style={styles.dialogoMensaje}>{mensaje}</Text>
          <View style={styles.botones}>
            <Pressable style={[styles.boton, styles.botonCancelar]} onPress={onCancelar}>
              <Text style={styles.textoCancelar}>{etiquetaCancelar}</Text>
            </Pressable>
            <Pressable style={[styles.boton, styles.botonConfirmar]} onPress={onConfirmar}>
              <Text style={styles.textoConfirmar}>{etiquetaConfirmar}</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

export function Paso5mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [resultado, setResultado] = useState<string | null>(null)

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titulo}>Control del partido</Text>
      <Text style={styles.subtitulo}>Barcelona SC vs Emelec · Monumental</Text>

      <Pressable
        style={styles.botonAccion}
        onPress={() => {
          setResultado(null)
          setModalVisible(true)
        }}
      >
        <Text style={styles.textoAccion}>Suspender partido</Text>
      </Pressable>

      {resultado && (
        <View style={styles.resultado}>
          <Text style={styles.textoResultado}>{resultado}</Text>
        </View>
      )}

      <ModalConfirmMp
        visible={modalVisible}
        titulo="Suspender partido"
        mensaje={`¿Confirmas la suspensión del Clásico del Astillero?\nEl partido se reprogramará.`}
        etiquetaConfirmar="Suspender"
        onConfirmar={() => {
          setModalVisible(false)
          setResultado('Partido suspendido a las ' + new Date().toLocaleTimeString())
        }}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f0f4f8', padding: 24, paddingTop: 60 },
  titulo: { fontSize: 22, fontWeight: '700', color: '#1a237e' },
  subtitulo: { fontSize: 14, color: '#546e7a', marginTop: 4, marginBottom: 32 },
  botonAccion: {
    backgroundColor: '#b71c1c',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoAccion: { color: '#fff', fontWeight: '700', fontSize: 15 },
  resultado: { marginTop: 24, backgroundColor: '#e8f5e9', borderRadius: 8, padding: 14 },
  textoResultado: { color: '#2e7d32', fontSize: 13 },
  fondo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogo: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: '85%',
    gap: 12,
    elevation: 10,
  },
  dialogoTitulo: { fontSize: 17, fontWeight: '700', color: '#1a1a1a' },
  dialogoMensaje: { fontSize: 14, color: '#546e7a', lineHeight: 20 },
  botones: { flexDirection: 'row', gap: 10, marginTop: 4 },
  boton: { flex: 1, borderRadius: 8, paddingVertical: 12, alignItems: 'center' },
  botonCancelar: { backgroundColor: '#f5f5f5' },
  botonConfirmar: { backgroundColor: '#b71c1c' },
  textoCancelar: { color: '#424242', fontWeight: '600', fontSize: 14 },
  textoConfirmar: { color: '#ffffff', fontWeight: '700', fontSize: 14 },
})
