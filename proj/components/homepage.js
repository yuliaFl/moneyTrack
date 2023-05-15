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

export default function Homepage({ navigation }) {
  return (
    <View style={styles.Screen}>
      <View style={styles.nav}>
        <TouchableOpacity
          style={styles.buttonNav}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNav}
          onPress={() => navigation.navigate("Spendings")}
        >
          <Text style={styles.buttonText}>$$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNav}
          onPress={() => navigation.navigate("Income")}
        >
          <Text style={styles.buttonText}>In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNav}
          onPress={() => navigation.navigate("Savings")}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNav}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>
      </View>
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
  buttonNav: {
    height: 30,
    width: 58,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
