// app/index.tsx
import { Text, View } from 'react-native'
import { Paso1 } from './paso1'
import { Paso2 } from './paso2'
import { Paso1mp } from './paso1_mp'
import { Paso2mp } from './paso2_mp'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Texto y vistas básicas                               │
// │  2  Paso 2  Imágenes y botones                                   │
// │  N.1  mp LigaPro del paso N                                      │
// └──────────────────────────────────────────────────────────────────┘
const PASO: number = 2

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 1.1:
      return <Paso1mp />
    case 2.1:
      return <Paso2mp />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
