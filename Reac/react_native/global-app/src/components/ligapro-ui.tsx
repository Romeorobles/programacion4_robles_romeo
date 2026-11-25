// Piezas visuales compartidas por los mp de global-app
import { ReactNode } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export function Pantalla({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <ScrollView style={ui.pantalla} contentContainerStyle={ui.contenido}>
      <Text style={ui.titulo}>{titulo}</Text>
      {children}
    </ScrollView>
  )
}

export function Boton({ texto, onPress, rojo }: { texto: string; onPress: () => void; rojo?: boolean }) {
  return (
    <Pressable style={[ui.boton, rojo && ui.rojo]} onPress={onPress}>
      <Text style={ui.textoBoton}>{texto}</Text>
    </Pressable>
  )
}

export function Fila({ titulo, detalle, children }: { titulo: string; detalle: string; children?: ReactNode }) {
  return (
    <View style={ui.fila}>
      <View style={ui.info}>
        <Text style={ui.nombre}>{titulo}</Text>
        <Text style={ui.detalle}>{detalle}</Text>
      </View>
      {children}
    </View>
  )
}

export const ui = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f1f8e9' },
  contenido: { padding: 16, paddingTop: 48, gap: 10 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1b5e20' },
  fila: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#ffffff', borderRadius: 10, padding: 12 },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '700', color: '#1a1a1a' },
  detalle: { fontSize: 13, color: '#607d8b' },
  boton: { backgroundColor: '#2e7d32', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 12, alignItems: 'center' },
  rojo: { backgroundColor: '#b71c1c' },
  textoBoton: { color: '#ffffff', fontWeight: '700' },
  input: { backgroundColor: '#ffffff', borderRadius: 8, borderWidth: 1, borderColor: '#a5d6a7', padding: 10 },
})
