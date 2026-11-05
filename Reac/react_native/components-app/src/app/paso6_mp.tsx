// Paso 6 mp — Pantalla completa: detalle de un equipo (reutiliza los mp 2, 3 y 5)
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CardMp, FilaDatoMp } from './paso2_mp'
import { BadgeEquipo } from './paso3_mp'
import { ModalConfirmMp } from './paso5_mp'

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={styles.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} registrado en Liga de Quito`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.cabecera}>
        <View>
          <Text style={styles.cabNombre}>Liga de Quito</Text>
          <Text style={styles.cabDato}>Quito · Rodrigo Paz Delgado</Text>
        </View>
        <BadgeEquipo estado="clasificado" mostrarIcono />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContenido} showsVerticalScrollIndicator={false}>
        <CardMp titulo="Estadísticas" subtitulo="Temporada actual">
          <FilaDatoMp etiqueta="Puntos" valor="64" />
          <FilaDatoMp etiqueta="Partidos" valor="30" />
          <FilaDatoMp etiqueta="Goles a favor" valor="58" />
          <FilaDatoMp etiqueta="Goles en contra" valor="24" />
        </CardMp>

        <CardMp titulo="Acciones">
          <View style={styles.gridAcciones}>
            <BotonAccion etiqueta="Gol" color="#2e7d32" onPress={() => pedirConfirmacion('Gol')} />
            <BotonAccion etiqueta="Tarjeta" color="#f57f17" onPress={() => pedirConfirmacion('Tarjeta')} />
            <BotonAccion etiqueta="Cambio" color="#1565c0" onPress={() => pedirConfirmacion('Cambio')} />
            <BotonAccion etiqueta="Penal" color="#b71c1c" onPress={() => pedirConfirmacion('Penal')} />
          </View>
        </CardMp>

        {log.length > 0 && (
          <CardMp titulo="Actividad del partido">
            {log.map((entrada, i) => (
              <Text key={i} style={styles.entradaLog}>{entrada}</Text>
            ))}
          </CardMp>
        )}
      </ScrollView>

      <ModalConfirmMp
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Registrar "${accionPendiente}" para Liga de Quito?`}
        etiquetaConfirmar="Registrar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f0f4f8' },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: { fontSize: 18, fontWeight: '700', color: '#1a237e' },
  cabDato: { fontSize: 12, color: '#78909c', marginTop: 2 },
  scrollContenido: { padding: 16, gap: 14, paddingBottom: 40 },
  gridAcciones: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: { color: '#ffffff', fontWeight: '600', fontSize: 14 },
  entradaLog: { fontSize: 11, color: '#2e7d32', lineHeight: 18 },
})
