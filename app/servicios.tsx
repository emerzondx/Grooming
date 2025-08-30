import { View, Text } from 'react-native';

export default function Servicios() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Servicios</Text>
      <Text style={{ fontSize: 16 }}>Baño, corte de pelo, limpieza de oídos y más.</Text>
    </View>
  );
}
