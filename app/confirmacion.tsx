import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Confirmacion() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>¡Reserva confirmada!</Text>
      <Text style={{ fontSize: 16, marginBottom: 32 }}>Gracias por confiar en Cachirulo. Te esperamos en tu turno.</Text>
      <Link href="/" asChild>
        <Button title="Volver al inicio" />
      </Link>
    </View>
  );
}
