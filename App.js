import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Textarea, View } from 'react-native';

const ok = {key: 'OK', color: 'brown', pressed: false};
const odrealnienie = {key: 'Odrealnienie', color: 'yellow', pressed: false};
const stres = {key: 'Stres', color: 'lightblue', pressed: false};
const emocje = {key: 'Dużo emocji', color: 'lightgreen', pressed: false};
const spokojnie = {key: 'Spokojnie', color: 'darkorange', pressed: false};
const zmęczenie = {key: 'Zmęczenie', color: 'pink', pressed: false};
const userList = [ok, odrealnienie, stres, emocje, spokojnie,zmęczenie]

const App = () => {
  const [selected, setSelected] = useState("new Date()");
  const [marked, setMarked] = useState();
  const [mindState, setMindState] = useState([]);
  const [check, setCheck] = useState();

  useEffect(() => {
    newTable = mindState;
    
  });

  const handlePress = (item) => {
    console.log(item);
    item.pressed =!item.pressed;
    if (item.pressed) {
      const mindState = newTable.concat(item);
      const unique = [...new Set(mindState)];
      setMindState(unique);
    }
    else {
      const unique = mindState.filter(test => test.key !== item.key);
      setMindState(unique);
    }}

  const handleReset = () => {
      {userList.map((item) => {item.pressed = false})}
      setMindState([]);
    }

  const handleRead = (item) => {
    {userList.map((test) => {test.pressed = false;
    item.map((elem,index) => {  
      console.log(index)
      if ( test.key === elem[0].key) {
        console.log("sadasda");
        test.pressed = true}
        setMindState([]);})})}
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
        const markedDotDates={marked}
        onDayPress={day => {
        setSelected(day.dateString)
        if ((marked) === undefined){
          console.log("marked is undefined")}
        else {
        if ((marked[day.dateString]) === undefined) {
          handleReset()
        }
        else {
          console.log("@@@@@@@@@@@@@@@@@@@@@@")
          handleRead((marked[day.dateString]['dots']))
        }
          }}}
        markedDates={{
            ...marked,
            [selected]: {selected: true}
          }}
      />
      <View style={styles.states}>
        {userList.map((item) => {
          return (  
            <TouchableOpacity key={item.key} onPress={() => handlePress(item)} >
              <Text style={{backgroundColor: item.pressed? item.color : 'white', 
                          fontSize: 20,
                          textAlign: 'center',
                          margin: 12,
                          height: 40,
                          margin: 12,
                          borderWidth: 1,
                          padding: 10,}}
                    >{item.key}
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
  notes: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderColor: 'green',
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