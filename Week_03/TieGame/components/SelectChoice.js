import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
export default function Header(props) {
  return (
    <View style={styles.choicesContainer}>
      <View style={styles.choose}>
        <Text style={styles.choiceDescription}>You</Text>
        <Image
          style={styles.choiceImage}
          source={{ uri: props.playerChoice.uri }}
        />
        <Text style={styles.choiceCardTitle}>{props.playerChoice.name}</Text>
      </View>
      <Text>vs</Text>
      <View style={styles.choose}>
        <Text style={styles.choiceDescription}>Computer</Text>
        <Image
          style={styles.choiceImage}
          source={{ uri: props.computerChoice.uri }}
        />
        <Text style={styles.choiceCardTitle}>{props.computerChoice.name}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  choose: {
    alignItems: "center"
  },
  choicesContainer: {
    flex: 1,
    margin: 10,
    borderWidth: 2,
    shadowRadius: 5,
    paddingBottom: 100,
    paddingTop: 100,
    borderColor: "grey",
    shadowOpacity: 0.9,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 }
  },
  choiceDescription: {
    fontSize: 25,
    color: "#250902",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  choiceCardTitle: {
    fontSize: 30,
    color: "#250902"
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10
  }
});
