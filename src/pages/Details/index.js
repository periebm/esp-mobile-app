import { Container } from "./styled";
import { StatusBar } from 'expo-status-bar';
import { Button, Text } from 'react-native';

export default function Details({navigation}) {
  return (
    <Container>
      <Text>Details</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Main')}
      />
    </Container>
  );
}