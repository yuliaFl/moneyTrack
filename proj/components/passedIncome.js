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
import {Calendar, LocaleConfig} from 'react-native-calendars';

export default function PassedIncome({ navigation,route }) {
  const [selected, setSelected] = useState('');
  return (
    <View style={styles.container}>
    <Calendar
    onDayPress={day => {
      setSelected(day.dateString);
    }}
    markedDates={{
      [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
    }}
  />
  </View>
    //https://www.youtube.com/watch?v=22txA5uRhHo
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
