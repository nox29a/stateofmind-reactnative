import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import TabNavigator from './TabNavigator';



export default function Chart({navigation, route }) {
  const { userList, marked } = route.params;
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log(marked)
  {marked["2023-04-20"]['dots'].map((item => console.log(item.value)))}
  // console.log(marked["2023-04-20"]['dots'])
  
  const labels = [];
  const data = [];
  

  
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
      },
    ],
  };


  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* <LineChart
        data={chartData.data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
      <TabNavigator navigation={navigation} /> */}
      <Text>{marked["2023-04-20"]['dots']['value']}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

