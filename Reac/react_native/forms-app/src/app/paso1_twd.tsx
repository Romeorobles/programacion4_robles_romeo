// Paso 1 twd — FlatList básica con personajes de The Walking Dead trabajo individual en clase.
import { Paso1FilaPersonaje } from '@/components/paso1FilaPersonaje'
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'

export type Personaje = {
  id: string
  nombre: string
  grupo: string
  vivo: boolean
}

const PERSONAJES: Personaje[] = [
  { id: '1',  nombre: 'Rick Grimes',     grupo: 'Alexandria', vivo: true  },
  { id: '2',  nombre: 'Daryl Dixon',     grupo: 'Alexandria', vivo: true  },
  { id: '3',  nombre: 'Michonne',        grupo: 'Alexandria', vivo: true  },
  
  
]

export function Paso1twd() {
  return (
    <SafeAreaView style={styles1twd.contenedor}>
      <Text style={styles1twd.titulo}>Sobrevivientes de The Walking Dead</Text>
      <FlatList<Personaje>
        data={PERSONAJES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaPersonaje personaje={item} />}
      />
    </SafeAreaView>
  )
}

const styles1twd = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#1b1b1b' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#7f0000',
    color: '#fff',
  },
})
