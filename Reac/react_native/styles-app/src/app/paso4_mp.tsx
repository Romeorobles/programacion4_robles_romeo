// Paso 4 mp — Sombras por plataforma con estadios de la LigaPro (Platform.select)
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

// Devuelve la sombra correcta según la plataforma
function sombra(nivel: 1 | 2 | 3): object {
  return Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: nivel },
      shadowOpacity: 0.08 + nivel * 0.04,
      shadowRadius: nivel * 2,
    },
    android: {
      elevation: nivel * 3,
    },
    default: {},
  }) ?? {}
}

type Aforo = 'lleno' | 'medio' | 'vacio'

export function Paso4mp() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f0fdf4' }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <View style={estilosPaso4mp.cabecera}>
        <Text style={estilosPaso4mp.plataforma}>Transmitiendo en: {Platform.OS}</Text>
      </View>

      <TarjetaEstadio nivel={1} estadio="Estadio Rodrigo Paz" equipo="Liga de Quito" aforo="lleno" />
      <TarjetaEstadio nivel={2} estadio="Estadio Monumental" equipo="Barcelona SC" aforo="medio" />
      <TarjetaEstadio nivel={3} estadio="George Capwell" equipo="Emelec" aforo="vacio" />

      <View style={estilosPaso4mp.bloque}>
        <Text style={estilosPaso4mp.bloqueTexto}>
          {Platform.OS === 'ios'
            ? 'iOS: usando shadowColor + shadowOffset + shadowOpacity + shadowRadius'
            : Platform.OS === 'android'
              ? 'Android: usando elevation'
              : 'Web: sin sombras nativas'}
        </Text>
      </View>
    </ScrollView>
  )
}

function TarjetaEstadio({
  nivel,
  estadio,
  equipo,
  aforo,
}: {
  nivel: 1 | 2 | 3
  estadio: string
  equipo: string
  aforo: Aforo
}) {
  const coloresAforo: Record<Aforo, string> = {
    lleno: '#15803d',
    medio: '#d97706',
    vacio: '#6b7280',
  }

  return (
    <View style={[estilosPaso4mp.tarjeta, sombra(nivel)]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={estilosPaso4mp.titulo}>{estadio}</Text>
        <View style={[estilosPaso4mp.badge, { backgroundColor: coloresAforo[aforo] }]}>
          <Text style={estilosPaso4mp.badgeTexto}>{aforo}</Text>
        </View>
      </View>
      <Text style={estilosPaso4mp.equipo}>{equipo}</Text>
      <Text style={estilosPaso4mp.nivelTexto}>Sombra nivel {nivel}</Text>
    </View>
  )
}

const estilosPaso4mp = StyleSheet.create({
  cabecera: {
    backgroundColor: '#15803d',
    borderRadius: 8,
    padding: 12,
  },
  plataforma: { color: '#fff', fontWeight: '700', fontSize: 14 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
  titulo:     { fontSize: 15, fontWeight: '700', color: '#14532d' },
  equipo:     { fontSize: 12, color: '#6b7280' },
  nivelTexto: { fontSize: 11, color: '#9ca3af', marginTop: 4 },
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '600' },
  bloque: {
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#f59e0b',
  },
  bloqueTexto: { fontSize: 13, color: '#92400e' },
})
