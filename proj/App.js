import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from "./components/homepage";
import LogIncome from "./components/logIncome";
import Profile from "./components/profile";
import ViewIncome from "./components/viewIncome";
import PassedIncome from "./components/passedIncome";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="View" component={ViewIncome} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>

      <Stack.Navigator>
        <Stack.Screen name="LogIncome" component={LogIncome} />
        <Stack.Screen name="PassedIncome" component={PassedIncome} />
      </Stack.Navigator>
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
