import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "./components/about";
import Homepage from "./components/homepage";
import Income from "./components/income";
import Savings from "./components/savings";
import Spendings from "./components/spendings";
import Profile from "./components/profile";

const Stack = createNativeStackNavigator();

function MyStack() {
  var options = {
    headerStyle: { backgroundColor: '#262361' },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
  };
  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Group screenOptions={options}>
      <Stack.Screen name="Income" component={Income} />
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Savings" component={Savings} />
      <Stack.Screen name="Spendings" component={Spendings} />
      <Stack.Screen name="Profile" component={Profile} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
