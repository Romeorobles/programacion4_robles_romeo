// Paso 2 mp — children y composición: ficha de equipo
import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface CardProps {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

export function CardMp({ titulo, subtitulo, children }: CardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cabecera}>
        <Text style={styles.cardTitulo}>{titulo}</Text>
        {subtitulo && <Text style={styles.cardSubtitulo}>{subtitulo}</Text>}
      </View>
      <View style={styles.cuerpo}>{children}</View>
    </View>
  )
}

export function FilaDatoMp({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  )
}

export function Paso2mp() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.titulo}>Ficha del equipo</Text>

      <CardMp titulo="Emelec" subtitulo="Club Sport Emelec">
        <FilaDatoMp etiqueta="Ciudad" valor="Guayaquil" />
        <FilaDatoMp etiqueta="Estadio" valor="George Capwell" />
        <FilaDatoMp etiqueta="Puntos" valor="47" />
        <FilaDatoMp etiqueta="Goles a favor" valor="41" />
      </CardMp>

      <CardMp titulo="Última jornada">
        <FilaDatoMp etiqueta="Rival" valor="Aucas" />
        <FilaDatoMp etiqueta="Resultado" valor="2 - 1" />
        <FilaDatoMp etiqueta="Goleadores" valor="2 jugadores" />
      </CardMp>
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: '#f0f4f8', padding: 20, paddingTop: 60, gap: 16 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1a237e' },
  card: { backgroundColor: '#ffffff', borderRadius: 12, overflow: 'hidden', elevation: 3 },
  cabecera: { backgroundColor: '#1565c0', paddingHorizontal: 16, paddingVertical: 12, gap: 2 },
  cardTitulo: { fontSize: 16, fontWeight: '700', color: '#ffffff' },
  cardSubtitulo: { fontSize: 12, color: '#bbdefb' },
  cuerpo: { padding: 12, gap: 8 },
  fila: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  etiqueta: { fontSize: 13, color: '#546e7a', fontWeight: '500' },
  valor: { fontSize: 13, color: '#1a1a1a' },
})
