import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="home-outline" size={25} />
        <Text style={styles.text}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="calendar-outline" size={25} />
        <Text style={styles.text}>Agenda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="person-outline" size={25} />
        <Text style={styles.text}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  item: { alignItems: 'center' },
  text: { fontSize: 12, color: '#777', marginTop: 4 },
});
