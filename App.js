import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import Overall from './components/Overall.js';
import SliderView from './components/SliderView.js';
import Chart from './components/Chart.js';
import Test from './components/Test.js';
import { UserContext } from './components/Overall.js';

const Stack = createStackNavigator();

const App = () => {

  const state1 = {key: 'Zmęczenie', color: 'brown', value: 0, note: ''};
  const state2 = {key: 'OK', color: 'blue', value: 0, note: ''};
  const userList = [state1, state2]
  return (
    <UserContext.Provider value={userList}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Overall" component={Overall} />
        <Stack.Screen name="SliderView" component={SliderView} />
        <Stack.Screen name="Chart" component={Chart} />
      </Stack.Navigator>

      <StatusBar />
    </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;