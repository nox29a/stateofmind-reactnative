import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import Overall from './components/Overall.js';
import SliderView from './components/SliderView.js';
import Chart from './components/Chart.js';
const Stack = createStackNavigator();

function App() {
  return (
<<<<<<< HEAD
    // <MyProvider>
        <Chart />
    // </MyProvider>
=======
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Overall" component={Overall} />
        <Stack.Screen name="SliderView" component={SliderView} />
        <Stack.Screen name="Chart" component={Chart} />

      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
>>>>>>> c24675cbe87e0935c661d85fde96e68ad23d6236
  );
}

export default App;