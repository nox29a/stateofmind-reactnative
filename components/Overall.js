import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Keyboard,TouchableWithoutFeedback} from 'react-native';
import TabNavigator from './TabNavigator';

const date = new Date();
const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;



const Overall = ({ navigation, route }) => {
  const { mojProps } = route.params;
  console.log(mojProps)
  
  const [selected, setSelected] = useState(dateString);
  const [marked, setMarked] = useState();

  const handleSave = () => {
    setMarked({...marked,
      [selected] : {
        dots: userList,
      }})
      console.log("🚀 ~ file: Overall.js:28 ~ handleSave ~ marked:", marked)
    }

      
  return (
    <SafeAreaView  style={styles.container}>
    <Calendar 
      onDayPress={day => {
        setSelected(day.dateString)
      }}
      markingType="multi-dot"
      const markedDotDates={marked}
      markedDates={{
            ...marked,
            [selected]: {selected: true}
          }}
    />
       
       {/* <TouchableOpacity style={styles.states} onPress={() => navigation.navigate('SliderView', { mojProps })}>

        {userList.map((item) => {
          return (  
            <View key={item.key} style={{ marginBottom: 20 }} >
              <Text style={{ fontSize: 15, marginTop: 5, textAlign: 'center'}}>
                {item.key}: {item.value}
              </Text>
              <Text style={{ fontSize: 10, color:'grey', textAlign: 'center'}}>
              {item.note}
              </Text>


            </View>
          );
        })}
       </TouchableOpacity> */}
       <TouchableOpacity style={styles.states} onPress={() => handleSave()}> 
            <Text style={styles.text}>Zapisz</Text>
        </TouchableOpacity>
      <TabNavigator navigation={navigation} mojProps={mojProps} />
    </SafeAreaView>
  );
};

export default Overall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 0,
    backgroundColor: "white",
  },
  states: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    columnGap: 50,
    height: 50,

  },
  text: {
    fontSize: 20,

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