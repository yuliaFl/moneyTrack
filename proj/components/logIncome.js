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

export default function LogIncome({ navigation }) {
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
      <h2>Hours worked today</h2>
      <TextInput
        style={styles.input}
        value={hours}
        onChangeText={handleHoursChange}
        keyboardType="numeric"
        placeholder="Enter hours"
      />
      <h2>Tips made</h2>
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
      <TouchableOpacity style={styles.button}  onPress={() => {
          navigation.navigate("PassedIncome");
        }}>
        <Text style={styles.buttonText}>Log passed date</Text>
      </TouchableOpacity>
      <br></br>
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
