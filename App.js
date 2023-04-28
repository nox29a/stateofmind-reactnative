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
<<<<<<< HEAD
    <UserContext.Provider value={userList}>
=======
<<<<<<< HEAD
    // <MyProvider>
        <Chart />
    // </MyProvider>
=======
>>>>>>> df04e726db2a7a3674daf044823ed47c0055a039
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Overall" component={Overall} />
        <Stack.Screen name="SliderView" component={SliderView} />
        <Stack.Screen name="Chart" component={Chart} />
      </Stack.Navigator>

      <StatusBar />
    </NavigationContainer>
<<<<<<< HEAD
    </UserContext.Provider>
=======
>>>>>>> c24675cbe87e0935c661d85fde96e68ad23d6236
>>>>>>> df04e726db2a7a3674daf044823ed47c0055a039
  );
};

export default App;