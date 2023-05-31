import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "./homepage";
import Income from "./income";
import Profile from "./profile";

const Tab = createBottomTabNavigator();

export default function CreateProfile({ navigation }) {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="CreateProfileScreen" component={CreateProfileScreen} />
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="Income" component={Income} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function CreateProfileScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [hourlyWage, setHourlyWage] = useState("");

  return (
    <View style={styles.container}>
      <h2>What's your name?</h2>
      <TextInput
        style={styles.input}
        placeholder="Enter First Name"
        value={userName}
        onChangeText={setUserName}
      />
      <h2>Enter hourly wage</h2>
      <TextInput
        style={styles.input}
        placeholder="Enter Hourly wage"
        value={hourlyWage}
        onChangeText={setHourlyWage}
      />
      <Button
        title="Save"
        onPress={() => {
          navigation.navigate("Homepage", {
            userName,
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
