// mp — Paso 6: Pantalla completa de detalle (Estadística de Equipos de Fútbol)
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BadgeZona } from './mp_paso3'
import { ModalConfirm } from './mp_paso5'
import { Card, FilaInfo } from './mp_paso2'

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} registrado para Liga de Quito`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Liga de Quito</Text>
          <Text style={estilos6.cabCiudad}>Quito · Estadio Rodrigo Paz Delgado</Text>
        </View>
        <BadgeZona zona="libertadores" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de estadísticas */}
        <Card titulo="Estadísticas de la temporada" subtitulo="Actualizado: fecha 30">
          <FilaInfo etiqueta="Partidos" valor="30 · 19G 7E 4P" />
          <FilaInfo etiqueta="Puntos" valor="64 (71% efectividad)" />
          <FilaInfo etiqueta="Goles" valor="55 a favor · 24 en contra" />
          <FilaInfo etiqueta="Posesión" valor="58% promedio" />
          <FilaInfo etiqueta="Racha" valor="5 partidos sin perder" />
        </Card>

        {/* Card de información del club */}
        <Card titulo="Información del club">
          <FilaInfo etiqueta="Fundación" valor="11 de enero de 1930" />
          <FilaInfo etiqueta="Entrenador" valor="Tiago Nunes" />
          <FilaInfo etiqueta="Goleador" valor="Alex Arce · 18 goles" />
          <FilaInfo etiqueta="Capacidad" valor="41.575 espectadores" />
          <FilaInfo etiqueta="Torneo" valor="LigaPro Serie A 2026" />
        </Card>

        {/* Card de acciones */}
        <Card titulo="Registrar resultado">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Victoria"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Victoria')}
            />
            <BotonAccion
              etiqueta="Empate"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Empate')}
            />
            <BotonAccion
              etiqueta="Derrota"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Derrota')}
            />
            <BotonAccion
              etiqueta="Ver tabla"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Consulta de tabla')}
            />
          </View>
        </Card>

        {/* Card de log de actividad */}
        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      {/* Modal reutilizado del Paso 5 */}
      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Registrar "${accionPendiente}" para Liga de Quito?\nEsto actualizará la tabla de posiciones.`}
        etiquetaConfirmar="Registrar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
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
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1b5e20',
  },
  cabCiudad: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
})
