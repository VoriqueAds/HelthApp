import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TelaVinculos({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header title="Meus Vínculos" />

        <Text style={styles.subtitle}>Solicitações Recebidas</Text>
        <View style={styles.card}>
          <Text>Clínica Patinhas</Text>
        </View>

        <Text style={styles.subtitle}>Vínculos</Text>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Tela4")}>
          <Text>Clínica Mais Saúde</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Text>iSaúde</Text>
        </View>
      </View>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 20, flex: 1 },
  subtitle: { fontWeight: "600", marginTop: 20, marginBottom: 10 },
  card: {
    backgroundColor: "#F6F6F6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
});