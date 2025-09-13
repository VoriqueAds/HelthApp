import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import StatCard from '../components/StatCard';
import Button from '../components/Button';
import BottomNav from '../components/BottomNav';

export default function TelaHome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header title="Olá, Dra. Maria Glenda." />

        <View style={styles.statsRow}>
          <StatCard number={0} label="Atendimentos" />
          <StatCard number={0} label="Pacientes" />
          <StatCard number={0} label="Avaliações" />
        </View>

        <Button title="Agenda de Atendimentos" onPress={() => navigation.navigate('DashboardProfissional')} />
        <Button title="Serviços que Ofereço" type="secondary" />

        <View style={styles.messageBox}>
          <Text style={styles.messageTitle}>Não há atendimentos agendados para hoje.</Text>
          <Text style={styles.messageText}>
            Atendendo pela Doctoralia você tem acesso ao prontuário eletrônico e pode oferecer a opção de atendimento por vídeo.
          </Text>
          <Text style={styles.link}>Conhecer Planos</Text>
        </View>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 20 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  messageBox: { backgroundColor: '#FFF5E5', padding: 15, borderRadius: 10, marginTop: 10 },
  messageTitle: { fontWeight: '600', marginBottom: 5 },
  messageText: { fontSize: 14, color: '#444', marginBottom: 8 },
  link: { color: '#4A90E2', fontWeight: '600' },
});
