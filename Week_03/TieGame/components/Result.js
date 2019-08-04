import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getResultColor } from "./UntilsChoice";
export default function Result(props) {
  const total = props.result.total;
  const tie = props.result.total - props.result.win - props.result.lose;
  if (props.result.total == 0)
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: "bold",
            color: getResultColor(props.result.result),
            fontSize: 25
          }}
        >
          {props.result.result}
        </Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          color: getResultColor(props.result.result),
          fontSize: 25
        }}
      >
        {props.result.result}
      </Text>
      <Text>
        You win {props.result.win}/{props.result.total} games{" "}
        {Math.round((props.result.win / props.result.total) * 100)}%
      </Text>
      <Text>
        Lose {props.result.lose}/{props.result.total} games{" "}
        {Math.round((props.result.lose / props.result.total) * 100)}%
      </Text>
      <Text>
        Tie {tie}/{props.result.total} games{" "}
        {Math.round((tie / props.result.total) * 100)}%{" "}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
});
