import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import StatCard from '../components/StatCard';
import Button from '../components/Button';
import BottomNav from '../components/BottomNav';

export default function TelaDashboard({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header title="Olá, Dra. Maria Glenda." />

        <View style={styles.statsRow}>
          <StatCard number={2000} label="Atendimentos" />
          <StatCard number={1253} label="Pacientes" />
          <StatCard number={'4.95'} label="Avaliação" />
        </View>

        <Button title="Agenda de Atendimentos" />
        <Button title="Serviços que Ofereço" type="secondary" />

        <View style={styles.box}>
          <Text style={styles.messageTitle}>Atendimento Hoje</Text>
          <Text>- Carlos Magno, 09:30 às 10:00</Text>
          <Text>- Carlos Magno, 10:30 às 11:00</Text>
        </View>

        <Button title="Meus Vínculos" onPress={() => navigation.navigate('Vinculos')} type="secondary" />
      </View>
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20, flex: 1 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  box: {
    backgroundColor: '#F6F6F6',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  messageTitle: { fontWeight: '600', marginBottom: 10 },
});
