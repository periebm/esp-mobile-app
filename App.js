import { NavigationContainer } from "@react-navigation/native";
import Main from "./src/pages/Main";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from "./src/pages/Details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" 
      screenOptions={{
        headerShown: false,
        animation: "fade"
}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}