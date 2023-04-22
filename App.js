import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import Overall from './components/Overall.js';
import SliderView from './components/SliderView.js';
import Chart from './components/Chart.js';

import MyProvider from './context/mindContext.js';

const Stack = createStackNavigator();

function App() {
  return (
    // <MyProvider>
        <Chart />
    // </MyProvider>
  );
}

export default App;