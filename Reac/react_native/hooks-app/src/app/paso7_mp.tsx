import {
  useState,
  useCallback,
  memo,
} from 'react';

import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';


interface Equipo {
  id: number;
  nombre: string;
  puntos: number;
}


interface EquipoItemProps {
  equipo: Equipo;
  onEliminar: (id: number) => void;
}


// Componente memorizado
const EquipoItem = memo(
  ({ equipo, onEliminar }: EquipoItemProps) => {
    console.log('Renderizando:', equipo.nombre);

    return (
      <View style={styles.equipo}>
        <Text>
          {equipo.nombre} - {equipo.puntos} pts
        </Text>

        <Button
          title="Eliminar"
          onPress={() => onEliminar(equipo.id)}
        />
      </View>
    );
  }
);


export default function Paso7mp() {
  const [equipos, setEquipos] = useState<Equipo[]>([
    { id: 1, nombre: 'Barcelona SC', puntos: 45 },
    { id: 2, nombre: 'Emelec', puntos: 38 },
  ]);


  const [fecha, setFecha] = useState(1);


  // Función memorizada para eliminar equipos
  const eliminarEquipo = useCallback((id: number) => {
    setEquipos((actuales) =>
      actuales.filter((equipo) => equipo.id !== id)
    );
  }, []);


  // Función memorizada para agregar equipos
  const agregarEquipo = useCallback(() => {
    setEquipos((actuales) => [
      ...actuales,
      {
        id: Date.now(),
        nombre: 'Liga de Quito',
        puntos: 41,
      },
    ]);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Tabla de posiciones
      </Text>

      <Text>Fecha: {fecha}</Text>

      <Button
        title="Siguiente fecha"
        onPress={() => setFecha((f) => f + 1)}
      />

      <Button
        title="Agregar Liga de Quito"
        onPress={agregarEquipo}
      />

      <FlatList
        data={equipos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <EquipoItem
            equipo={item}
            onEliminar={eliminarEquipo}
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    gap: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  equipo: {
    padding: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    gap: 8,
  },
});
