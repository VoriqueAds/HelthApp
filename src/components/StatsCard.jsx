import React from "react";
import { View, Text, StyleSheet,  } from "react-native/types_generated/index";
import { Ionicons } from "@expo/vector-icons";

export default function StatsCard({ number, label }) {
    return (
        <View style={style.card}>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    backgroundColor: "#F6F6F6",
    borderRadius: 12,
    marginHorizontal: 5,
  },
  number: {
    fontSize: 20,
    fontWeight: "700",
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
});