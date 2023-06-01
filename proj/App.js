import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Homepage from "./components/homepage";
import Log from "./components/log";
import Profile from "./components/profile";
import Income from "./components/income";
import PassedDate from "./components/passedDate";
import CreateProfileScreen from "./components/createProfile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="Log" component={Log} />
      <Tab.Screen name="PassedDate" component={PassedDate}/>
      <Tab.Screen name="Income" component={Income} />
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


//         <Tab.Screen name="CreateProfileScreen" component={CreateProfileScreen} />