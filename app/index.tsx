import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Inicio() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 16 }}>Cachirulo</Text>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>Servicio de grooming en Curicó</Text>
      <Link href="/reservar" asChild>
        <Button title="Reservar" />
      </Link>
      <Link href="/servicios" asChild>
        <Button title="Ver Servicios" />
      </Link>
      <Link href="/perfil" asChild>
        <Button title="Mi Perfil" />
      </Link>
    </View>
  );
}
