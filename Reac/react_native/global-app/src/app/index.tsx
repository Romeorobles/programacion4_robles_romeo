// app/index.tsx
import { View, Text } from 'react-native'
import Paso1mp from './paso1_mp'
import Paso2mp from './paso2_mp'
import Paso3mp from './paso3_mp'
import Paso4mp from './paso4_mp'
import Paso5mp from './paso5_mp'
import Paso6mp from './paso6_mp'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.         │
// │  1  Paso 1  Store básico — useServidoresStore con crear/eliminar         │
// │  2  Paso 2  Selectors — consumir solo una parte del store                │
// │  3  Paso 3  Acciones asíncronas — cargarServidores con estado de carga   │
// │  4  Paso 4  Múltiples stores — useServidoresStore + useAuthStore         │
// │  5  Paso 5  Persistencia — middleware persist + AsyncStorage             │
// │  6  Paso 6  Ejemplo combinado — inventario persistido con selector       │
// │  N.1  mp LigaPro del paso N                                              │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO: number = 6.1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
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
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

// ─── Paso 1 — se define más abajo ────────────────────────────────────────────
function Paso1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Paso 1 pendiente</Text>
    </View>
  )
}
