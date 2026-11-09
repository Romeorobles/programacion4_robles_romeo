import { useMemo, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


interface Jugador {
  nombre: string;
  partidos: number;
  goles: number;
}


export default function Paso6mp() {
  const [jugadores, setJugadores] = useState<Jugador[]>([
    { nombre: 'Delantero 9', partidos: 20, goles: 14 },
    { nombre: 'Extremo 7', partidos: 18, goles: 6 },
    { nombre: 'Volante 10', partidos: 22, goles: 8 },
  ]);


  const [minuto, setMinuto] = useState<number>(0);


  // Memoriza el cálculo de goles totales y promedio por partido
  const estadisticas = useMemo(() => {
    console.log('Calculando estadísticas...');

    const goles = jugadores.reduce(
      (acumulado, jugador) => acumulado + jugador.goles,
      0
    );
    const partidos = jugadores.reduce(
      (acumulado, jugador) => acumulado + jugador.partidos,
      0
    );

    return { goles, promedio: partidos > 0 ? goles / partidos : 0 };
  }, [jugadores]);


  function agregarJugador() {
    setJugadores((actuales) => [
      ...actuales,
      { nombre: 'Lateral 3', partidos: 15, goles: 2 },
    ]);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Estadísticas del equipo
      </Text>

      <Text>Jugadores: {jugadores.length}</Text>

      <Text style={styles.total}>
        Goles: {estadisticas.goles}
      </Text>

      <Text>
        Promedio por partido: {estadisticas.promedio.toFixed(2)}
      </Text>

      <Button
        title="Avanzar minuto"
        onPress={() => setMinuto((m) => m + 1)}
      />

      <Text>Minuto: {minuto}'</Text>

      <Button
        title="Agregar lateral"
        onPress={agregarJugador}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
