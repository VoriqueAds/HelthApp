import React from "react";
import { View, Text, StyleSheet,  } from "react-native/types_generated/index";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Button({ title, onPress, type = "primary"}) {
    return (
        <TouchableOpacity style={[styles.button, type === "secondary" && styles.secondary]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  secondary: {
    backgroundColor: "#50E3C2",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
});