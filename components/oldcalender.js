import React, {useState, useEffect} from 'react';
import {Calendar} from 'react-native-calendars';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard,TouchableWithoutFeedback} from 'react-native';
import {
  Appbar,

} from 'react-native-paper';
import TabNavigator from './TabNavigator';
const odrealnienie = {key: 'Odrealnienie', color: 'brown', pressed: false};
const ok = {key: 'OK', color: 'blue', pressed: false};
const stres = {key: 'Stres', color: 'red', pressed: false};
const emocje = {key: 'Dużo emocji', color: 'green', pressed: false};
const spokojnie = {key: 'Spokojnie', color: 'darkorange', pressed: false};
const zmęczenie = {key: 'Zmęczenie', color: 'pink', pressed: false};
const userList = [odrealnienie, ok, stres, emocje, spokojnie,zmęczenie]

const Overall = ({ navigation }) => {
  const [selected, setSelected] = useState("new Date()");
  const [marked, setMarked] = useState();
  const [mindState, setMindState] = useState([]);
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
  };

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
      setText("");
    }

  const handleRead = (item,day) => {
    console.log(day);
    const noteValue = marked[day].note;
    console.log(noteValue);
    setText(noteValue);
    {userList.map((test) => {
      test.pressed = false;
      newTable = [];
      for (let i = 0; i < item.length; i++) {
      if ( test.key === item[i].key) {
        const mindState = newTable.concat(item);
        const unique = [...new Set(mindState)];
        test.pressed = true;
        setMindState(unique);
    }}})}
      
      
  }

  const handleSave = () => {
    console.log(marked)
      setMarked({...marked,
        [selected] : {
          dots: newTable,
          note: text,
        }})
    }

  const handleDelete = () => {
      setMarked({...marked,
        [selected] : {
          dots: {},
          note: '',
        }})
      }
      
  return (
    <SafeAreaView style={styles.container}>
    
      <Calendar
          theme={{
    calendarBackground: '#222',
    dayTextColor: '#fff',
    textDisabledColor: '#444',
    monthTextColor: '#888'
  }}

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
          handleRead((marked[day.dateString]['dots']),day.dateString)
        }
          }}}
        markedDates={{
            ...marked,
            [selected]: {selected: true}
          }}
      />
      <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() } }>
      <View style={styles.states}>
      <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={4}
        onChangeText={handleTextChange}
        value={text}
        placeholder="asdasdasd"
      />
        {userList.map((item) => {
          return (  
            <TouchableOpacity key={item.key} onPress={() => handlePress(item)} >
              <Text style={{
              backgroundColor: item.pressed? item.color : 'black', 
                          fontSize: 20,
                          color: "white",
                          textAlign: 'center',
                          margin: 12,
                          height: 40,
                          borderRadius: 10,
                          
                          
                          padding: 3,}}
                    >{item.key}
              </Text>
            </TouchableOpacity>
          );
        })}

      </View>
       </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => handleSave()}> 
          <Text style={styles.text}>Zapisz</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete()}>
          <Text style={styles.text}>Usuń</Text>
      </TouchableOpacity>
        <TabNavigator navigation={navigation}/>
    </SafeAreaView>
  );
};

export default Overall;

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

  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 12,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: 'blue',
    borderRadius: 10,
  },
  textArea: {
    height: 120,
    width: 320,
    color: 'white',
    borderWidth: 2,
    borderColor: 'blue',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});