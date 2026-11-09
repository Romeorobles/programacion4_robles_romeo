// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Paso1RM } from './paso1_rm'
import { Paso1mp } from './paso1_mp'
import { Paso2mp } from './paso2_mp'
import { Paso3mp } from './paso3_mp'
import { Paso4mp } from './paso4_mp'
import { Paso5mp } from './paso5_mp'
import { Paso6mp } from './paso6_mp'
import { Paso2 } from './paso2'
import { Paso3 } from './paso3'
import { Paso4 } from './paso4'
import { Paso5 } from './paso5'
import { Paso6 } from './paso6'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.     │
// │  1.1  Flexbox — column, row, flex proporcional, wrap (Rick & Morty) │
// │  1.2  mp LigaPro (cada paso N.1 es su mp, el 1 es 1.2)               │
// │  2    Unidades — dp fijos, '%' y Dimensions                         │
// │  3    Grid responsivo — dashboard de servidores (useWindowDimensions)│
// │  4    Sombras por plataforma — Platform.select (elevation / shadow*) │
// │  5    Tema claro/oscuro — useColorScheme + Context                   │
// │  6    Safe area — SafeAreaView + useSafeAreaInsets                   │
// └──────────────────────────────────────────────────────────────────────┘
const PASO: number = 6.1

export default function Index() {
  switch (PASO) {
    case 1.1:
      return <Paso1RM />
    case 1.2:
      return <Paso1mp />
    case 2:
      return <Paso2 />
    case 2.1:
      return <Paso2mp />
    case 3:
      return <Paso3 />
    case 3.1:
      return <Paso3mp />
    case 4:
      return <Paso4 />
    case 4.1:
      return <Paso4mp />
    case 5:
      return <Paso5 />
    case 5.1:
      return <Paso5mp />
    case 6:
      return <Paso6 />
    case 6.1:
      return <Paso6mp />

    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})
