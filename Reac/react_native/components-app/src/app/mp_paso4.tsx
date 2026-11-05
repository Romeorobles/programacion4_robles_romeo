// mp — Paso 4: ScrollView y SafeAreaView (Estadística de Equipos de Fútbol)
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const EQUIPOS_DEMO = [
  { id: '1',  nombre: 'Liga de Quito',           ciudad: 'Quito',     dt: 'Tiago Nunes',    efectividad: 71, posesion: 58 },
  { id: '2',  nombre: 'Independiente del Valle', ciudad: 'Sangolquí', dt: 'Javier Rabanal', efectividad: 67, posesion: 61 },
  { id: '3',  nombre: 'Barcelona SC',            ciudad: 'Guayaquil', dt: 'S. Castillo',    efectividad: 61, posesion: 55 },
  { id: '4',  nombre: 'Emelec',                  ciudad: 'Guayaquil', dt: 'Jorge Célico',   efectividad: 52, posesion: 50 },
  { id: '5',  nombre: 'Universidad Católica',    ciudad: 'Quito',     dt: 'Diego Martínez', efectividad: 50, posesion: 53 },
  { id: '6',  nombre: 'Aucas',                   ciudad: 'Quito',     dt: 'César Farías',   efectividad: 42, posesion: 47 },
  { id: '7',  nombre: 'Deportivo Cuenca',        ciudad: 'Cuenca',    dt: 'Pablo Peirano',  efectividad: 40, posesion: 46 },
  { id: '8',  nombre: 'Orense',                  ciudad: 'Machala',   dt: 'Andrés Carevic', efectividad: 47, posesion: 44 },
  { id: '9',  nombre: 'Mushuc Runa',             ciudad: 'Ambato',    dt: 'Ever Almeida',   efectividad: 36, posesion: 42 },
  { id: '10', nombre: 'Delfín',                  ciudad: 'Manta',     dt: 'Guillermo Duró', efectividad: 33, posesion: 45 },
  { id: '11', nombre: 'Macará',                  ciudad: 'Ambato',    dt: 'Paúl Vélez',     efectividad: 38, posesion: 48 },
  { id: '12', nombre: 'Imbabura',                ciudad: 'Ibarra',    dt: 'Luis Soler',     efectividad: 22, posesion: 40 },
]

interface BarraStatProps {
  porcentaje: number
  etiqueta: string
}

function BarraStat({ porcentaje, etiqueta }: BarraStatProps) {
  const color = porcentaje > 60 ? '#2e7d32'
              : porcentaje > 40 ? '#f57f17'
              : '#c62828'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaEquipo({ nombre, ciudad, dt, efectividad, posesion }: typeof EQUIPOS_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{nombre}</Text>
        <Text style={estilos4.nodoCiudad}>{ciudad}</Text>
      </View>
      <Text style={estilos4.nodoDt}>DT: {dt}</Text>
      <BarraStat porcentaje={efectividad} etiqueta="EFE" />
      <BarraStat porcentaje={posesion} etiqueta="POS" />
    </View>
  )
}

export function Paso4() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Equipos de la LigaPro</Text>
        <Text style={estilos4.headerSub}>{EQUIPOS_DEMO.length} equipos</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {EQUIPOS_DEMO.map((eq) => (
          <TarjetaEquipo key={eq.id} {...eq} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0b2015',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c4030',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e8f5e9',
  },
  headerSub: {
    fontSize: 12,
    color: '#81a68f',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#12301f',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c4a30',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e8f5e9',
  },
  nodoCiudad: {
    fontSize: 12,
    color: '#81c784',
  },
  nodoDt: {
    fontSize: 11,
    color: '#6b8f7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#81a68f',
    width: 28,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c4a30',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 34,
    textAlign: 'right',
  },
})
