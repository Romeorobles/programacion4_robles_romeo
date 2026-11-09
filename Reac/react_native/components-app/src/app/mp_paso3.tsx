// mp — Paso 3: Props opcionales (Estadística de Equipos de Fútbol)
import { StyleSheet, Text, View } from 'react-native'

type ZonaTabla = 'libertadores' | 'sudamericana' | 'media' | 'descenso' | 'sancionado'

interface BadgeZonaProps {
  zona: ZonaTabla
  tamaño?: number          // opcional — valor por defecto: 12
  mostrarIcono?: boolean   // opcional — valor por defecto: false
}

const COLOR_ZONA: Record<ZonaTabla, { fondo: string; texto: string }> = {
  libertadores: { fondo: '#e8f5e9', texto: '#2e7d32' },
  sudamericana: { fondo: '#e3f2fd', texto: '#1565c0' },
  media:        { fondo: '#f5f5f5', texto: '#616161' },
  descenso:     { fondo: '#fce4ec', texto: '#c62828' },
  sancionado:   { fondo: '#fff8e1', texto: '#f57f17' },
}

const ICONO_ZONA: Record<ZonaTabla, string> = {
  libertadores: '●',
  sudamericana: '◐',
  media:        '○',
  descenso:     '✕',
  sancionado:   '◐',
}

export function BadgeZona({
  zona,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeZonaProps) {
  const colores = COLOR_ZONA[zona]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ZONA[zona]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {zona.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaEquipoProps {
  nombre: string
  ciudad: string
  zona: ZonaTabla
  puntos?: number          // opcional
}

function FilaEquipo({ nombre, ciudad, zona, puntos }: FilaEquipoProps) {
  return (
    <View style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreEquipo}>{nombre}</Text>
        <Text style={estilos3.ciudadTexto}>{ciudad}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {puntos !== undefined && (
          <Text style={estilos3.puntos}>{puntos} pts</Text>
        )}
        <BadgeZona zona={zona} mostrarIcono={false} />
      </View>
    </View>
  )
}

export function Paso3() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Zonas de la tabla</Text>
      <FilaEquipo nombre="Liga de Quito"           ciudad="Quito"     zona="libertadores" puntos={64} />
      <FilaEquipo nombre="Independiente del Valle" ciudad="Sangolquí" zona="libertadores" puntos={60} />
      <FilaEquipo nombre="Emelec"                  ciudad="Guayaquil" zona="sudamericana" />
      <FilaEquipo nombre="Aucas"                   ciudad="Quito"     zona="media"        puntos={38} />
      <FilaEquipo nombre="Imbabura"                ciudad="Ibarra"    zona="descenso" />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1b5e20',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreEquipo: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  ciudadTexto: { fontSize: 12, color: '#90a4ae' },
  puntos: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})
