import * as React from "react";
import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  number,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Homepage({ navigation,route }) {
//const {userName} = route.params;
  return (
    <View style={styles.container}>
      <h2> Welcome back ----- </h2>
      <TouchableOpacity style={styles.button}  onPress={() => {
          navigation.navigate("Log");
        }}>
        <Text style={styles.buttonText}>Worked today</Text>
      </TouchableOpacity>
      <br></br>
      <TouchableOpacity style={styles.button}  onPress={() => {
          navigation.navigate("PassedDate");
        }}>
        <Text style={styles.buttonText}>Log passed date</Text>
      </TouchableOpacity>
      <br></br>
      <TouchableOpacity style={styles.button}  onPress={() => {
          navigation.navigate("Income");
        }}>
        <Text style={styles.buttonText}>Money made</Text>
      </TouchableOpacity>
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
  nav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    height: 40,
    width: 200,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
