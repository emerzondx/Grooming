import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Reservar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Reservar turno</Text>
      <Text style={{ fontSize: 16, marginBottom: 32 }}>Selecciona fecha y servicio para tu mascota.</Text>
      {/* Aquí iría el formulario de reserva */}
      <Link href="/confirmacion" asChild>
        <Button title="Confirmar Reserva" />
      </Link>
    </View>
  );
}
