import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TelaInstituicao() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header title="Clínica Mais Saúde" />

        <Text style={styles.subtitle}>Estatísticas</Text>
        <View style={styles.statsRow}>
          <StatCard number={2000} label="Atendimentos" />
          <StatCard number={157} label="Pacientes" />
          <StatCard number={"4.95"} label="Avaliação" />
        </View>

        <Text style={styles.subtitle}>Próximos Atendimentos</Text>
        <View style={styles.box}>
          <Text>- Carlos Magno de Souza, 8:30 às 9:00</Text>
          <Text>- Carlos Magno de Souza, 9:30 às 10:00</Text>
          <Text>- Carlos Magno de Souza, 16:30 às 17:00</Text>
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
  statsRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  box: {
    backgroundColor: "#F6F6F6",
    padding: 15,
    borderRadius: 10,
  },
});