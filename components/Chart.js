import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import TabNavigator from './TabNavigator';
import { mindContext } from '../context/mindContext'
const state1 = {key: 'Zmęczenie', color: 'brown', value: 0, note: '', visible: false};
const state2 = {key: 'OK', color: 'blue', value: 0, note: '', visible: false};
const state3 = {key: 'Stres', color: 'red', value: 0, note: '', visible: false};
const state4 = {key: 'Dużo emocji', color: 'green', value: 0, note: '', visible: false};
const state5 = {key: 'Spokojnie', color: 'darkorange', value: 0, note: '', visible: false};
const state6 = {key: 'Odrealnienie', color: 'pink', value: 0, note: '', visible: false};
const userList = [state1, state2, state3, state4, state5,state6]


<<<<<<< HEAD
export default function Chart({navigation }) {
  const [isSelected, setSelection] = useState(1);
  const [visible, setVisible] = useState(true);
  // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  // console.log(marked)
  // {marked["2023-04-20"]['dots'].map((item => console.log(item.value)))}
  // // console.log(marked["2023-04-20"]['dots'])
=======

export default function Chart({navigation, route }) {
  const { userList, marked } = route.params;
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log(marked)
  {marked["2023-04-22"]['dots'].map((item => console.log(item.value)))}
  // console.log(marked["2023-04-20"]['dots'])
>>>>>>> c24675cbe87e0935c661d85fde96e68ad23d6236
  
  //const labels = [1,2,3,4,5,6,7];
  const data = [12,42,31,64,23,21,51];
  

  console.log(userList)

  const chartData = {
    labels: ['Pon', 'Wto', 'Sro', 'Czw', 'Pią', 'Sob', 'Nied'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (count) => `rgba(0, 0, 0, ${console.log(count),1})`, // Black line color
        strokeWidth: 2 // Line width
      },
      {
        data: [35, 55, 70, 20, 10, 30],
        color: (count) => `rgba(0, 0, 0, ${isSelected ? '1' : '0'})`, // Transparent line color
        strokeWidth: 2 // Line width
      }
    ]
  };
  


  const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: () => `rgba(0, 0, 0, 1)`,
  strokeWidth: 1,
  fillShadowGradientFrom : '#ffffff',
  fillShadowGradientTo: '#ffffff',
  fromZero: 1,
    
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <LineChart
        data={chartData}
=======
      {/* <LineChart
        data={chartData.data}
>>>>>>> c24675cbe87e0935c661d85fde96e68ad23d6236
        width={screenWidth}
        height={400}
        chartConfig={chartConfig}
        bezier
        
      />
          {userList.map(item => {
            return (
              <View style={styles.checkboxContainer}>
            <Text style={styles.label}>{item.key}</Text>
            <Checkbox
              color={item.color}
              status={item.visible === 1 ? 'checked' : 'unchecked'}
              onPress={() => {
                item.visible = item.visible === 1 ? 0 : 1;
                setVisible([...userList]);
              }}
           />
           </View>
            )
          })}


      <TabNavigator navigation={navigation} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginLeft: 50,
    marginBottom: 20,
  },
  checkbox: {
    border: 2,
  },
  label: {
    margin: 8,
  },
});

