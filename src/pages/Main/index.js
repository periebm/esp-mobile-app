import { Container } from "./styled";
import { StatusBar } from 'expo-status-bar';
import { Button, Text } from 'react-native';

export default function Main({navigation}) {
  
  return (
    <Container>
      <Text>Main!</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </Container>
  );
}