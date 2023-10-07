import { ButtonRequest, ButtonText, Container } from "./styled";
import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, Text } from 'react-native';
import {API_KEY} from "react-native-dotenv"
import axios from 'axios';
import { useState } from "react";

export default function Main({navigation}) {
  const api = API_KEY;
  const [number, setNumber] = useState(0);

  function handleRequest() {
    const promise = axios.get(`${api}/randomNumber`)
      promise.then((result) => {
        setNumber(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }

  return (
    <Container>
      <Text>Main Page</Text>
      <StatusBar style="auto" />
      <Text>{number}</Text>
      <ButtonRequest
        onPress={() => handleRequest()}
      >
        <ButtonText> REQUEST TO BACKEND </ButtonText>
      </ButtonRequest>
      <Button
        title="Change Page"
        onPress={() => navigation.navigate('Details')}
      />
    </Container>
  );
}