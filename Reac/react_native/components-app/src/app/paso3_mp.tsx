// Paso 3 mp — Props opcionales: estado de cada equipo en la tabla
import { StyleSheet, Text, View } from 'react-native'

type EstadoEquipo = 'clasificado' | 'en pelea' | 'eliminado' | 'descenso'

interface BadgeEquipoProps {
  estado: EstadoEquipo
  tamaño?: number          // opcional — valor por defecto: 12
  mostrarIcono?: boolean   // opcional — valor por defecto: false
}

const COLOR_ESTADO: Record<EstadoEquipo, { fondo: string; texto: string }> = {
  clasificado: { fondo: '#e8f5e9', texto: '#2e7d32' },
  'en pelea':  { fondo: '#fff8e1', texto: '#f57f17' },
  eliminado:   { fondo: '#f5f5f5', texto: '#616161' },
  descenso:    { fondo: '#fce4ec', texto: '#c62828' },
}

const ICONO_ESTADO: Record<EstadoEquipo, string> = {
  clasificado: '●',
  'en pelea':  '◐',
  eliminado:   '○',
  descenso:    '✕',
}

export function BadgeEquipo({ estado, tamaño = 12, mostrarIcono = false }: BadgeEquipoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[styles.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[styles.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[styles.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaEquipoProps {
  nombre: string
  ciudad: string
  estado: EstadoEquipo
  puntos?: number          // opcional
}

function FilaEquipo({ nombre, ciudad, estado, puntos }: FilaEquipoProps) {
  return (
    <View style={styles.fila}>
      <View style={styles.infoIzq}>
        <Text style={styles.nombreEquipo}>{nombre}</Text>
        <Text style={styles.ciudad}>{ciudad}</Text>
      </View>
      <View style={styles.infoDer}>
        {puntos !== undefined && <Text style={styles.puntos}>{puntos} pts</Text>}
        <BadgeEquipo estado={estado} mostrarIcono />
      </View>
    </View>
  )
}

export function Paso3mp() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.titulo}>Tabla de la LigaPro</Text>
      <FilaEquipo nombre="Liga de Quito"      ciudad="Quito"     estado="clasificado" puntos={64} />
      <FilaEquipo nombre="Barcelona SC"       ciudad="Guayaquil" estado="clasificado" puntos={55} />
      <FilaEquipo nombre="Emelec"             ciudad="Guayaquil" estado="en pelea"    puntos={47} />
      <FilaEquipo nombre="Aucas"              ciudad="Quito"     estado="eliminado"   puntos={40} />
      <FilaEquipo nombre="El Nacional"        ciudad="Quito"     estado="descenso" />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: '#f0f4f8', padding: 20, paddingTop: 60, gap: 8 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1a237e', marginBottom: 8 },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreEquipo: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  ciudad: { fontSize: 12, color: '#90a4ae' },
  puntos: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  textoBadge: { fontWeight: '600' },
})
