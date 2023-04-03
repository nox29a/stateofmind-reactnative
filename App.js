
import React, {useState, useEffect} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import CustomMultiPicker from "react-native-multiple-select-list";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const userList = [

  {
    color: "green",
    name: "OK",
    },
    {
    color: "yellow",
    name: "Odrealnienie",
    },
    {
    color: "blue",
    name: "Stres",
    },
    {
    color: "white",
    name: "Dużo emocji",
    },
    {
    color: "darkorange",
    name: "Spokojnie",
    },
    {
    color: "pink",
    name: "Zmęczenie",
    },
  ]

   const OK = {key: 'OK', color: 'blue'};
   const Odrealnienie = {key: 'Odrealnienie', color: 'yellow'};
   const Stres = {key: 'Stres', color: 'orange'};
   const emocji = {key: 'Dużo emocji', color: 'white'};
   const Spokojnie = {key: 'Spokojnie', color: 'darkorange'};
   const Zmęczenie = {key: 'Zmęczenie', color: 'pink'};
  // const asd = {key: 'asd', color: 'red'};
  // const asdaaa = {key: 'asdaaa', color: 'yellow'};
  // const asaaaaaa = {key: 'asaaaaaa', color: 'black'};
  // const marked = {
  //   '2022-12-01': {
  //     dots: [running, walking]
  //   },
  //   '2022-12-02': {
  //     dots: [running, walking, cycling,asd,asdaaa,asaaaaaa]
  //   }

const App = () => {
  const [selected, setSelected] = useState("new Date()");

  const [mindState, setMindState] = useState([]);

  useEffect(() => {
    newTable = mindState;
  });

  const handlePress = (item) => {
    const mindState = newTable.concat(item.name);
    const unique = [...new Set(mindState)];
    console.log("🚀 ~ file: App.js:49 ~ handlePress ~ unique:", unique)
    setMindState(unique);
  }
  const marked = {
    '2023-04-11': {
      dots: [Zmęczenie,Odrealnienie,Spokojnie]
    },
    '2023-04-02': {
      dots: [Odrealnienie,Spokojnie]
    }}

  return (
    <SafeAreaView style={styles.container}>
    <Calendar
    markingType="multi-dot"
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
      }}

    //   onDayPress={day => {
    //     [rok, miesiac, dzien] = day.dateString.split('-');
    //     const nowaData = `${dzien}-${miesiac}`;
    //     setSelected(nowaData);
    //   }}
    //   markedDates={{
    //     [selected]: {selected: true, marked: true, selectedDotColor: 'orange'}
    //   }}
    // />
    onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={marked}
    />



      <Text style={styles.text}>{selected}</Text>
      <View style={styles.states}>
      {userList.map((item) => {
        return (
        
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={{backgroundColor: item.color,
                  fontSize: 20,
                  textAlign: 'center',
                  margin: 12,
                  height: 40,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,}}
                  >
                  {item.name}
            </Text>
          </TouchableOpacity>
       
          
        );
      })}
    </View>
    <TouchableOpacity onPress={() => handleSave()}>
      <Text style={styles.text}>Zapisz</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

// style:
// <View style={styles.container}></View>
// import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 0,
  },
  states: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    height: 50,
    borderWidth: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 12,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});