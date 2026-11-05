// app/index.tsx
import { View, Text } from 'react-native'
import Paso1 from './paso1'
import Paso2 from './paso2'
import Paso3 from './paso3'
import Paso3Semuna from './paso3semuna'
import Paso4 from './paso4'
import Paso5 from './paso5'
import Paso6 from './paso6'
import Paso7 from './paso7'
import Paso8 from './paso8'
import Paso1mp from './paso1_mp'
import Paso2mp from './paso2_mp'
import Paso3mp from './paso3_mp'
import Paso4mp from './paso4_mp'
import Paso5mp from './paso5_mp'
import Paso6mp from './paso6_mp'
import Paso7mp from './paso7_mp'
import Paso8mp from './paso8_mp'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  useState — contador de reintentos                    │
// │  2  Paso 2  useEffect — ping periódico con setInterval           │
// │  3  Paso 3  useRef — foco en TextInput y contador sin re-render  │
// │  4  Paso 4  Hooks nativos de RN — dimensiones, esquema de color  │
// │  5  Paso 5  Custom hook — useConexionSimulada                    │
// │  6  Paso 6  Ejemplo combinado — pantalla de estado del servidor  │
// └──────────────────────────────────────────────────────────────────┘
const PASO: number = 8

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 31:
      return <Paso3Semuna />
    case 4:
      return <Paso4 />
    case 5:
      return <Paso5 />
    case 6:
      return <Paso6 />
    case 7:
      return <Paso7 />
    case 8:
      return <Paso8 />
    case 1.1:
      return <Paso1mp />
    case 2.1:
      return <Paso2mp />
    case 3.1:
      return <Paso3mp />
    case 4.1:
      return <Paso4mp />
    case 5.1:
      return <Paso5mp />
    case 6.1:
      return <Paso6mp />
    case 7.1:
      return <Paso7mp />
    case 8.1:
      return <Paso8mp />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
