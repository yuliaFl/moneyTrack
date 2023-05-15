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

export default function Income({ navigation }) {
  const [hours, setHours] = useState("");
  const [tips, setTips] = useState("");

  const handleHoursChange = (text) => {
    setHours(text);
  };

  const handleTipsChange = (text) => {
    setTips(text);
  };

  const hourlyAmount = parseFloat(hours) * 15.15;
  const result = hourlyAmount + parseFloat(tips);

  const calculateResult = () => {
    return isNaN(result) ? 0 : result;
  };
  const calculateHourly = () => {
    const hourlyResult = result / hours;
    return isNaN(hourlyResult) ? 0 : hourlyResult;
  };

  return (
    <View style={styles.container}>
      <p>Hours worked today</p>
      <TextInput
        style={styles.input}
        value={hours}
        onChangeText={handleHoursChange}
        keyboardType="numeric"
        placeholder="Enter hours"
      />
      <p>Tips made</p>
      <TextInput
        style={styles.input}
        value={tips}
        onChangeText={handleTipsChange}
        keyboardType="numeric"
        placeholder="Enter tips"
      />
      <h3>Total made today: {calculateResult()} </h3>
      <h3>Hourly make: {calculateHourly()}</h3>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Save </Text>
      </TouchableOpacity>
      <br></br>
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