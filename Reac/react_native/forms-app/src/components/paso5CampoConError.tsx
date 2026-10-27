import type { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Paso5CampoConError({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: ReactNode
  error: string | null
}) {
  return (
    <View style={styles5.campoWrapper}>
      <Text style={styles5.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5.textoError}>{error}</Text>}
    </View>
  )
}

const styles5 = StyleSheet.create({
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
})
