import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = (props) => (
  <View style={styles.iconContainer}>
    <View style={styles.iconWrapper}>
      <MaterialCommunityIcons name={props.name} size={27} color="#22D4FF" />
    </View>
    <Text style={styles.iconText}>{props.iconText}</Text>
  </View>
);

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: "#384053",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  iconContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
  },

  iconText: {
    height: 20,
    fontWeight: 600,
  },
});

export default Icon;
