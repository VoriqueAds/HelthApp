import React from "react";
import { View, Text, StyleSheet,  } from "react-native/types_generated/index";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ title }) {
    return (
        <View style={styles.Header}>
            <Text style={styles.title}>{title}</Text>
            <Ionicons name="menu" size={30} color="#333"/>
        </View>
    )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
});