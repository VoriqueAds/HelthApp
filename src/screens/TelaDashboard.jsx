import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import Button from "../components/Button";
import BottomNav from "../components/BottomNav";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TelaDashboard({ navigation }) {
    return (
        <SafeAreaView styles={styles.container}>
            <View style={styles.content}>
                <Header title="Olá, Dra. Maria Glenda."/>

                <View style={styles.statsRow}>
                    <StatsCard number={2000} label="Atendimento"/>
                    <StatsCard number={1253} label="Pacientes"/>
                    <StatsCard number={"4+95"} label="Avaliação"/>
                </View>

                <Button title="Agenda de Atendimentos" />
                <Button title="Serviços que Ofereço" type="secondary" />

                <View style={styles.box}>
                    <Text style={styles.messageTitle}>Atendimento Hoje</Text>
                    <Text>- Carlos Magno, 09:30 às 10:00</Text>
                    <Text>- Carlos Magno, 10:30 às 11:00</Text>
                </View>

                <Button title="Meus Vinculos" onPress={() => navigation.navigate("Tela3")} type="secondary"/>
            </View>
            <BottomNav/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 20, flex: 1 },
  statsRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 25 },
  box: {
    backgroundColor: "#F6F6F6",
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  subtitle: { fontWeight: "600", marginBottom: 10 },
});