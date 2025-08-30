import { View, Text } from 'react-native';

export default function Perfil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Mi Perfil</Text>
      <Text style={{ fontSize: 16 }}>Aquí puedes ver y editar tus datos personales.</Text>
    </View>
  );
}
