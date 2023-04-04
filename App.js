
import React, {useState, useEffect} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import CustomMultiPicker from "react-native-multiple-select-list";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ok = {key: 'OK', color: 'brown'};
const odrealnienie = {key: 'Odrealnienie', color: 'yellow'};
const stres = {key: 'Stres', color: 'lightblue'};
const emocje = {key: 'Dużo emocji', color: 'lightgreen'};
const spokojnie = {key: 'Spokojnie', color: 'darkorange'};
const zmęczenie = {key: 'Zmęczenie', color: 'pink'};
const userList = [ok, odrealnienie, stres, emocje, spokojnie,zmęczenie]

const App = () => {
  const [selected, setSelected] = useState("new Date()");
  const [marked, setMarked] = useState();
  const [mindState, setMindState] = useState([]);

  useEffect(() => {
    newTable = mindState;
  });

  const handlePress = (item) => {
    const mindState = newTable.concat(item);
    const unique = [...new Set(mindState)];
    setMindState(unique);
  }
  const handleSave = () => {
    setMarked({...marked,
      [selected] : {
        dots: newTable
      }})
    }
  const handleDelete = () => {
      setMarked({...marked,
        [selected] : {
          dots: {}
        }})
      }

  return (
    <SafeAreaView style={styles.container}>
    <Calendar
    markingType="multi-dot"

    markedDates={marked}
    onDayPress={day => {
        setMindState([]);
        setSelected(day.dateString);
      }}
    
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
                  {item.key}
            </Text>
          </TouchableOpacity>
       
          
        );
      })}
    </View>
    <TouchableOpacity onPress={() => handleSave()}>
      <Text style={styles.text}>Zapisz</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleDelete()}>
      <Text style={styles.text}>Usuń</Text>
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
    backgroundColor: "black",
  },
  states: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    height: 50,
    borderWidth: 5,
    borderColor: 'red',
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 12,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'blue',
  },

});