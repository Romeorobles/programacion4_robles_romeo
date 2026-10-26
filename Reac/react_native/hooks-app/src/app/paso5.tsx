

import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


import {
  UsuarioProvider,
  useUsuario,
} from '@/Contex/UsuarioContext';


// Componente que consume el contexto
function Perfil() {
  const { usuario, setUsuario } = useUsuario();


  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Hola, {usuario}
      </Text>


      <Button
        title="Cambiar usuario"
        onPress={() =>
          setUsuario('Homero Simpson')
        }
      />
    </View>
  );
}


// Componente principal
export default function App() {
  return (
    <UsuarioProvider>
      <Perfil />
    </UsuarioProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});


