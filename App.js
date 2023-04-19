import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Overall from './components/Overall.js';
import Test from './components/Test.js';
import Chart from './components/Chart.js';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Overall" component={Overall} />
        <Stack.Screen name="Chart" component={Chart} />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;