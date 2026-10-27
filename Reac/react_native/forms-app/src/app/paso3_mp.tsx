// Paso 3 mp — SectionList: equipos agrupados por provincia
import { Paso3EncabezadoSeccion } from '@/components/paso3Encabezado'
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import { FilaEquipo, type Equipo } from './paso1_mp'

type SeccionProvincia = {
  title: string
  region: string
  data: Equipo[]
}

const SECCIONES: SeccionProvincia[] = [
  {
    title: 'Guayas',
    region: 'Costa',
    data: [
      { id: 'e1', nombre: 'Barcelona SC',  ciudad: 'Guayaquil', clasificado: true  },
      { id: 'e2', nombre: 'Emelec',        ciudad: 'Guayaquil', clasificado: false },
      { id: 'e3', nombre: 'Guayaquil City', ciudad: 'Guayaquil', clasificado: false },
    ],
  },
  {
    title: 'Pichincha',
    region: 'Sierra',
    data: [
      { id: 'e4', nombre: 'Liga de Quito',        ciudad: 'Quito',     clasificado: true },
      { id: 'e5', nombre: 'Independiente DV',     ciudad: 'Sangolquí', clasificado: true },
      { id: 'e6', nombre: 'Aucas',                ciudad: 'Quito',     clasificado: true },
      { id: 'e7', nombre: 'Universidad Católica', ciudad: 'Quito',     clasificado: true },
    ],
  },
  {
    title: 'Azuay y El Oro',
    region: 'Sierra / Costa',
    data: [
      { id: 'e8', nombre: 'Deportivo Cuenca', ciudad: 'Cuenca',  clasificado: false },
      { id: 'e9', nombre: 'Orense',           ciudad: 'Machala', clasificado: false },
    ],
  },
]

export function Paso3mp() {
  return (
    <SafeAreaView style={styles3mp.contenedor}>
      <Text style={styles3mp.tituloPantalla}>LigaPro por provincia</Text>
      <SectionList<Equipo, SeccionProvincia>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaEquipo equipo={item} />}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion titulo={section.title} region={section.region} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles3mp = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f8e9' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#2e7d32',
    color: '#fff',
  },
})
