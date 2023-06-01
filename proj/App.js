import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./components/homepage";
import LogIncome from "./components/logIncome";
import Profile from "./components/profile";
import ViewIncome from "./components/viewIncome";
import PassedIncome from "./components/passedIncome";
import CreateProfileScreen from "./components/createProfile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="PassedIncome" component={PassedIncome}/>
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Log" component={LogIncome} />
      <Tab.Screen name="View" component={ViewIncome} />
      <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
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


// <Tab.Screen name="CreateProfileScreen" component={CreateProfileScreen} />
// 