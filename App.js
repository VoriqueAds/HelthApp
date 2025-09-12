import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Intro from './src/screens/TelaHome';
import DashboardProfissional from './src/screens/TelaDashboard';
import Vinculos from './src/screens/TelaVinculos';
import Instituicao from './src/screens/TelaInstituicao';
import Financeiro from './src/screens/TelaFinanceiro';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="DashboardProfissional" component={DashboardProfissional} />
        <Stack.Screen name="Vinculos" component={Vinculos} />
        <Stack.Screen name="Instituicao" component={Instituicao} />
        <Stack.Screen name="Financeiro" component={Financeiro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
