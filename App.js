import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import Overall from './components/Overall.js';
import SliderView from './components/SliderView.js';
import Chart from './components/Chart.js';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SliderView" component={SliderView} />
        <Stack.Screen name="Overall" component={Overall} />
        <Stack.Screen name="Chart" component={Chart} />

      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

export default App;