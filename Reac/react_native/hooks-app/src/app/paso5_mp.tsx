import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


// Contexto del equipo: nombre y entrenador compartidos por toda la pantalla
interface EquipoContextType {
  equipo: string;
  setEquipo: (equipo: string) => void;
  entrenador: string;
  setEntrenador: (entrenador: string) => void;
}


const EquipoContext = createContext<
  EquipoContextType | undefined
>(undefined);


interface EquipoProviderProps {
  children: ReactNode;
}


function EquipoProvider({ children }: EquipoProviderProps) {
  const [equipo, setEquipo] = useState<string>('Barcelona SC');
  const [entrenador, setEntrenador] = useState<string>('Segundo Castillo');

  return (
    <EquipoContext.Provider
      value={{ equipo, setEquipo, entrenador, setEntrenador }}
    >
      {children}
    </EquipoContext.Provider>
  );
}


// Hook personalizado para consumir el contexto
function useEquipo(): EquipoContextType {
  const context = useContext(EquipoContext);

  if (context === undefined) {
    throw new Error('useEquipo debe utilizarse dentro de EquipoProvider');
  }

  return context;
}


// Componente que consume el contexto
function FichaEquipo() {
  const { equipo, setEquipo, entrenador, setEntrenador } = useEquipo();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Equipo: {equipo}</Text>
      <Text style={styles.subtexto}>DT: {entrenador}</Text>

      <Button
        title="Cambiar equipo"
        onPress={() => setEquipo('Emelec')}
      />

      <Button
        title="Cambiar entrenador"
        onPress={() => setEntrenador('Jorge Célico')}
      />
    </View>
  );
}


// Componente principal
export default function Paso5mp() {
  return (
    <EquipoProvider>
      <FichaEquipo />
    </EquipoProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 12,
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtexto: {
    fontSize: 18,
    marginBottom: 20,
  },
});
