// src/screens/TelaFinanceiro.jsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function TelaFinanceiro() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Financeiro</Text>
      <Text style={styles.subtitle}>Resumo do Mês</Text>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardNumber}>R$ 12.500</Text>
          <Text style={styles.cardLabel}>Receitas</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardNumber}>R$ 3.200</Text>
          <Text style={styles.cardLabel}>Despesas</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardNumber}>R$ 9.300</Text>
          <Text style={styles.cardLabel}>Saldo</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Últimas Movimentações</Text>

      <View style={styles.item}>
        <Text style={styles.itemName}>Consulta – Carlos Magno</Text>
        <Text style={styles.itemValue}>+ R$ 300</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemName}>Consulta – Maria Eduarda</Text>
        <Text style={styles.itemValue}>+ R$ 250</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemName}>Cancelamento – José Lima</Text>
        <Text style={[styles.itemValue, { color: 'red' }]}>- R$ 100</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemName}>Repasse para Instituição</Text>
        <Text style={[styles.itemValue, { color: 'red' }]}>- R$ 500</Text>
      </View>

      <TouchableOpacity style={styles.btnExtrato}>
        <Text style={styles.btnText}>Ver Extrato Completo</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Início</Text>
        <Text style={styles.navItem}>Explorar</Text>
        <Text style={styles.navItem}>Área Profissional</Text>
        <Text style={[styles.navItem, styles.active]}>Financeiro</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16, marginBottom: 12, color: '#555' },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    marginHorizontal: 4,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
  },
  cardNumber: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  cardLabel: { fontSize: 14, color: '#444' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: { fontSize: 14, color: '#333' },
  itemValue: { fontSize: 14, fontWeight: 'bold', color: 'green' },
  btnExtrato: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: 'bold' },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: { fontSize: 14, color: '#555' },
  active: { color: '#007bff', fontWeight: 'bold' },
});
