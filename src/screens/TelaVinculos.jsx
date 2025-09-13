import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

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
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Instituicao')}>
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
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20, flex: 1 },
  subtitle: { fontWeight: '600', marginTop: 20, marginBottom: 10 },
  card: {
    backgroundColor: '#F6F6F6',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
});
