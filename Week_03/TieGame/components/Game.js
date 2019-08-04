import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
export default function Game(props) {
  return (
    <View style={styles.buttonContainer}>
      {props.CHOICES.map(item => {
        return (
          <TouchableOpacity
            style={styles.buttonStyle}
            key={item.name}
            onPress={() => props.onPress(item)}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#640D14"
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  }
});
