// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Paso1 } from './paso1'
import { Paso1mp } from './paso1_mp'
import { Paso1twd } from './paso1_twd'
import { Paso2 } from './paso2'
import { Paso2mp } from './paso2_mp'
import { Paso3 } from './paso3'
import { Paso3mp } from './paso3_mp'
import { Paso4 } from './paso4'
import { Paso4mp } from './paso4_mp'
import { Paso4volumen } from './paso4volumen'
import { Paso5 } from './paso5'
import { Paso5mp } from './paso5_mp'
import { Paso5volumen } from './paso5volumen'
import { Paso6 } from './paso6'
import { Paso6mp } from './paso6_mp'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.     │
// │  1  FlatList básica — servidores con nombre/IP/estado               │
// │  2  FlatList avanzada — separadores, vacío, refresh, paginación     │
// │  3  SectionList — servidores agrupados por datacenter               │
// │  4  TextInput tipado — campo de IP con teclado controlado           │
// │  5  Formulario con validación — agregar servidor                    │
// │  6  KeyboardAvoidingView — formulario sin tapado de teclado         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO: number = 2.1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 1.1:
      return <Paso1mp />
    case 1.2:
      return <Paso1twd />
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
    case 4.2:
      return <Paso4volumen />
    case 5:
      return <Paso5 />
    case 5.1:
      return <Paso5mp />
    case 5.2:
      return <Paso5volumen />
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

// Los componentes Paso1…Paso6 se añaden en cada sección del tutorial.